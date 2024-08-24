// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHello() {
//     console.log(`Hello, mu name is ${this.name}`);
//   }
// }
// const person1 = new Person("Nick");
// person1.sayHello();

// Создайте свой первый класс Кошка, определите через конструктор ее имя и создайте метод мяу, который будет передавать имя кошки и сообщение о том ,что она мяукнула
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   sayMyau() {
//     console.log(`${this.name}  мяукает`);
//   }
// }
// const cat1 = new Cat("Лиза");
// cat1.sayMyau();

// Создать класс, в котором определяется собака, а так же метод, который определяет что она лает и следующий класс который
//  наследует имя данной собаки и принимает метод run, где выводится сообщение, что собака бежит
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
//   gav() {
//     console.log(`${this.name} say gav`);
//   }
// }
// const Dog1 = new Dog("Dick");
// Dog1.gav();
// class Run extends Dog {
//   run() {
//     console.log(`The dog ${this.name} is run`);
//   }
// }
// const runningDog = new Run("Dick");
// runningDog.run();

// Создайте класс Circle, который принимает радиус при создании.
// У класса должен быть метод getArea(), который возвращает площадь круга.
// class Circle {
//   constructor(rad) {
//     this.rad = rad;
//   }
//   getArea() {
//     return  Math.PI * this.rad * this.rad;
//   }
// }
// const Circle1 = new Circle(2);
// Circle1.getArea();

//Инкапсуляция данных внутри объекта (запирание данных #age)
// class Person {
//     #age = 39
//     constructor(name) {
//         this.name = name
//     }
//     get getName() {
//         return this.name
//     }
//     set newName(newName) {
//         if(newName) {
//             this.name = newName
//         } else {
//             console.log('fill the line')
//         }
//     }
//     sayHi() {
//         console.log(`Person ${this.name} has age ${this.#age}`)
//     }
// }
// const tommy = new Person('Tommy')
// console.log(tommy.getName)
// tommy.newName = 'Garry The Axe'
// console.log(tommy.getName)
// console.log(tommy.age); //undefined
// tommy.sayHi()

// Создайте класс Transport, у которого есть метод move().
// Создайте два наследника класса Transport: Car и Bicycle.
// У каждого наследника должен быть свой метод move(), который переопределяет метод родительского класса.
// Создайте экземпляры классов Car и Bicycle и вызовите их методы move().
// class Transport {
//   move() {
//     console.log("Транспорт движется");
//   }
// }
// class Car extends Transport {
//   move() {
//     console.log("Машина движется");
//   }
// }
// class Bicycle extends Transport {
//   move() {
//     console.log("Велосипед движется");
//   }
// }
// const Car1 = new Car();
// const Bicycle1 = new Bicycle();
// Car1.move();
// Bicycle1.move();

// Создайте класс Person, который имеет свойство name.
// Используйте геттер и сеттер для доступа к свойству name.
// При попытке установить пустое имя сеттер должен вывести сообщение об ошибке.
// Создайте экземпляр класса, установите имя и выведите имя с помощью геттера.
// class Person {
//   constructor(name) {
//     this.name1 = name;
//   }
//   get name() {
//     return this.name1;
//   }
//   set name(value) {
//     if (value) {
//       this.name1 = value;
//     } else {
//       console.log("Ошибка, имя не должно быть пустым");
//     }
//   }
// }
// const person1 = new Person("Nikolay");
// person1.name = "Elena";
// console.log(person1.name);

// Создайте базовый класс Animal, который имеет два свойства: name (имя животного) и type (тип животного).
// Затем создайте класс Dog, который наследуется от класса Animal. Класс Dog должен иметь дополнительное
// свойство breed (порода собаки). При создании экземпляра класса Dog, вызовите конструктор родительского
// класса Animal, передав в него имя и тип собаки. Используйте ключевое слово super для доступа к методам и свойствам родительского класса.

// class Animal {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
// }
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name, "dog");
//     this.breed = breed;
//   }
//   getBreed() {
//     console.log(`Порода собаки ${this.breed}`);
//   }
// }
// const myDog = new Dog("Jessi", "deutsch dog");
// myDog.getBreed();

