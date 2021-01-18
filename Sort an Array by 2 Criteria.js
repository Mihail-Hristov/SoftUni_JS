function solve(arr) {
    arr.sort((a,b) => {
        let result = a.length - b.length;
        if (result == 0) {
            result = a.localeCompare(b);
        }

        return result
    })

    for (let item of arr) {
        console.log(item);
    }
}

solve(['Isacc',
'Theodor',
'Jack',
'Harrison',
'George'])