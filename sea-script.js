const resultArray = [];
function createArray(numberOfLines, numberOfColumns) {
    for (let i = 0; i < numberOfLines; i++) {
        resultArray[i] = [];
        for (let j = 0; j < numberOfColumns; j++) {
            const value = Math.floor(Math.random()*3);
            resultArray[i].push(value);
        }
    }
    return resultArray;
}


showBattleField = battleField => {
    const arrayTable = document.getElementById('table');
    battleField.forEach((row) => {
        const tr = document.createElement('tr');
        row.forEach((cell) => {
            const td = document.createElement('td');
            td.innerHTML = cell;
            if (cell === 0) {
                td.className = 'grey';
            }
            tr.appendChild(td);
        })
        arrayTable.appendChild(tr);
    })
    return arrayTable;
}
showBattleField(createArray(10, 10));

let operations ={
    creating: createArray(10, 10),
    showing: showBattleField(createArray(10, 10)),
    ship: getRandomShip(),
}
console.log(operations.ship);

 function getRandomShip() {
     const randomRow = Math.floor(Math.random()*10);
     const randomCell = Math.floor(Math.random()*10);
     resultArray[randomRow][randomCell] = "***";
     const arrayTable = document.getElementById('table');
     arrayTable.innerHTML="";
     showBattleField(resultArray);
 }


