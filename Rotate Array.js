function solve(arr, rotate) {

    for (let i = 0; i < rotate; i++) {
        arr.unshift(arr.pop());
        
    }

    return arr.join(' ');
}

console.log(solve(['Banana',
'Orange',
'Coconut',
'Apple'],
15));