function solution() {

    const products = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
    }

    const meals = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    }

    const commands = {
        restock: (product, qty) => {
            products[product] += qty;
            return 'Success';
        },
        prepare: (recipe, qty) => {
            let result = 'Success';

            let needMeal = meals[recipe];
            for (const product in needMeal) {
                let need = needMeal[product] * qty;
                let available = products[product];
                if (available - need < 0) {
                    result = `Error: not enough ${product} in stock`;
                    break
                } else{
                    products[product] -= need;
                }
            }

            return result;
        },
        report: () => {
            return `protein=${products.protein} carbohydrate=${products.carbohydrate} fat=${products.fat} flavour=${products.flavour}`;
        }
    }

    return (input) => {
        let tokens = input.split(' ');
        let command = tokens[0]
        let product = tokens[1];
        let qty = Number(tokens[2]);
        
        let f = commands[command];
        return f(product, qty);
        
    }
}

let maneger = solution();

console.log(maneger('restock carbohydrate 10'));
console.log(maneger('restock flavour 10'));
console.log(maneger('prepare apple 1'));
console.log(maneger('restock fat 10'));
console.log(maneger('prepare burger 1'));
console.log(maneger('report'));
