
function currencyFormatter(sep, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + sep;
    result += value.toFixed(2).substr(-2, 2);

    return symbolFirst ? symbol + ' ' + result : result + ' ' + symbol;
}

function createFormatter(sep, symbol, symbolFirst, currencyFormatter) {
    return (value) => currencyFormatter(sep, symbol, symbolFirst, value);
}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(3.1429));