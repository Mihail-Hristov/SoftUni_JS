const sum = require('./SumOfNumbers')
const { expect } = require('chai');

describe('testSumFunction', () => {
    it ('FuctionReturCorrectSum', () => {
        expect(sum([1,2])).to.equal(3);
    });
    it ('FuctionReturCorrectSum', () => {
        expect(sum([1])).to.equal(1);
    });
    it ('FuctionReturCorrectSum', () => {
        expect(sum([4, 5, 10])).to.equal(19);
    });
    it ('FuctionReturCorrectSum', () => {
        expect(sum([])).to.equal(0);
    });
});