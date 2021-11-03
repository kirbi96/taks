// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
//     Функция delay(ms) должна возвращать промис,
//     который перейдёт в состояние «выполнен» через ms миллисекунд,
//     так чтобы мы могли добавить к нему .then:

// const delay = (ms) => {
//     const p = new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     })
//
//     return p;
// }
//
// delay(3000).then(() => alert('выполнилось через 3 секунды'));




// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         throw new Error("Whoops!");
//     }, 1000);
//
//     throw new Error("Whoops!"); // выполниться только без таймаута
// }).catch(alert);





// Сам вопрос, собственно, стандартный: что выведет код?
// var a = 5;
// setTimeout(function timeout() {
//     console.log(a);//3
//     a = 10;
// }, 0);
//
// var p = new Promise(function(resolve, reject) {
//     console.log(a);//1
//     a = 25;
//     resolve();
// });
//
// p.then(function(){
//     // some code
// });
//
// console.log(a);//2

// решение сперва сработает промис 5, затем лог 25 и вызовется таймаут с 25
// ответ 5 25 25





// Promise
//     .resolve('a')
//     .then((x) => {console.log(x); return 'b'})
//     .then((x) => {console.log(x); return 'c'})
//     .then((x) => console.log(x));
// ответ a,b,c



// Promise
//     .resolve()
//     .then(() => console.log(1))
//     .then(() => console.log(2))
//     .then(() => console.log(3));
//
// Promise
//     .resolve()
//     .then(() => console.log(4))
//     .then(() => console.log(5))
//     .then(() => console.log(6));

// ответ 123456




// Promise
//     .resolve()
//     .then(() => console.log(1))
//     .then(() => {
//         setTimeout(() => {
//             console.log(2)
//         }, 0)
//     })
//     .then(() => console.log(3));
//
// setTimeout(() => console.log(4),0)

// ответ 1342



// console.log(1);
//
// setTimeout(() => {
//     console.log(2);
// }, 0);
//
// console.log(3);
//
// Promise.resolve().then(() => {
//     console.log(4);
// })
//
// console.log(5);
//
// while('') {
//     console.log(6);
// }
//
// console.log(7);

// answer 1 3 5 7 4 2




// console.log(1) // стек
//
// Promise.resolve().then(() => {
//     console.log(2) // микро
// })
//
// setTimeout(() => console.log(3), 0) // макрозадачи


// сперва стек затем микро затем макро
// 1 2 3




// console.log('1');
//
// setTimeout(function() {
//     console.log('2')
// }, 0);
//
// Promise.resolve().then( () => console.log('3') );
//
// console.log('4');


// 1 4 3 2




