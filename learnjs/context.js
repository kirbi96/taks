// Помогите пожалуйста решить задачу и объясните решение.
//     Требуется написать функцию - bindFunc:

// function bindFunc (func, param) {
//     return func.bind(null, param)
// }
//
// var add = function(a,b) { console.log( a+b);}
// var add2 = bindFunc(add, 2);
// add2(6)  // outputs 8
// add2(10) // outputs 12


// Что выведет функция?

// function f() {
//     console.log( this ); // window
// }
//
// let user = {
//     g: f.bind(null)
// };
//
// user.g();





// function f() {
//     alert(this.name);
// }
//
// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
//
// f();//вася




// Вызов askPassword() в приведённом ниже коде должен
// проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
//
//     Однако, его вызов приводит к ошибке. Почему?
//
//     Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

//
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "123") ok();
//     else fail();
// }
//
// let user = {
//     name: 'Вася',
//
//     loginOk() {
//         alert(`${this.name} logged in`);
//     },
//
//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },
//
// };
//
// // askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); // BIND
// // askPassword(() => user.loginOk(), () => user.loginFail()); // ARROW



// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "123") ok();
//     else fail();
// }
//
// let user = {
//     name: 'John',
//
//     login(result) {
//         alert( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
// };
//
// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // BIND



// function work(a, b) {
//     alert( a + b ); // произвольная функция или метод
// }
//
// work = spy(work);
//
// function spy (func){
//
// }
//
// work(1, 2); // 3
// work(4, 5); // 9
//
// for (let args of work.calls) {
//     alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }



// Что выводится в консоль? Что нужно изменить, чтобы вывелось 25?

// const a = 10;
//
// function func() {
//     const a = 15;
//
//     console.log(a); // 15
//     // console.log(this.a); // answer 25
// }
//
// func.bind({ a: 25 })();



// Что выводится в консоль?
//
//     function func() {
//         console.log(this.a); // 5
//     }
//
//     func.bind({ a: 5 }).bind({ a: 10 }).bind({ a: 15 })();



// Что выводится в консоль?


// из за строгово режима undefined без него трижды глобальный виндов

// "use strict"
// function foo1() {
//     console.log(this)
//     function foo2() {
//         console.log(this)
//         function foo3() {
//             console.log(this)
//         }
//         foo3()
//     }
//     foo2()
// }
// foo1()





// Исправить ошибку (вывод  “Привет AA”) и после
// исправления ошибки поменять контекст на объект women(вывод “Привет NN)”

// TASK
// const hello = () => {
//     console.log("Привет", this?.name)
// }
// const women = {
//     name: "Цунаде",
// }
// const obj = {
//     name: "Глеб",
//     sayHello: hello,
// }
//
// obj.sayHello()


// ANSWER
// const hello = function () {
//     console.log("Привет", this?.name)
// }
// const women = {
//     name: "NN",
// }
// const obj = {
//     name: "AA",
//     sayHello: hello,
// }
//
// const foo = obj.sayHello.bind(women)
// foo()



// //Что выводится в консоль?
//
// function Car() {
//     this.make = "Lamborghini"
//     return { make: "Maserati" }
// }
//
// const myCar = new Car()
// console.log(myCar.make)
//
// //MASERATI





// function test() {
//     console.log(this)
//     const fun = () => console.log(this);
//     fun();
// }
//
// test.call({ name: "Глеб" });
