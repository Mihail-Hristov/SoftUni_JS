const mathEnforcer = require('./MathEnforcer');
const { expect } = require('chai');

describe('testMathEnforcer', () => {
    describe('addFive', () => {
        it('happyPath', () => {
            expect(mathEnforcer.addFive(7)).to.equal(12);
        })
        it('theArgIsNotANumber', () => {
            expect(mathEnforcer.addFive('4')).to.equal(undefined);
        })
        it('theArgIsAFloatingPoint', () => {
            expect(mathEnforcer.addFive(3.5)).to.equal(8.5);
        })
        it('theArgIsNegativeNumber', () => {
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        })
    })

    describe('subtractTen', () => {
        it('happyPath', () => {
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
        })
        it('theArgIsNotANumber', () => {
            expect(mathEnforcer.subtractTen('20')).to.equal(undefined);
        })
        it('theArgIsAFloatingPoint', () => {
            expect(mathEnforcer.subtractTen(13.5)).to.equal(3.5);
        })
        it('theArgIsNegativeNumber', () => {
            expect(mathEnforcer.subtractTen(-2)).to.equal(-12);
        })
    })

    describe('sum', () => {
        it('happyPath', () => {
            expect(mathEnforcer.sum(6, 7)).to.equal(13);
        })
        it('theArgIsNotANumber', () => {
            expect(mathEnforcer.sum('20', 10)).to.equal(undefined);
        })
        it('theArgIsNotANumber', () => {
            expect(mathEnforcer.sum(10, '20')).to.equal(undefined);
        })
        it('theArgIsAFloatingPoint', () => {
            expect(mathEnforcer.sum(13.5, 10.2)).to.equal(23.7);
        })
        it('theArgIsNegativeNumbers', () => {
            expect(mathEnforcer.sum(-13.5, -10.2)).to.equal(-23.7);
        })
    })
})