function sumNumbers(first, second) {
    let number1 = Number(first);
    let number2 = Number(second);
    
    let result = 0;
    
    for(i = number1; i <= number2; i++) {
        result += i;
    }
    
    console.log(result);
}