// Создайте базовый класс User, у которого есть свойства name и age. Добавьте метод displayInfo(), который выводит в консоль информацию
// о пользователе. Создайте наследника класса User под названием Admin, который будет представлять пользователя с административными правами.
// Добавьте в класс Admin дополнительное свойство role и метод displayRole(), который выводит в консоль роль администратора.
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   displayInfo() {
//     console.log(`My name is ${this.name} and age is ${this.age}`);
//   }
// }
// class Admin extends User {
//   constructor(name, age, role) {
//     super(name, age);
//     this.role = role;
//   }
//   displayRole() {
//     console.log(`Мои права ${this.role}`);
//   }
// }
// const newUser = new Admin("Victor", 28, "Admin");
// newUser.displayInfo();
// newUser.displayRole();

// Создайте базовый класс Account, представляющий банковский счет, у которого есть свойства id, balance и методы deposit() и withdraw(),
// для пополнения и снятия средств со счета соответственно. Создайте наследника класса Account под названием SavingsAccount, который
//  представляет собой сберегательный счет. Добавьте в класс SavingsAccount дополнительное свойство interestRate, представляющее годовую
//  процентную ставку, а также метод addInterest(), который добавляет на счет проценты по прошествии определенного времени.
class Account {
  constructor(id, balance = 0) {
    this.id = id;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(
        `У вас было на счету ${
          this.balance - amount
        }$. Вы внесли на счет ${amount}$. Новый баланс вашего счета составляет ${
          this.balance
        }$`
      );
    } else {
      console.log(`Депозит должен быть позитивным`);
    }
  }
  withdraw(amount) {
    if (amount >= 0 && amount < this.balance) {
      this.balance -= amount;
      console.log(
        `У Вас было ${
          this.balance + amount
        }$ Вы сняли ${amount}$. Новый баланс ${this.balance}$`
      );
    } else {
      console.log("Недостаточно средств");
    }
  }
}
class SavingsAccount extends Account {
  constructor(id, balance, interestRate) {
    super(id, balance);
    this.interestRate = interestRate;
  }
  addInterest() {
    const interest = this.balance * (this.interestRate / 100);
    this.balance += interest;
    console.log(
      `У Вас было на счету ${
        this.balance - interest
      }$. Ваши сбережения увеличились на ${interest}$. Новый баланс составляет ${
        this.balance
      }$`
    );
  }
}
const account = new Account(1, 1500);
account.deposit(200);
account.withdraw(400);

const savingAccount = new SavingsAccount(2, 2500, 5);
savingAccount.deposit(500);
savingAccount.addInterest();
savingAccount.withdraw(1000);

// Создайте базовый класс Library, у которого есть свойство books, представляющее массив объектов книг. Добавьте методы addBook()
// для добавления книги в библиотеку и removeBook() для удаления книги по названию. Создайте наследника класса Library под названием
// DigitalLibrary, который представляет собой цифровую библиотеку с дополнительными методами searchByAuthor() и searchByTitle() для поиска книг по автору и названию соответственно.
class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
    console.log(`Книга добавлена: ${book.title} от автора: ${book.author}`);
  }
  removeBook(title) {
    const index = this.books.findIndex((item) => item.title === title);
    this.books.splice(index, 1);
    console.log(`Книга с названием ${title} была удалена`);
  }
}
class DigitalLibrary extends Library {
  searchByAuthor(author) {
    const filterResult = this.books.filter((book) => book.author === author);
    console.log(`Книга от автора ${author}: ${JSON.stringify(filterResult)}`);
  }
  searchByTitle(title) {
    const filteredResult = this.books.filter((book) => book.title === title);
    console.log(
      `Книга по названию ${title}: ${JSON.stringify(filteredResult)}`
    );
  }
}
const object = new DigitalLibrary();
console.log(object);
object.addBook({
  title: "Шерлок Холмс и доктор Ватсон",
  author: "Артур Конан Дойль",
});
object.addBook({
  title: "Преступление и наказание",
  author: "Федор Достоевский",
});
object.addBook({ title: "Властелин колец", author: "Джон Роналд Руэл Толкин" });
object.searchByAuthor("Федор Достоевский");
