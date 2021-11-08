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
