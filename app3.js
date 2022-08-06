// Возвращение числового значения валюты
function extractCurrencyValue(str) {
    return str.slice(1);
}
console.log(extractCurrencyValue('$100'));