// Проверка на спам
function checkSpam(str){
    let string = str.toLowerCase();
    return string.includes('viagra') || string.includes('xxx');
}
// alert(checkSpam('Do you want a viagra?'));

function getItem() {
    return document.getElementById('input2').value;

}

function getResult() {
    console.log(checkSpam(getItem()));
}