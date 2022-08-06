// Сокращение(обрезка) строки
function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    if (str.length > maxlength) {
        return str.slice(0, maxlength) + '...';
    }
}
console.log(truncate('Я тебя люблю очень очень очень очень очень', 20));