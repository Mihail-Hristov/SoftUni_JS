function solve(arr, start, end) {
    let startIndex = Number(start);
    let endIndex = Number(end)

    let result;
    if (Array.isArray(arr) === false) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }

    result = arr.slice(startIndex, endIndex + 1).reduce((a,c) => a += Number(c), 0);

    return result;

}

console.log(solve('text', 0, 2));