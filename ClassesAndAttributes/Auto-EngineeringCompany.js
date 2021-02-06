function solve(input) {
    let brands = new Map();

    function splitLine(innput) {
        return innput.split(' | ');
    }

    let tokens = input.map(splitLine);

    tokens.forEach(c => {
        let brand = c[0];
        let model = c[1];
        let quantity = Number(c[2]);

        let currentModel = new Map();
        currentModel.set(model, quantity);

        if (brands.get(brand) == undefined) {
            brands.set(brand, currentModel);
        } else {
            let existModels = brands.get(brand);
            if (existModels.has(model)) {
                existModels.set(model, existModels.get(model) + quantity);
                brands.set(brand, existModels);
            } else {
                existModels.set(model, quantity);
                brands.set(brand, existModels);
            }
        }
    })

    let result = '';

    for (const [key, value] of brands) {
        result += `${key}\n`;
        let models = value;
        for (const [key, value] of models) {
            result += `###${key} -> ${value}\n`;
        }
    }

    return result.trim();
}

console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X6 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']));