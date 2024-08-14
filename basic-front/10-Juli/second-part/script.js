// Создайте объект student с основными свойствами, такими 
// как name и age, а также вложенным объектом grades, представляющим
// оценки по предметам. Присвойте значения оценкам и выведите всю информацию в консоль.

let student = {
    name: "Innokentiy",
    age: 28,
    grades: {
        math: 5,
        literature: 3,
        science: 4,
        history: 4
    },
}
console.log(student);

// У вас есть объект car с вложенным объектом engine, 
// содержащим свойства horsepower и fuelType. Измените значение horsepower и выведите обновленную информацию в консоль.

const car = {
    model: 'BMW',
    year: 2023,
    engine: {
        horsepower: '128 kWt',
        fuelType: 'Benzin'
    }
}
car.engine.horsepower = '250 kWt';
console.log(car);

// Создайте объект playlist с вложенным объектом songs, представляющим список песен. 
// Используйте цикл for...in, чтобы вывести названия всех песен и их продолжительность в консоль.

let playlist = {
    solist: 'Beatles',
    name: 'Come together',
    songs: {
        "Song 1": "3:45",
        "Song 2": "4:20",
        "Song 3": "5:10",
        "Song 4": "2:50"
    }
}
for (let i in playlist.songs) {
    console.log(`${i}: ${playlist.songs[i]}`)
}

// У вас есть объект book с основными свойствами, 
// такими как title и author. Добавьте вложенный объект details,
//  содержащий свойства pages и publicationYear. Выведите обновленную информацию в консоль.

const book = {
    title: 'Hobbit',
    author: 'Jon Ronald'
};
book.details = {
    pages: 278,
    publicationYear: 2014
};
console.log(book);

console.log('************************************')

const infoAboutMe = {
    firstName: "Yury",
    lastName: "Arakelove",
    age: 26,
    occupation: "Full - stack developer",
    isFront: true,
    isBack: true,
    address: {
      country: "Brazil",
      city: "Sao-Paulo",
      street: "Avenida Portugal 1278",
      complemento: 1342,
    },
    car: {
      brand: "Toyota",
      model: "Camry",
      passport: {
        a: "ascs1",
        b: "2asx",
        e: "3dcvdsv",
        c: [
          "data1",
          "data2",
          "data3",
          71248324,
          {
            id: 1,
            cPassportTitle: "this is title of c",
            cPassportDescription: "this is description of c",
            finalDescription: [1, 2, 3, 4, 6, 7, 9, 4, 22, 44, 33, 21, 45]
          },
        ],
      },
      year: 2021,
    },
    cat: {
      petName: "Stepan",
      age: 6,
      color: "orange",
      isActive: false,
      isFat: true,
      otherCats: {
        myNeighboursCat: "vanya",
      },
    },
  };
  
//   Найти сумму всех элементов массива finalDescription

let mas = infoAboutMe.car.passport.c[4].finalDescription;
let sum = 0;
for (let i = 0; i < mas.length; i++) {
    sum = sum + mas[i];
}
console.log(sum);
