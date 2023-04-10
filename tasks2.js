// 1)написати прогу яка вибирає зі введеної строки цифри і виводить їх через кому,
//     наприклад:
// st = 'as 23 fdfdg544' введена строка
// 2,3,5,4,4        #вивело в консолі.

// const findNums =(str) => {
//     return str.split('').reduce((acc, el) => {
//         if (!isNaN(+el) && +el){
//             acc.push(el)
//         }
//         return acc
//     }, []).join()
// }
//
// console.log(findNums('as 23 fdfdg544'))


/*=====================================================================================*/

// 2)написати прогу яка вибирає зі введеної строки числа і виводить їх
// так як вони написані
// наприклад:
//     st = 'as 23 fdfdg544 34' #введена строка
// 23, 544, 34              #вивело в консолі
//
// const strToNums = (str) => {
//
//     return str.split('').map(el => isNaN(+el) ? ' ' : el).join('').split(' ').filter(el => el).join(', ')
// }
//
// console.log(strToNums('7as 23 fdf77dg544 88'))


// 1)Дан list:
const list = [22, 3, 5, 2, 8, 2, -23, 8, 23, 5]

/*=====================================================================================*/

//         - знайти мін число

// const findMin = (arr) => {
//     return arr.reduce((acc, el) => {
//         if (el < acc){
//             acc = el
//         }
//         return acc
//     }, arr[0])
// }
//
// console.log(findMin(list))

/*=====================================================================================*/

// - видалити усі дублікати

// const returnUniques = (arr) => {
//     return [...new Set(arr)]
// }
//
// console.log(returnUniques(list));

/*=====================================================================================*/

// - замінити кожне 4-те значення на 'X'

// const every4ToX = (arr) => {
//     for (let i =3; i < arr.length; i+=4){
//         arr[i] = 'X'
//     }
//     return arr
// }
//
// console.log(every4ToX(list));

/*=====================================================================================*/

// 2) вивести на екран пустий квадрат з "*" сторона якого вказана як агрумент функції

// const square = (n) => {
//     const outerRow = '*'.repeat(n)
//     console.log(outerRow)
//     for(let i=0; i < (n-2); i++ ){
//         console.log('*'+ ' '.repeat(n-2) + '*')
//     }
//     console.log(outerRow)
//
// }
//
// square(10)


/*=====================================================================================*/

// 3) вывести табличку множення за допомогою цикла while

// const table = () => {
//     let i = 1
//
//     while (i <= 10) {
//         const arr = []
//         let n = 1
//
//         while (n <=10){
//             const number = (i*n).toString()
//             arr.push(number + ' '.repeat(4 - number.length))
//             n++
//         }
//         console.log(arr.join(' '))
//         i++
//     }
// }
// table()

// const users = [
//     {name: 'Max', age: 13, status: false},
//     {name: 'Karina', age: 16, status: true},
//     {name: 'Max', age: 13, status: true},
//     {house: 87},
//     {name: 'Karina', house: 87},
// ]
//
// const filter = (arr, query) => {
//
//     const res = [...arr];
//
//     for (let key in query) {
//         const filter = res.filter(item => item[key] !== query[key])
//
//         for (let filterElement of filter) {
//
//             const index = res.indexOf(filterElement)
//             if (index !== -1) {
//                 res.splice(index, 1)
//             }
//         }
//     }
//     return res
// }
//
// console.log(filter(users, {status: true}))
// console.log(filter(users, {name: 'Max'}))
// console.log(filter(users, {name: 'Max', status: true}))
// console.log(filter(users, {house: 87}))
// console.log(filter(users, {house: 87, name: 'Karina'}))
//
// const sortNums = (num) => {
//     return parseInt(num.toString().split('').sort((a, b) => b -a).join(''))
// }
//
// console.log(sortNums(42145))


// const taskService = {
//     include: (arr, condition) => {
//
//         for (let c of condition) {
//             for (let key in c) {
//                 arr = arr.filter(item => item[key] === c[key])
//             }
//         }
//         return arr
//     },
//     sort_by: (arr, condition) => {
//         for (let key of condition) {
//             arr = arr.sort((a, b) => {
//                 if (a[key] < b[key]) {
//                     return -1
//                 } else if (a[key] > b[key]) {
//                     return 1
//                 } else {
//                     return 0
//                 }
//             })
//         }
//         return arr
//     }
// }
//
// const data = JSON.stringify(
//     {
//         data: [
//             {user: "mike@mail.com", rating: 20, disabled: false},
//             {user: "greg@mail.com", rating: 14, disabled: false},
//             {user: "john@mail.com", rating: 25, disabled: true},
//             {user: "admin@mail.com", rating: 0, disabled: true},
//             {user: "artur@mail.com", rating: 20, disabled: false},
//             {user: "oleh@mail.com", rating: 45, disabled: true},
//             {user: "vika@mail.com", rating: -4, disabled: false},
//         ],
//         condition: {include: [{disabled: false}], sort_by: ["rating", "user"]}
//     }
// )
//
// const sortBy = (arr, condition) => {
//
//
//     return arr.sort((a, b) => {
//         return String(a[condition[0]]).localeCompare(b[condition[0]] ||
//             String(a[condition[1]]).localeCompare(b[condition[1]]))
//     })
//
//
// }
//
// const filter = (info) => {
//     let {data, condition} = JSON.parse(info)
//
//     for (let key in condition) {
//         data = taskService[key](data, condition[key])
//     }
//     console.log(sortBy(data, condition.sort_by))
//     return data
// }
//
// console.log(filter(data))



