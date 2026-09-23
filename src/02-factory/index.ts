interface Notification {
  send(message: string): void;
}

class EmailNotification implements Notification {
  send(message: string): void {
    console.log("Email enviado: " + message);
  }
}

class PushNotification implements Notification {
  send(message: string): void {
    console.log("Push enviado: " + message);
  }
}

class SmsNotification implements Notification {
  send(message: string): void {
    console.log("SMS enviado: " + message);
  }
}

class NotificationFactory {
  public static create(type: string): Notification {
    if (type === "email") {
      return new EmailNotification();
    } else if (type === "push") {
      return new PushNotification();
    } else if (type === "sms") {
      return new SmsNotification();
    }
    throw new Error("Tipo no valido");
  }
}

const email = NotificationFactory.create("email");
const push = NotificationFactory.create("push");

email.send("Hola por correo");
push.send("Hola por notificacion");
