// function getArray() {
//     let arr = document.getElementById('table');
//     let array = [];
//     for (let i = 0; i < 10; i++) {
//         array[i] = [];
//         for (let y = 0; y < 10; y++) {
//             let randomNumber = Math.floor(Math.random() * 100);
//             array[i].push(randomNumber);
//         }
//     }
//    arr.innerHTML = array;
// }
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

