function solve(arr) {
    const newArr = [];
    newArr = arr.reduce((arr2, element, arr) => {
        return arr2.push(element);
    });


    return newArr
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));