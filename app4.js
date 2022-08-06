// $ - разделитель строки
let arr = [];
function separatorString(str){
    for (let i=0; i<str.length; i++){
        if (str[i] === `$`) {
            arr.push(str.slice(0,i));
            str = str.slice(i+1,str.length);
            console.log(str);
        }
        continue;
    }
}
separatorString('hello$hello$hello$hello$hello$hello');
console.log(arr);
// let arr = [];
// function separatorString(str) {
//     arr = str.split('$');
//     return arr;
// }
//
// console.log(separatorString('236756u$rdcvjkm,bhjl,$/pjo.liyvou$876t976f9go$ut5d5n87im8ku$hello'))