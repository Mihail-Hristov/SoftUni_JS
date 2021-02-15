class ChristmasDinner {
    constructor(budget) {
        this._budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set _budget(newB) {
        if (newB < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = newB;
    }

    shopping(product) {
        let type = product[0];
        let price = product[1];

        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(type);
        this.budget -= price;

        return `You have successfully bought ${type}!`
    }

    recipes(recipe) {
        for (const item of recipe.productsList) {
            if (!this.products.includes(item)) {
                throw new Error('We do not have this product')
            }
        }

        this.dishes.push(recipe);
        return `${recipe.recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        let dishExist = false;

        for (const item of this.dishes) {
            if (item.recipeName === dish) {
                dishExist = true;
            }
        }

        if (!dishExist) {
            throw new Error('We do not have this dish');
        }
        for (const guest in this.guests) {
            if (guest === name) {
                throw new Error('This guest has already been invited');
            }

        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let result = '';

        for (const guest in this.guests) {
            let prod;
            for (const element of this.dishes) {
                if (element.recipeName === this.guests[guest]) {
                    prod = element.productsList.join(', ');
                }
            }
        
            result += `${guest} will eat ${this.guests[guest]}, which consists of ${prod}` + '\n';
        }
        return result.trim()
    }
}

let dinner = new ChristmasDinner(300);
console.log(dinner.shopping(['Salt', 1]));
console.log(dinner.shopping(['Beans', 3]));
console.log(dinner.shopping(['Cabbage', 4]));
console.log(dinner.shopping(['Rice', 2]));
console.log(dinner.shopping(['Savory', 1]));
console.log(dinner.shopping(['Peppers', 1]));
console.log(dinner.shopping(['Fruits', 40]));
console.log(dinner.shopping(['Honey', 10]));
console.log(dinner.recipes({
recipeName: 'Oshav',
productsList: ['Fruits', 'Honey']
}));
console.log(dinner.recipes({
recipeName: 'Folded cabbage leaves filled with rice',
productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
}));
console.log(dinner.recipes({
recipeName: 'Peppers filled with beans',
productsList: ['Beans', 'Peppers', 'Salt']
}));
console.log(dinner.inviteGuests('Ivan', 'Oshav'));
console.log(dinner.inviteGuests('Misho', 'Folded cabbage leaves filled with rice'));
console.log(dinner.inviteGuests('Georgi', 'Peppers filled with beans'));
console.log(dinner.showAttendance())