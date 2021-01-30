function solve(number) {
    return function(x) {
        return x + number;
    }
}

let add5 = solve(5);

console.log(add5(3));