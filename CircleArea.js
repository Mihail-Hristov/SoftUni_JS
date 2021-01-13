function checkForNumber (argument) {
let result;

    let inputedType = typeof(argument);

    if (inputedType === 'number') {
        result = (Math.pow(argument, 2) * Math.PI).toFixed(2);
    
    }else {
        result = `We can not calculate the circle area, because we receive a ${inputedType}.`;
    }

    console.log(result);

}

checkForNumber(5);
checkForNumber('test');