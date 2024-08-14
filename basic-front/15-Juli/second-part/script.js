// // У вас есть массив студентов с их оценками в виде объектов. Напишите программу, которая проходит 
// по каждому студенту, вычисляет среднюю оценку и создает новый объект, содержащий имена студентов 
// и их средние оценки.
// // // Исходный массив студентов с оценками
// // const students = [
// //   { name: 'Анна', grades: [85, 90, 92] },
// //   { name: 'Иван', grades: [88, 75, 96] },
// //   { name: 'Мария', grades: [78, 82, 94] },
// // ];

// const students = [
//     { name: 'Анна', grades: [85, 90, 92] },
//     { name: 'Иван', grades: [88, 75, 96] },
//     { name: 'Мария', grades: [78, 82, 94] },
//     ];
//     function countEverage (arr) {
//         let everage = 0;
//         for (let i = 0; i < arr.lenght; i++) {
//            everage += arr [i];         
//         }
//         return everage / arr.lenght;
//     }
//     function newObj (student) {
//         return {
//             name: student.name,
//             everageGrade: countEverage(student.grades)
//         }
//     }
//     const studentsGrates = [];
//     for (let i = 0; i < students.length; i++) {
//         const studentsAverageGrade = newObj(students[i]);
//         studentsGrates.push(studentsAverageGrade);
//     }
//     console.log(studentsGrates)

    // Напишите стрелочную функцию, которая принимает массив чисел и возвращает их сумму.

    // const sumArray = (numbers) => {
    //     let sum = 0;
    //     for (let i = 0; i < numbers.length; i++) {
    //       sum += numbers[i];
    //     }
    //     return sum;
    //   };
    // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // console.log(array(numbers))

    // Напишите функцию, которая находит максимальный элемент в массиве чисел.

    // function maxArray(arr) {
    //     max = arr[0];
    //     for (let i = 0; i < arr.length; i++) {
    //         if (max < arr[i]) {
    //             max = arr[i]
    //         }
    //     }
    //     return max;
    // }
    // const arr2 = [1, 2, 5, 25, -10, 3]
    // console.log(maxArray(arr2));

    // Напишите функцию, которая удваивает каждый элемент в массиве чисел

    // const arr1 = [1, 2, 5, 25, -10, 3]
    // function newArray(arr) {
    //     for (let i = 0; i < arr.length; i++) {
    //         console.log(arr[i] *= 2) 
    //     }
    // }
    // newArray(arr1);

    // Напишите функцию, которая проверяет, есть ли определенный элемент в массиве.
    const arr1 = [1, 2, 5, 25, -10, 3] 
    el1 = 8
    function findElement(array, element) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                return(`Элемент ${element} есть в массиве`);
            }
        }
        return(`Элемента ${element} нет в массиве`)
     }
     console.log(findElement(arr1, el1))

    //  Создайте функцию, которая принимает два массива - один с ключами, другой с значениями - и возвращает объект.

    //  Напишите функцию, которая вычисляет среднее значение чисел в массиве.

    //  Напишите функцию, которая сортирует массив чисел по возрастанию.

    //  Напишите функцию, которая создает новый объект, включая только указанные свойства.
