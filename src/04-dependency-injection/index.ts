interface NotificationService {
  send(to: string, message: string): void;
}

class EmailService implements NotificationService {
  send(to: string, message: string): void {
    console.log(`Enviando email a ${to}: ${message}`);
  }
}

class UserService {
  constructor(private notificationService: NotificationService) {}

  registerUser(name: string, email: string): void {
    console.log(`Usuario ${name} registrado.`);
    this.notificationService.send(email, "¡Bienvenido a la plataforma!");
  }
}

const emailService = new EmailService();
const userService = new UserService(emailService);

userService.registerUser("Roman", "roman@example.com");
