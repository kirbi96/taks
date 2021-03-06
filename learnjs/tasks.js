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







// Promise.resolve(10)
//
//     .then(e => console.log(e)) // ?? 10
//
//     .then(e => Promise.resolve(e))
//
//     .then(console.log) // ?? undefined
//
//     .then(e => {
//
//         if (!e) {
//
//             throw 'Error caught';
//
//         }
//
//     })
//
//     .catch(e => {
//
//         console.log(e); // ?? "Error caught"
//
//         return new Error('New error');
//
//     })
//
//     .then(e => {
//
//         console.log(e.message); // ??
//
//     })
//
//     .catch(e => {
//
//         console.log(e.message); // ?? "New error"
//
//     });



// Реализуйте функцию нахождения пересечения двух массивов.

// const first = [1, 2, 3, 4];
//
// const second = [3, 4, 5, 6];
//
// function intersection (a, b) {
//     return a.filter((item) => b.find((sItem) => item === sItem))
// }
//
// console.log(intersection(first, second))



// Необходимо написать функцию, принимающую в аргументах массив целых
// чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.
//
//     Например:
//
// unique([1, 1, 2, 2, 4, 2, 3, 7, 3]); // => [1, 2, 4, 3, 7]

// const un = (arr) => [...new Set(arr)]
//
//
// console.log(un([1,1,1,2,2,2,3,3,3,4]))



// Задача: «Расплющивание» массива.
//
//     Необходимо написать функцию, принимающую в
// аргументах многомерный массив неограниченной вложенности
// и возвращающую новый одномерный массив, состоящий из элементов со всех уровней вложенности исходного массива.
//
//     Например:
//
// flat([1, [2, [3, [4,5]]]]); // => [1, 2, 3, 4, 5]


// const flatArr = (arr) => arr.flat(arr.length)
//
// console.log(flatArr([1,[2],[[3],[4]]]))


// // Что выводится в консоль?
// var v = 1;
// var f1 = function () {
//     console.log(v);
// }
// var f2 = function() {
//     var v = 2;
//     f1(); // Will this print 1 or 2?   ANSWER 1
// };
// f2();


// Написать функцию add
// function add(a) {
//     let currentSum = a;
//
//     function f(b) {
//         currentSum += b;
//         return f;
//     }
//
//     f.toString = function() {
//         return currentSum;
//     };
//
//     return f;
// }
// alert(add(1)(2)(3)) // 6
// alert(add(1)(2)(3)(4)) // 10




// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//     setTimeout(() => {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//     }, 1000 * i);
// }




// (function immediateA(a) {
//     return (function immediateB(b) {
//         console.log(a); // What is logged?    ANSWER 0
//     })(1);
// })(0);




// let count = 0;
// (function immediate() {
//     if (count === 0) {
//         let count = 1;
//         console.log(count); // What is logged? 1
//     }
//     console.log(count); // What is logged?  0
// })();




// const obj = {
//     title: 'asdw'
// }
//
// function test(obj) {
//     obj.title = 'sss'
// }
//
// test() // тут надо еще передать обьект
//
// console.log(obj)   // title = sss

// __________________

// const obj = {
//     title: 'asdw'
// }
//
// function test1(obj) {
//     obj = 2
// }
//
// console.log('outer', obj)   // title = asdw



// Promise.reject('a')
//     .catch(e => e + 'b')  //ab
//     .catch(e => e + 'c')
//     .then(p => p + 'b')  //abb
//     .then(p => p + 'c')  //abbc
//     .finally(p => console.log(11111, p))//abbc
//     .then(p => console.log(22222,p)) //undefined??
// оказалось наоборот


// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 500, "one")
// })
//
// const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, "two")
// })
//
// Promise.race([firstPromise, secondPromise]).then(res => console.log(res))


// // two




// Какие числа выводятся в консоль?
//
//     let number = 0
// console.log(number++) // 0
// console.log(++number) // 2
// console.log(number) // 2



// Найти минимальное число в массиве:
// const arr = [1, 34, -234, 2, 35435, 43536, , -3, 1, 43535, null, undefined, "XXX", Boolean(true)]
// const nArr = arr.filter((i) => typeof i === 'number')
// console.log(Math.min(...nArr))


//Длина последнего слова.
// const lengthOfLastWord = (str) => console.log(str.trim().split(" ").pop().length)
//
// lengthOfLastWord(''); // 0
// lengthOfLastWord('man in BlacK'); // 5
// lengthOfLastWord('hello, world!  '); // 6
