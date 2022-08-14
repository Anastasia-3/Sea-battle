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





