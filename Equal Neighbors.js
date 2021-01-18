function solve(arr) {
    let count = 0;

    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length - 1; col++) {
            if (arr[row][col] === arr[row][col + 1]) {
                count ++;
            };
        }
    }

    let matRow = arr.length;
    let matCol = arr[0].length;

    for (let col = 0; col < matCol; col++) {
        for (let row = 0; row < arr.length - 1; row++) {
            if (arr[row][col] === arr[row + 1][col]) {
                count ++;
            };
        };
    }

    return count;
}

console.log(solve([[2, 2, 5, 7, 4],
                [4, 0, 5, 3, 4],
                [2, 5, 5, 4, 2]]))