function solve(x1, y1, x2, y2) {
    let isValid;

    if (x1 === 0 || y1 === 0) {
        isValid = 'valid';
    }else {
        isValid = 'invalid';
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValid}`);

    if (x2 === 0 || y2 === 0) {
        isValid = 'valid';
    }else {
        isValid = 'invalid';
    }

    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValid}`);

    if (x1 === x2 || y1 === y2 || x1 === y2 || y1 === x2) {
        isValid = 'valid';
    }else {
        isValid = 'invalid';
    }

    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid}`);
}

solve(2, 1, 1, 1);