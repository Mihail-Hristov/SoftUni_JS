function solve(arr) {
    const newArr = [];
    arr.sort((a,b) => a - b);

    for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
        newArr[newArr.length] = arr[i];
    }
    return newArr
}

console.log(solve([3, 19, 14, 7, 2, 19, 6]));