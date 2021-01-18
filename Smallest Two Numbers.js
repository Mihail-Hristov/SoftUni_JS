function solve(arr) {
    let result = '';

    let newArr = arr.sort((a, b) => a - b);

    const first = newArr[0];
    const second = newArr[1];

    result = first + ' ' + second;

    return result;
}

console.log(solve([30, 15, 50, 5]));