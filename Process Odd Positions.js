function solve(arr) {
    const newArr = [];

    for (let i = 1; i < arr.length; i+= 2) {
        newArr[newArr.length] = arr[i] * 2;
    }
    
    return newArr.reverse();
}

console.log(solve([3, 0, 10, 4, 7, 3]).join(' '));