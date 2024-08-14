function checkEvenNumber(n) {
    return new Promise((resolve, reject) => {
        if (n % 2 === 0) {
            resolve('Число четное')
        } else {
            reject ('Ошибка, число нечетное')
        }
    })
}
checkEvenNumber(2)
.then((response) => {
    console.log(response)
})
.catch((reject) => {
    console.log (reject)
})