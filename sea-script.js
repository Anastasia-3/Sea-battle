function getRandomString(){
    let string = 'AB';
    let randomStr = Math.floor(Math.random()* string.length);
    let randomLetter = string[randomStr];
    return randomLetter;
}
function showTable() {
    let tableLetter = document.getElementById('tableLetter');
    let letterArr = [];
    for (let i = 0; i < 10; i++) {
        letterArr[i] = [];
        let tr = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            let td = document.createElement('td');
            td.innerHTML = getRandomString();
            tr.appendChild(td);
        }
        tableLetter.appendChild(tr);
    }
}
showTable();

function change(array) {
    array[0] = 5;
}

function changeFull(array){
    array = [9, 8, 7];
}
 let numbers = [1, 2, 3];

change(numbers);
console.log(numbers);
changeFull(numbers);
console.log(numbers);



 function createUser(name, age){
     return{
         name: name,
         age: age,
     }
 }


 function getUserInfo() {
     let userName = document.getElementById('name').value;
     let userAge = document.getElementById('age').value;
     let user = createUser(userName, userAge);
     alert(`user name is ${user.name} and user age is ${user.age}`);
 }


