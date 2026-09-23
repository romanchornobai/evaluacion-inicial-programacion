interface User {
  id: number;
  name: string;
  email: string;
}

class UserDAO {
  private users: User[] = [];

  public selectAll(): User[] {
    return this.users;
  }

  public selectById(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }

  public insert(user: User): void {
    this.users.push(user);
  }

  public update(id: number, name: string, email: string): void {
    const user = this.selectById(id);
    if (user) {
      user.name = name;
      user.email = email;
    }
  }

  public delete(id: number): void {
    this.users = this.users.filter(u => u.id !== id);
  }
}

const userDao = new UserDAO();

userDao.insert({ id: 1, name: "Roman", email: "roman@test.com" });
userDao.insert({ id: 2, name: "Carlos", email: "carlos@test.com" });

console.log("Usuarios iniciales:", userDao.selectAll());

userDao.update(1, "Roman Editado", "roman_nuevo@test.com");
console.log("Usuario modificado:", userDao.selectById(1));

userDao.delete(2);
console.log("Despues de borrar id 2:", userDao.selectAll());
