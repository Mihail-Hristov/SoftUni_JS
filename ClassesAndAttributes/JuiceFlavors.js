function solve(input) {
    let map = new Map();
    let finalMap = new Map();
    input.forEach(el => {
        let tokens = el.split(' => ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if (map.get(product) == undefined) {
            map.set(product, 0);
        }

        map.set(product, map.get(product) + quantity);

        if (map.get(product) >= 1000) {
            if (finalMap.get(product) == undefined) {
                finalMap.set(product, 0);
            }
    
            finalMap.set(product, finalMap.get(product) + Math.floor(map.get(product) / 1000));
            map.set(product, map.get(product) % 1000);
        }
    });

    let result = '';
    for (const [key, value] of finalMap) {
        result += `${key} => ${value}\n`;
    }

    return result.trim();

}

console.log(solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']));