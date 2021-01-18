function solve(arr) {
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < arr.length; row++) {
        for (let col = 0; col < arr[row].length; col++) {
            let cur = arr[row][col];
            if (cur > biggestNumber) {
                biggestNumber = cur;
            }

        }
        
    }

    return biggestNumber;
}

console.log(solve([[20, 50, 10],[8, 33, 145]]));