function solve(arr) {
    let isMagic = true;

    let sumForCheck = arr[0].reduce(function (acc, cur) {
        return acc + cur;
    }, 0);

    for (let row = 0; row < arr.length; row++) {
        let sum = 0;
        for (let col = 0; col < arr[row].length; col++) {
            sum += arr[row][col];
        }
        if (sumForCheck !== sum) {
            isMagic = false;
            return isMagic;
        }
    }

    for (let row = 0; row < arr.length; row++) {
        let sum = 0;
        for (let col = 0; col < arr.length; col++) {
            sum += arr[col][row];
        }
        if (sumForCheck !== sum) {
            isMagic = false;
            return isMagic;
        }
    }




    return isMagic;
}

console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));