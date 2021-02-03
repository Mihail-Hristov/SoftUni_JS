const isOddOrEven = require('./EvenOrOdd');
const { expect } = require('chai');

describe('testOddOrEven', () => {
    it ('happyOddPath', () => {
        expect(isOddOrEven('Misho')).to.equal('odd');
    });
    it ('happyEvenPath', () => {
        expect(isOddOrEven('Test')).to.equal('even');
    });
    it ('testWithNotStringInput', () => {
        expect(isOddOrEven(12345)).to.equal(undefined);
    });
    it ('testWithNotStringInput', () => {
        expect(isOddOrEven(() => {return {test: 'test'}})).to.equal(undefined);
    });
    it ('happyOddPath', () => {
        expect(isOddOrEven('Only CSKA')).to.equal('odd');
    });
    it ('happyEvenPath', () => {
        expect(isOddOrEven('One or multy')).to.equal('even');
    });
});