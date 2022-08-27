function createArray(numberOfLines, numberOfColumns) {
    const resultArray = [];
    const randomRow = Math.floor(Math.random()*numberOfLines);
    const randomCell = Math.floor(Math.random()*numberOfColumns);
    for (let i = 0; i < numberOfLines; i++) {
        resultArray[i] = [];
        for (let j = 0; j < numberOfColumns; j++) {
            const value = Math.floor(Math.random()*3);
            resultArray[i].push(value);
        }
    }
    resultArray[randomRow][randomCell] = "***";
    return resultArray;
}

// function getRandomShip(numberOfRow, numberOfCell) {
//     const randomRow = Math.floor(Math.random()*numberOfRow);
//     const randomCell = Math.floor(Math.random()*numberOfCell);
//     resultArray[randomRow][randomCell] = "***";
//     const arrayTable = document.getElementById('table');
//     arrayTable.innerHTML="";
//     showBattleField(resultArray);
// }
function fillCells(array, row, elem){
    const td = document.createElement('td');
    td.innerHTML = elem;
    if (elem === 0) {
        td.className = 'grey';
    }
    if (elem === 1) {
        td.innerHTML = ' ';
        const smiley = document.createElement('img');
        smiley.src = "https://prostomac.com/wp-content/uploads/2015/10/emoji-icon.png";
        td.appendChild(smiley);
    }
    row.appendChild(td);
}
showBattleField = battleField => {
    const arrayTable = document.getElementById('table');
    battleField.forEach((row) => {
        const tr = document.createElement('tr');
        fillCells(row, tr);
        arrayTable.appendChild(tr);
    })
    return arrayTable;
}
showBattleField(createArray(10, 10));

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
            if (cell === 1) {
                td.innerHTML = ' ';
                const smiley = document.createElement('img');
                smiley.src = "https://prostomac.com/wp-content/uploads/2015/10/emoji-icon.png";
                td.appendChild(smiley);
            }
            tr.appendChild(td);
        })
        arrayTable.appendChild(tr);
    })
    return arrayTable;
}
showBattleField(createArray(10, 10));
// const operations = {
//     createBattleField: createArray(10, 10),
//     show: showBattleField(createArray(10, 10)),
//     // ship: getRandomShip(10, 10),
// }
// console.log(operations.show);
//
// const operations = {
//     createBattleField: createArray(),
//     show: showBattleField(createArray),
// }

// const operations = {
//     createBattleField: function(numberOfLines, numberOfColumns) {
//         const resultArray = [];
//         const randomRow = Math.floor(Math.random() * numberOfLines);
//         const randomCell = Math.floor(Math.random() * numberOfColumns);
//         for (let i = 0; i < numberOfLines; i++) {
//             resultArray[i] = [];
//             for (let j = 0; j < numberOfColumns; j++) {
//                 const value = Math.floor(Math.random() * 3);
//                 resultArray[i].push(value);
//             }
//         }
//         resultArray[randomRow][randomCell] = "***";
//         return resultArray;
//     },
//     show: function(battleField) {
//         const arrayTable = document.getElementById('table');
//         battleField.forEach((row) => {
//             const tr = document.createElement('tr');
//             row.forEach((cell) => {
//                 const td = document.createElement('td');
//                 td.innerHTML = cell;
//                 if (cell === 0) {
//                     td.className = 'grey';
//                 }
//                 if (cell === 1) {
//                     td.innerHTML = ' ';
//                     const smiley = document.createElement('img');
//                     smiley.src = "https://prostomac.com/wp-content/uploads/2015/10/emoji-icon.png";
//                     td.appendChild(smiley);
//                 }
//                 tr.appendChild(td);
//             })
//             arrayTable.appendChild(tr);
//         })
//         return arrayTable;
//     }
// }
//
// operations.show(createBattleField(10, 10));

function createArrOfNumbers(arrLength) {
    const arrayOfNumbers = [];
    for (let i = 0; i < arrLength; i++) {
        const value = Math.floor(Math.random() * 100);
        arrayOfNumbers.push(value);
    }
    return arrayOfNumbers;
}
    console.log(createArrOfNumbers(50));

function getMaxNumber(array) {
    let maxNumber = 0;
    for (let i = 0; i < array.length; i++) {
        if (maxNumber < array[i]) {
            maxNumber = array[i];
        }
    }
    return maxNumber;
}

console.log(getMaxNumber(createArrOfNumbers(50)));
