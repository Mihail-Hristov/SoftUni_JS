function solve(lengthOfArr, numbersForSum) {
    const newArr = [1];

    for (let i = 0; i < lengthOfArr - 1; i++) {
        newArr[newArr.length] = sumOfNumbers(newArr, numbersForSum); 
    }

    function sumOfNumbers(arr, k) {
        let sum = 0;

        if (k > arr.length) {
            k = arr.length;
        }

        for (let i = 1; i <= k; i++) {
            sum += arr[arr.length - i];
        }
        return sum;
    }

    return newArr;
}

console.log(solve(6, 3));