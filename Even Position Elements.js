function solve(numbers) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 == 0) {
            result[result.length] = numbers[i];
        }
    
    }
    return result.join(' ');
}

console.log(solve);