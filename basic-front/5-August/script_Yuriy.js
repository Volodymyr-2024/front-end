//Повторение синтаксиса
const newPromise = new Promise((res, rej) => {
    if(5 == '5') {
        res('hello')
    } else {
        rej('error')
    }

})

newPromise
.then((res) => {
    console.log(res)
})
.catch((error) => {
    console.log(error);
})
console.log(newPromise);

setTimeout(() => {
    const resPromise = Promise.resolve('Resolved :)')
    resPromise.then((data) => {
        console.log(data);
    })
}, 2000)
const rejPromise = Promise.reject('Error error error!!!')


rejPromise.catch((error) => {
    console.error(error)
})


const promiseItem = new Promise((res, rej) => {
    setTimeout(() => {
        res('Yury')
    }, 500)
})

// Promise.resolve() Promise.reject()
const promiseitem2 = 'Illia'
const promiseItem3 = Promise.resolve(3)
const promiseItem4 = new Promise((res, rej)=> {
    if(5 == '5') {
        res('value is true')
    } else {
        rej('value is not true')
    }
})

//Если хотя бы один из промиссов возвращет нам ошибку, то вместо массива с ответами промисса мы получаем сообщение об ошибке из промисса со статусов rejected
Promise.all([promiseItem, promiseitem2, promiseItem3, promiseItem4])
.then((data) => {
    console.log(data)
})
.catch(error => console.error(error))

//Возвращет ответ запроса в объекте со статусом и значением. Отправялет запросы по порядку.
Promise.allSettled([promiseItem, promiseitem2, promiseItem3, promiseItem4])
.then((data) => {
    console.log(data)
})
.catch(error => console.error(error))

//Promise.any() тоже самое что и Promise.all() но наоборот. Возврает первый успешно выполненный промисс.
Promise.any([promiseItem, promiseitem2, promiseItem3, promiseItem4])
.then((data) => {
    console.log(data)
})
.catch(error => console.error(error))

const fetchData1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Data was uploaded from hhhh server')
        }, 2000)
    })
    // setTimeout(() => {
    //     return new Promise.resolve('Data was uploaded')
    // }, 2000)
}


const fetchData2 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Data was uploaded from kkkk server')
        }, 1500)
    })
}

const fetchData3 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Data was uploaded from wwww server')
        }, 1000)
    })
}

Promise.all([fetchData1(), fetchData2(), fetchData3()])
.then((data) => {
    console.log(data)
    data.forEach((item) => {
        const newEl = document.createElement('p')
        newEl.innerText = item
        document.body.append(newEl)
    })
})

