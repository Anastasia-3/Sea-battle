// Сумма чисел от 1 до n с помощью цикла
// function sumTo(n){
//     let result=0;
//     for(let i=1; i<n; i++){
//         result += i;
//     }
//     return(result);
// }
// console.log(sumTo(100));
//
// Сумма чисел от 1 до n с помощью рекурсии
// function sumTo(n){
//     if (n==1){
//         return 1;
//     }
//     else{
//         return n + sumTo(n-1);
//     }
// }
// alert(sumTo(100));
//
//
// Сумма чисел от 1 до n с помощью формулы ар прог
// function sumTo(n){
//     return n*(n+1)/2;
// }
// alert(sumTo(99));


// Вычисление факториала
// function factorial(n) {
//     if (n==1){
//     return 1;
// }
//     else{
//         return n*factorial(n-1);
//
//     }
// }
// console.log(factorial(5));

// Числа Фибоначчи

// function showResult() {
//     console.log(fib(getItem()));
// }
//
// function fib(n) {
//     if (n === 1 || n === 2) {
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
// }
//
// function getItem() {
//     return document.getElementById('input1').value;
}
     // Робот и дверь

    //  function robot(x,y) {
    // if (x == 0 || y == 0) {
    //     return 0;
    // }
    //      if (x == 1 || y == 1) {
    //          return 1;
    //      }
    //      return robot(x - 1, y) + robot(x, y - 1);
    //  }
    //  console.log(robot(0, 7));

// alert( "\u{1F60D}" );

function ucFirst(str) {
    if (!str) {
        return str;
    }

    return(str[0].toUpperCase() + str.slice(1));
}
// alert(ucFirst('artem'));


function checkSpam(str){
    return(str.includes('viagra' || 'XXX'));
}
alert(checkSpam('Do you want a viagra?'));