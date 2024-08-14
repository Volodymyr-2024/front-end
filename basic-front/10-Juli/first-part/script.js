let person = {
    name: "Alex",
    age: 30
};
console.log ("Name: ", person.name);
console.log ("age: ", person.age);

let book = {
    title: "OldName"
}
book.title = "NewName";
console.log("UpdatedTitle:", book.title);

let car = {
    brand: "VW",
    model: "Passat",
    year: 2022
}
console.log(`Год выпуска ${car.year} марки ${car.brand}, модель ${car.model}`);

let dog = {
    name: "Fred",
    age: 5
}
dog.breed = "Gray";
console.log(dog);

let computer = {
    processor: "AMD",
    type_ddr: "DDR5",
    year: 2023
}
delete computer.year;
console.log(computer);

let fruit = {
    name: "Apple",
    color: "Red",
    taste: "Sweet"
}
for(let prop in fruit) {
    console.log(`${prop}: ${fruit[prop]}`);;
}