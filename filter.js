const users = [
    {name: 'Max', age: 13, status: false},
    {name: 'Karina', age: 16, status: true},
    {name: 'Max', age: 13, status: true},
    {house: 87},
    {name: 'Karina', house: 87},
]

const filter = (arr, query) => {

    const res = [...arr];

    for (let key in query) {
        const filter = res.filter(item => item[key] !== query[key])

        for (let filterElement of filter) {

            const index = res.indexOf(filterElement)
            if (index !== -1) {
                res.splice(index, 1)
            }
        }
    }
    return res
}

console.log(filter(users, {status: true}))
console.log(filter(users, {name: 'Max'}))
console.log(filter(users, {name: 'Max', status: true}))
console.log(filter(users, {house: 87}))
console.log(filter(users, {house: 87, name: 'Karina'}))