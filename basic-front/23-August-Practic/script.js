// Создайте базовый класс UserManager, который представляет собой коллекцию
// пользователей, хранящихся в виде массива объектов пользователей. Каждый
// объект пользователя должен иметь следующие свойства: id, name, email, и age.
// В классе UserManager реализуйте следующие методы:
// addUser(user): добавляет нового пользователя в коллекцию. Реализуйте этот
// метод так, чтобы он отправлял POST-запрос на сервер для добавления пользователя.
// removeUser(name): удаляет пользователя из коллекции по имени. Реализуйте
// этот метод так, чтобы он удалял пользователя с сервера по его имени.

// Создайте класс-наследник PremiumUserManager, который расширяет функциональность
// UserManager и добавляет методы для управления премиум-пользователями. В этом классе
// реализуйте следующие методы:
// upgradeToPremium(name): находит пользователя по имени и устанавливает для него статус
// премиум. Реализуйте этот метод так, чтобы он отправлял PATCH-запрос на сервер для
// обновления статуса пользователя.
// searchByEmail(email): ищет и возвращает пользователя по его email. Реализуйте этот
// метод так, чтобы он отправлял GET-запрос на сервер для поиска пользователя по email.
class UserManager {
  constructor() {
    this.ApiUrl = "https://jsonplaceholder.typicode.com/users";
  }
  async addUser(user) {
    try {
      const response = await fetch(this.ApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log("User added", data);
    } catch (error) {
      console.error(error);
    }
  }
  async removeUser(id) {
    try {
      const response = await fetch(`${this.ApiUrl}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error(`Ошибка удаления пользователя`);
      } else {
        console.log(`Пользователь ${id} удален успешно`);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

class PremiumUserManager extends UserManager {
  async upgradeToPremium(name) {
    try {
        const response = await fetch(`${this.ApiUrl}/?name=${name}`, {
           method: "PATCH",
           headers:  { "Content-Type": "application/json" },
           body: JSON.stringify({premium: true})
        }) 
        if (!response.ok) {
            throw new Error(`Ошибка присвоения премиум-статуса`);
          } else {
            console.log(`Пользователю ${name} успешно присвоен премиум-статус`);
          }
    } catch (error) {
      console.error(error);
    }
  }
  
  //не мой код
  async searchByEmail(email) {
    try {
      const userRes = await fetch(this.ApiUrl);
      if (!userRes.ok) {
        throw new Error();
      }
      const data = await userRes.json();
      const user = data.find((val) => val.email === email);
      console.log(user);
    } catch (e) {
      console.error(e);
    }
  }
}



const user1 = new PremiumUserManager()
user1.upgradeToPremium("Leanne Graham")