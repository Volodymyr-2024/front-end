const container = document.querySelector('.container')
const info = [
    {
        id: 1,
        country: 'Germany',
        capital: 'Oslo',
        currency: 'EUR',
        food: 'Sausage'
    },
    {
        id: 2,
        country: 'Norway',
        capital: 'Oslo',
        currency: 'Kron',
        food: 'Fish'
    },
    {
        id: 3,
        country: 'Spain',
        capital: 'Barcelona',
        currency: 'EUR',
        food: 'Paelha'
    }
]
for(let i = 0; i < info.length; i++) {
    const newList = document.createElement('ul')
    for(let key in info[i]) {
        const emptyContainer = document.createElement('li')
        console.log(emptyContainer)
        createItem(emptyContainer, info[i][key])
        newList.append(emptyContainer)
    }
    container.append(newList)
}
function createItem(item ,str) {
    return item.textContent = str
}