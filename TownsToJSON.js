function solve(arr) {
    let result = [];

    let [colums, ...table] = arr;

    //let [firstColim, secondColum, thitdColum] = arr.shift().split(' | ', 3);

    while(table.length) {
        let [t, latitude, l] = colums.shift().split(' | ', 3);
        let[r, town] = t.split('| ').sl;
        let[longitude, p] = l.split(' |');
        result.push({town: town, latitude: Number(latitude).toFixed(2), ongitude: Number(longitude).toFixed(2)})
    }

    return JSON.stringify(result);
}

console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']));