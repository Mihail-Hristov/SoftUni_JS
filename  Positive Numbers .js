function solve(arr) {
const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.unshift(arr[i]);
        }else {
            newArr.push(arr[i]);
        }
    }

    for (let iterator of newArr) {
        console.log(iterator);
    }
}

solve([7, -2, 8, 9]);