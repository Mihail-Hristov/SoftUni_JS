function solve(arr) {
    const obj = {};
    while(arr.length) {
        let tokens = arr.shift();
        let[name, price] = tokens.split(' : ');

        let group = name.charAt(0);

        if(obj[group] == undefined) {
            obj[group] = [{name, price: Number(price)}];
        }else {
            obj[group].push({name, price: Number(price)});
            obj[group].sort((a, b) => a.name.localeCompare(b.name));
        }
    }

    let output = [];
    Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
        let values = entry[1].sort((a, b) => a.name.localeCompare(b.name)).map(product =>`  ${product.name}: ${product.price}`).join('\n');
        let string = `${entry[0]}\n${values}`
        output.push(string);
    });

    return output.join('\n');
}

console.log(solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']));