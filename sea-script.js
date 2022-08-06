'use strict';
// let a = prompt("Первое число?", );
// let b = prompt("Второе число?", );
//
// alert(+a + +b);

// let name = prompt('Какое официальное название JS?','' )
// if (name === 'ECMAScript'){
//     alert('Верно!');
// }
// else{
//     alert('Не знаете? ECMAScript!');
// }

// let number = prompt('Введите число:', '')
// if (number > 0) {
//     alert(1);
// }
// else if (number < 0) {
//     alert(-1);
// }
// else{
//     alert(0);
// }


// let login = prompt('Ваш логин:', '');
// let message = (login == 'Сотрудник')? 'Привет!':
//         (login == 'Директор')? 'Здравствуйте!':
//             (login == '')? 'Нет логина': 'Укажите свой логин еще раз';
// alert(message);

// function yourAge(age) {
//     if (age > 13 && age < 91) {
//         alert('Your age is right');
//     }
// }
// function getItem() {
//     return document.getElementById('input1').value;
// }
// function signIn(){
//     if (input1>13 && input1<91) {
//         alert('Your age is right');
// }
//     function signIn() {
//         console.log(yourAge(getItem()));}


// let age = 13;
// if (!(age >= 14 && age <= 90 )) {
//     alert('Your age is correct');
// }
// let age = 13;
// if(age <=14 || age>=90) {
//     alert('Super!')
// }

// Checking of login
// let guest = prompt('Who is there?', );
// if (guest === "I'm a boss") {
//     let password = prompt('Write the your password!', );
//     if (password === "I'm a manager") {
//         alert('Hello!');
//     }
//     else{
//         alert("Password isn't correct");
//     }
// }
// if (guest !== "I'm a boss"){
//     alert("I don't know you");
// }

// let height = null;
// let width = 100;
// let res = height ?? width;
// console.log(res);
//
// let ag = null;
// let weight = undefined;
// let result = (200 && 100) ?? (null || 20);
// console.log(result);
//
// let name = null;
// let surname = undefined;
// let age = 19;
// console.log(name ?? surname ?? age );

// let login = prompt('Type your login', '');
// let message = (login == 'Сотрудник')? "Привет":
//     (login == 'Директор')? "Здравствуйте":
//         (login = ' ')? "Нет логина": " ";
//
// alert(message);


// let number;
// do {
//      number = prompt("Введите число,которое больше 100", '101');
// }
// while (number > 100);

// function sum(a, b){
//      return a+b;
// }
// let result = sum(2, 3);
// alert(result);
//
// function checkAge(age) {
//      return (age > 18)? true: confirm('Родители разрешили?');
// }

//
// function min(c, d) {
//      return (c<d)? c: d;
// }
// alert(min(2, 3));
//
// function pow(a, b) {
//      if (a >= 1 || b >= 1) {
//           return a**b;
//      }
//      else {
//           return 'Try again, please'
//      }
// }
// alert(pow(2, 3));

let arr = document.getElementById('table');

let array = [];
// array = '<table>';
for (let i = 0; i < 10; i++) {
    // array += '<tr>';
    array[i] = [];
    for (let y = 0; y < 10; y++) {
        // array += '<td>';
        let randomNumber = Math.floor(Math.random() * 100);
        array[i].push(randomNumber);
        // array += '</td>'
    }
// array += '</tr>';
}
arr.innerHTML = array;
  // array = [
  //       [j, j, j, j, j, j, j, j, j, j],
  //       [j, j, j, j, j, j, j, j, j, j],
  //       [j, j, j, j, j, j, j, j, j, j],
  //       [j, j, j, j, j, j, j, j, j, j],
  //       [j, j, j, j, j, j, j, j, j, j],
  //       [j, j, j, j, j, j, j, j, j, j],
  //       [j, j, j, j, j, j, j, j, j, j],
  //       [j, j, j, j, j, j, j, j, j, j],
  //       [j, j, j, j, j, j, j, j, j, j],
  //       [j, j, j, j, j, j, j, j, j, j],
  //   ];


    console.log(array);

