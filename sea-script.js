let table = document.getElementById('table');
let tableArr = [];
for (let i = 0; i < 10; i++) {
    tableArr[i] = [];
    let tr = document.createElement('tr');
    for (let j = 0; j < 10; j++){
        let td = document.createElement('td');
        let randomNumber = Math.floor(Math.random() * 100);
        td.innerHTML = randomNumber;
        // tableArr[i].push(randomNumber);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
alert(100 === '100');
