function solve(arr) {
    const newArr = [];
    arr.sort((a,b) => a - b);
    const tempArr = arr.slice();


    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            newArr[newArr.length] = tempArr.shift();
        }else {
            newArr[newArr.length] = tempArr.pop();
        }
        
    }

    return newArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))