function getRandomNumber(){
    let randomNumber = Math.floor(Math.random()*100);
    return randomNumber;
}


let table = document.getElementById('table');
function tableFromArr() {
    let tableArr = [];
    for (let i = 0; i < 10; i++) {
        tableArr[i] = [];
        let tr = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            let td = document.createElement('td');
            td.innerHTML = getRandomNumber();
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
tableFromArr();


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


let seaBattle = document.getElementById('battle');
function sBattle() {
    let battle = [];
    for (let i = 0; i < 10; i++) {
        battle[i] = [];
        let tr = document.createElement('tr');
        for (let k = 0; k < 10; k++) {
            let td = document.createElement('td');
            td.innerHTML = ' ';
            tr.appendChild(td);
            if (k % i === 0) {
              td.innerHTML = 'X';
            }
        }
        seaBattle.appendChild(tr);
    }
}
sBattle();


