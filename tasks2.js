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

// const strToNums = (str) => {
//
//     return str.split(' ').reduce((acc, w) => {
//         const num = w.split('').filter(l => !isNaN(+l)).join('')
//         if (num.length){
//             acc.push(num)
//         }
//         return acc
//     }, []).join()
//
// }
//
// console.log(strToNums('as 23 fdfdg544'))


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
