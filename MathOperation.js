function mathOperation(firstElement, secondElement, operator) {
    let result;
    
    switch(operator) {
            case'+':result = firstElement + secondElement; break;
            case'-':result = firstElement - secondElement; break;
            case'/':result = firstElement / secondElement; break;
            case'*':result = firstElement * secondElement; break;
            case'%':result = firstElement % secondElement; break;
            case'**':result = firstElement ** secondElement; break;
    }
    
    console.log(result);
}