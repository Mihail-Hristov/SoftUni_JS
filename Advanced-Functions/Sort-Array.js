function solve(array, type) {
    let result = [];

    let obj = {
        asc: (array) => {
            result = array.sort((a, b) => a - b);
        },
        desc: (array) => {
            result = array.sort((a, b) => b - a);
        },
    }

    let func = obj[type];
    func(array);

    return result;
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));