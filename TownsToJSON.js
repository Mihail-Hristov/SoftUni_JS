function solve(arr) {

    let result = [];

    let firstElelemtn = arr[0];

    let rowArr = firstElelemtn.substring(2, firstElelemtn.length - 2).split(' | ');
    let first = rowArr[0];
    let second = rowArr[1];
    let third = rowArr[2];

    for (let i = 1; i < arr.length; i++) {
        let currentRow = arr[i].substring(2, arr[i].length - 2).split(' | ');
        let lat = Number(currentRow[1]).toFixed(2);
        let lon = Number(currentRow[2]).toFixed(2);
            let obj = {
                [first]: currentRow[0],
                [second]: Number(lat),
                [third]: Number(lon),
            };

        result.push(obj);
    }

    return JSON.stringify(result);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));