// Задачи по JavaScript:
//     Напишите функцию,
//     которая будет проходить через массив целых чисел
// и выводить индекс каждого элемента с задержкой в 3 секунды.

// const arr = [11,12,33,44,55]
//
// arr.forEach((_,index) =>{
//     setTimeout(() => console.log(index), 3000 * index)
// })


//palindrome

// const isPalindrome = (str) =>{
//     return str.toLowerCase().split("").reverse().join("") === str.toLowerCase()
// }
//
// console.log(isPalindrome("anqwna"))



// FizzBuzz
// Одна из самых популярных на собеседованиях задач.
//     Постановка
// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
//     вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

// const fizzBuzz = (num) =>{
//     for(let i = 1; i <= num; i++){
//         if( i % 3 === 0 && i % 5 === 0){
//             console.log("fizzbuzz")
//         } else if(i % 3 === 0){
//             console.log("fizz")
//         } else if(i % 5 === 0){
//             console.log("buzz")
//         } else {
//             console.log(i)
//         }
//     }
// }
//
// fizzBuzz(16)


// Анаграмма
// Так называют слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.
//
// const isAnogramm = (str1, str2) =>{
//     const sortArr = (word) =>{
//         return word.toLowerCase().split("").sort((a,b) => a > b ? 1 : -1).join("")
//     }
//     return sortArr(str1) === sortArr(str2)
// }
//
// console.log(isAnogramm("finder", "Friend")) // true


// Поиск гласных
// Достаточно простая задача, которая часто попадается на собеседованиях.
//     Постановка
// Нужно написать функцию, принимающую строку в качестве аргумента и
// возвращающую количество гласных, которые содержатся в строке.
//     Гласными являются «a», «e», «i», «o», «u».

// const isVowel = (word) =>{
//     const vowelArr = ["a", "e", "i", "o", "u"]
//
//     return word.toLowerCase().split("").filter((letter) => vowelArr.find((arrI) => arrI === letter)).length
// }
//
// console.log(isVowel("AeRTsdfsdfsdfsee"))


// Фибоначчи
// Классическая задача, которую можно встретить на собеседованиях
// самого разного уровня. Стоит напомнить, что последовательность
// Фибоначчи — это ряд чисел, где каждое последующее является
// суммой двух предыдущих. Так, первые десять чисел
// выглядят следующим образом: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

// const fib = (n) =>{
//     return n >= 1 ? n : fib(n - 1) + fib(n - 2)
// }
//
// console.log(fib(3) )// 2



// Сумма двух чисел
// Напишите функцию, которая принимает два аргумента:
//     массив из уникальных целых чисел и сумму в виде целого числа.
//     Если сумма двух любых чисел массива из аргумента равна числу,
//     которое приходит вторым аргументом, функция должна вернуть
// новый массив из этих двух чисел в любом порядке. Если решения нет,
//     вернуть пустой массив. Текущее число само с собой складывать нельзя.
//
//     Пример входных данных:
//
// const array = [3, 5, -4, 8, 11, 1, -1, 6]
// const targetSum = 17
//
// const twoSum = (arr, target) =>{
//     let hash = {};
//
//     for(let i =0; i < arr.length; i++){
//         const n = arr[i]
//
//         if(hash[target - n] !== undefined){
//             return [hash[target - n], i]
//         }
//
//         hash[n] = i
//     }
//
//     return []
// }
//
// console.log(twoSum(array, targetSum))



// Преобразование массива в объект с группировкой и фильтрацией элементов
// Напишите функцию, которая на вход принимает массив из студентов,
//     где студент — это объект с полями «имя», «возраст» и «номер группы»
// {name: string, age: number, groupId: number}, а на выходе возвращает объект,
//     где ключ — это номер группы, а значение — массив из студентов старше 17 лет.

// const students = [
//     {name: "alex", age: 23, groupId: 1133},
//     {name: "alex1", age: 12, groupId: 1122},
//     {name: "alex2", age: 23, groupId: 1122},
//     {name: "alex3", age: 23, groupId: 1133},
// ]
//
// const updateData = (st) =>{
//     const obj = {}
//
//     st.forEach((i) => {
//         if(i.age > 18) {
//             obj[i.groupId] ? obj[i.groupId].push(i) : obj[i.groupId] = [i]
//         }
//     })
//
//     return obj
// }
//
//
// console.log(updateData(students))


