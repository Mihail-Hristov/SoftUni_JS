const pizzUni = require('./PizzaPlace');
const { expect } = require('chai');

describe('Tests Pizza Unit', () => {
   beforeEach(() => {
        testObj = {
            orderedPizza: 'Pizza name',
            orderedDrink: 'Drink name'
        }
        testObjWithoutDrink = {
            orderedPizza: 'Pizza name',
        }
        testObjWithoutNothing = {
        }
    })
    describe('makeAnOrder', () => {
        it('testHappyPath', () => {
            expect(testObj.orderedPizza).to.equal('Pizza name');
            expect(testObj.orderedDrink).to.equal('Drink name');
            expect(pizzUni.makeAnOrder(testObj)).to.equal('You just ordered Pizza name and Drink name.')
        });
        it('testHappyPathWithoutDrink', () => {
            expect(testObjWithoutDrink.orderedPizza).to.equal('Pizza name');
            expect(testObjWithoutDrink.orderedDrink).to.equal(undefined);
            expect(pizzUni.makeAnOrder(testObjWithoutDrink)).to.equal('You just ordered Pizza name')
        });
        it('testWithoutPizza', () => {
            expect(testObjWithoutNothing.orderedPizza).to.equal(undefined);
            expect(testObjWithoutNothing.orderedDrink).to.equal(undefined);
            let oper = function () {pizzUni.makeAnOrder(testObjWithoutNothing)};
            expect(oper).to.throw(Error, 'You must order at least 1 Pizza to finish the order.')
        });
    });

    describe('getRemainingWork', () => {
        it('testHappyPath', () => {
            let result = pizzUni.getRemainingWork([{pizzaName: 'the name of the pizza', status: 'ready'}]);
            expect(result).to.equal('All orders are complete!');
        });
        it('testHappyPathForPreparing', () => {
            let result = pizzUni.getRemainingWork([{pizzaName: 'the name of the pizza', status: 'preparing'}]);
            expect(result).to.equal('The following pizzas are still preparing: the name of the pizza.');
        });
        it('testHappyPathForPreparing', () => {
            let result = pizzUni.getRemainingWork([{pizzaName: 'first', status: 'preparing'}, {pizzaName: 'second', status: 'preparing'}]);
            expect(result).to.equal('The following pizzas are still preparing: first, second.');
        });
    });

    describe('orderType', () => {
        it('testWithDiscount', () => {
            let result = pizzUni.orderType(20, 'Carry Out');
            expect(result).to.equal(18);
        });
        it('testNormalOreder', () => {
            let result = pizzUni.orderType(20, 'Delivery');
            expect(result).to.equal(20);
        });
    });
});