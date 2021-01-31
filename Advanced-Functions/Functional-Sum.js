function add(input) {
    let sum = 0;
    sum += input

    function addMore(number) {
        sum += number;
        return addMore;
    }

    addMore.toString = () => sum;
    return addMore;
}

console.log(add(1));
console.log(add(5)(6));