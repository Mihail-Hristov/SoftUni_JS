function solve(arr, startFrom, endTo) {
    let startIndex = arr.indexOf(startFrom);
    let endIndex = arr.indexOf(endTo) + 1;
    
    const newArr = arr.slice(startIndex, endIndex);

    return newArr;
}

console.log(solve(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'], 'Key Lime Pie', 'Lemon Meringue Pie'));