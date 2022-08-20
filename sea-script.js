// function createBattleStatus() {
//     const string = 'XO. ';
//     const randomStr = Math.random();
//     if (randomStr < 0.1) { return string[0];}
//     if (randomStr < 0.3) {return string[1];}
//     if (randomStr < 0.6) {return string[2];}
//     return string[3];
// }
//
// function getBattleStatus() {
//         return createBattleStatus();
//     }
//

function createArray(numberOfLines, numberOfColumns) {
    const resultArray = [];
    for (let i = 0; i < numberOfLines; i++) {
        resultArray[i] = [];
        for (let j = 0; j < numberOfColumns; j++) {
            const value = Math.floor(Math.random()*2);
            resultArray[i].push(value);
        }
    }
    return resultArray;
}
// console.log(createArray(10, 10));

// function showBattleField(field) {
//     const arrayTable = document.getElementById('table');
//     for (let i = 0; i < 10; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < 10; j++) {
//             const td = document.createElement('td');
//             td.innerHTML = field[i][j];
//             if (field[i][j] === 0) {
//                 td.className = 'grey';
//                 // document.write(td.className);
//                 // td.innerHTML = td.className;
//             }
//             tr.appendChild(td);
//         }
//         arrayTable.appendChild(tr);
//     }
//     return arrayTable;
// }
//
// showBattleField(createArray(10, 10));

// function showBattleField(field) {
//     const arrayTable = document.getElementById('table');
//     field.forEach(function(row) {
//         const tr = document.createElement('tr');
//         field.forEach(function(cell) {
//             const td = document.createElement('td');
//             td.innerHTML = cell;
//             if (cell === 0) {
//                 td.className = 'grey';
//                 document.write(td.className);
//                 // td.innerHTML = td.className;
//             }
//             tr.appendChild(td);
//         })
//         arrayTable.appendChild(tr);
//     })
//     return arrayTable;
// }
//
// showBattleField(createArray(10, 10));

showBattleField = battleField => {
    const arrayTable = document.getElementById('table');
    battleField.forEach((row) => {
        const tr = document.createElement('tr');
        // let cellF = function(cell) ;
        row.forEach((cell) => {
            const td = document.createElement('td');
            td.innerHTML = cell;
            if (cell === 0) {
                td.className = 'grey';
                // document.write(td.className);
                // td.innerHTML = td.className;
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
}
console.log(operations.creating);


// function showTable(lineNumber, cellNumber, shipMarkup) {
//     const tableLetter = document.getElementById('tableLetter');
//     for (let i = 0; i < 10; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < 10; j++) {
//             const td = document.createElement('td');
//             // if (document.getElementById('ship').value === 1) {
//                 if (i === lineNumber && j === cellNumber) {td.innerHTML = shipMarkup;}
//                 else {td.innerHTML = ' ';}
//             tr.appendChild(td);
//         }
//         tableLetter.appendChild(tr);
//     }
// }
// showTable(0, 3, '***');



function fib(n) {
    if ( n < -1 || n === -1) {return fib(n+2) - fib(n+1);}
     if (n === 2) {return 1;}
    return fib(n-1) + fib(n-2);
}
alert(fib(-2));

// function sumTo(num) {
//     if (num === 0 || num === 1) { return num;}
//     return num + sumTo(num - 1);
// }
// alert(sumTo(-2));

// function sumNumber(num) {
//     let result = 0;
//     for (let i = 0; i < num + 1; i++) {
//        result += i;
//     }
//     return result;
// }
// alert(sumNumber(-2));