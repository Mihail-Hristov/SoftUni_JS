const isSymmetric = require('./CheckForSymmetry');
const { expect } = require('chai');

describe('TestSymmetrycMatrix', () => {
    it ('ArrayIsSymmetrycWithInt', () => {
        expect(isSymmetric([2, 2])).to.true;
    })
    it ('InputIsNotArray', () => {
        expect(isSymmetric(1, 2)).to.be.false;
    })
    it ('ArrayContentDifferentTypeAndIsNotSymmetric', () => {
        expect(isSymmetric([2, ,2, 'test'])).to.be.false;
    })
    it ('ArrayIsNotSymmetryc', () => {
        expect(isSymmetric([2, 3, 4, 5])).to.be.false;
    })
    it ('ArrayIsSymmetrycWithString', () => {
        expect(isSymmetric(['One', 'Two', 'One'])).to.true;
    })
    it ('ArrayContentDifferentTypeAndIsSymmetric', () => {
        expect(isSymmetric([2, 'test', 2])).to.true;
    })
    it ('EmptyArrayIsSymmetric', () => {
        expect(isSymmetric([])).to.true;
    })
    it ('InputIsNotArray', () => {
        expect(isSymmetric('test')).to.be.false;
    })
    it ('ArrayContentDifferentTypeAndIsNotSymmetric', () => {
        expect(isSymmetric(['1', 1])).to.be.false;
    })
    it ('ArrayIsNotSymmetryc', () => {
        expect(isSymmetric(['a', 'b'])).to.be.false;
    })
})