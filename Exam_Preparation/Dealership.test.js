const dealership = require('./Dealership');
const { expect } = require('chai');

describe('dealership', function() {
    describe('newCarCost', function() {
        it('testWithNoExistCarForDiscount', function() {
            let inst = dealership.newCarCost('Honda', 10000);
            expect(inst).to.equal(10000);
        });
        it('testWithDiscount', function() {
            let inst = dealership.newCarCost('Audi A4 B8', 50000);
            expect(inst).to.equal(35000);
        });
    });

    describe('carEquipment', function() {
        it('testSelectingExtras', function() {
            let inst = dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [1, 2]);
            expect(inst).to.deep.equal(['sliding roof', 'sport rims']);
        });
        it('testSelectingExtras', function() {
            let inst = dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [1]);
            expect(inst).to.deep.equal(['sliding roof']);
        });
    });

    describe('euroCategory', function() {
        it('testChekingForEuroCategoryBelow4', function() {
            let inst = dealership.euroCategory(3);
            expect(inst).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
        it('testChekingForEuroCategory', function() {
            let inst = dealership.euroCategory(4);
            expect(inst).to.equal('We have added 5% discount to the final price: 14250.');
        });
        it('testChekingForEuroCategory', function() {
            let inst = dealership.euroCategory(5);
            expect(inst).to.equal('We have added 5% discount to the final price: 14250.');
        });
    });
    
});