function solve(arr) {
    let log = {};

    while (arr.length) {
        let tokens = arr.shift()
        let [town, product, price] = tokens.split(' | ');
        price = Number(price);


        if (log[product] == undefined) {
            log[product] = [{town, price}];
        } else {
            let currentTown = log[product][0].town;
            let currentPrice = log[product][0].price;
            if(currentTown === town) {
                log[product][0].price == currentPrice; 
                    let temp = log[product].shift();
                    log[product].push(temp);
            }else if(currentPrice > price) {
                log[product].unshift({town, price});
            }else {
                log[product].push(town, price);
            }
        }
    }

    let result = [];
    for (const element in log) {
        let town = log[element][0].town;
        let price = log[element][0].price;
        result.push(`${element} -> ${price} (${town})`);
    };

    return result.join('\n');

}

console.log(solve([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
  ]))