const lookupChar = require('./CharLookup');
const { expect } = require('chai');

describe('testLookupCharFunction', () => {
    it('happyPath', () => {
        expect(lookupChar('Test', 1)).to.equal('e');
    })
    it('returnUndefunedWithNonString', () => {
        expect(lookupChar(123, 1)).to.equal(undefined);
    })
    it('returnUndefunedWithNonInteger', () => {
        expect(lookupChar('Test', '2')).to.equal(undefined);
    })
    it('returnUndefunedWithNonInteger', () => {
        expect(lookupChar('Test', 2.4)).to.equal(undefined);
    })
    it('testWithNegativeIndex', () => {
        expect(lookupChar('Test', -1)).to.equal('Incorrect index');
    })
    it('testWithOutOfRangeIndex', () => {
        expect(lookupChar('Test', 4)).to.equal('Incorrect index');
    })
    it('testWithOutOfRangeIndex', () => {
        expect(lookupChar('Test', 10)).to.equal('Incorrect index');
    })
})