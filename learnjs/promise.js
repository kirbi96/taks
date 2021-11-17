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



// let a = Promise.resolve(100).then(x => x + 1).catch(x => x + 2).then(x => x + 3).then(x => x + 10)
//
// console.log(a)





// (function() {
//     console.log("1");
//
//     setTimeout(() => {
//         console.log("2");
//     }, 0);
//
//     console.log("3");
//
//     setTimeout(() => {
//         console.log("4");
//     }, 0);
//
//     console.log("5");
// })();
//
// // 1 3 5 2 4



// setTimeout(() => {
//     console.log("timeout1")
// })
// console.log("cons1")
// Promise.resolve("Promise1").then((res) => console.log(res))
// setTimeout(() => {
//     console.log("timeout2")
// })
// Promise.resolve("Promise2").then((res) => console.log(res))
// console.log("cons2")
//
//
// // cons 1 -> cons 2 -> p1 -> p2 -> t1 -> t2



//
// const bar = () => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//     }, 0);
//
//     Promise.resolve()
//         .then(() => {
//             console.log(3);
//         })
//         .then(() => {
//             console.log(4);
//         })
//         .then(() => {
//             setTimeout(() => {
//                 console.log(5);
//             }, 0);
//             setTimeout(() => {
//                 console.log(6);
//             }, 0);
//         })
//         .then(() => {
//             setTimeout(() => {
//                 console.log(7);
//             }, 0);
//             setTimeout(() => {
//                 console.log(8);
//             }, 0);
//         })
//         .then(() => {
//             throw '';
//         })
//         .catch(() => {
//             console.log(9);
//         })
//         .then(() => {
//             console.log(10);
//         })
//         .catch(() => {
//             console.log(11);
//         });
//
//     console.log(12);
// };
//
// bar();


// 1 12 3 4 9 10 2 5 6 7 8




// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 2000);
// console.log(3);
// const p1 = Promise.resolve(12).then((d) => {
//     console.log(d);
//     return d + 1;
// });
// console.log(8);
// setTimeout(() => {
//     const p2 = new Promise((rs) => {
//         rs(18);
//     });
//
//     p2.then((d) => console.log(d));
//     p1.then((d) => console.log(d));
//
//     for (let i = 14; i < 16; i++) {
//         console.log(i);
//     }
// }, 1000);
// console.log(10);
//
// // 1 3 8 10 12 14 15 18 13 2




// setTimeout(function timeout() {
//     console.log('Таймаут');
// }, 0);
//
// let p = new Promise(function(resolve, reject) {
//     console.log('Создание промиса');
//     resolve();
// });
//
// p.then(function(){
//     console.log('Обработка промиса');
// });
//
// console.log('Конец скрипта');


// создание промиса  конец  обработка промиса    таймаут



// const timeout = () => {
//     setTimeout(() => console.log(0), 100);
//     setTimeout(() => console.log(1), 0);
//
//     new Promise((resolve) => resolve()).then(() => console.log(2));
//
//     console.log(4);
//
//     for (let a = 0; a < 10000; a++) {}
//
//     setTimeout(() => console.log(3), 10);
// };
//
// timeout()
//
// // 4 2 1 3 0
