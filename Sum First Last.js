function solve(arr) {
    const first = Number(arr[0]);
    const last = Number(arr[arr.length - 1]);

    const sum = first + last;

    return sum;
}

console.log(solve(['20', '30', '40']));