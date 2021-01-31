function getFibonator() {
    let numbers = [];
    numbers[numbers.length] = 1;

    return () => {
        let result = 0
        if (numbers.length < 3) {
            result = numbers[numbers.length - 1];
            numbers[numbers.length] = 1;
            result = 1;
        }else {
            let number = numbers[numbers.length - 2] + numbers[numbers.length - 1];
            numbers.push(number);
            result = number;
        }
        return result;
    }
}

let fib = getFibonator();

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());