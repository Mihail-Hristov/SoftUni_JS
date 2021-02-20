const numberOperations = require('./NumberOperations');
const { expect } = require('chai');

describe('Test Number Operations', function() {
    describe('pow Number', function() {
        it("happy path", function() {
            let check = numberOperations.powNumber(2);
            expect(check).to.equal(4);
        });
        it("happy path with zero", function() {
            let checkZero = numberOperations.powNumber(0);
            expect(checkZero).to.equal(0);
        });
    });

    describe('number checker', function() {
        it("is not a number", function() {
            let check = function () {numberOperations.numberChecker('not Number')};
            expect(check).to.throw(Error, 'The input is not a number!');
        });
        it("lower than 100", function() {
            let check = numberOperations.numberChecker(90);
            expect(check).to.equal('The number is lower than 100!');
        });
        it("more than 100", function() {
            let check = numberOperations.numberChecker(120);
            expect(check).to.equal('The number is greater or equal to 100!');
        });
        it("with 100", function() {
            let check = numberOperations.numberChecker(100);
            expect(check).to.equal('The number is greater or equal to 100!');
        });
    });

    describe('Sum Arrays', function() {
        it("with equal arrays", function() {
            let first = [1, 2, 3];
            let secont = [3, 2, 1];
            let check = numberOperations.sumArrays(first, secont);
            expect(check).to.deep.equal([4, 4, 4]);
        });
        it("with not equal arrays", function() {
            let first = [1, 2, 3, 5, 5];
            let secont = [3, 2, 1];
            let check = numberOperations.sumArrays(first, secont);
            expect(check).to.deep.equal([4, 4, 4, 5, 5]);
        });
        it("with not equal arrays", function() {
            let first = [1, 2, 3];
            let secont = [3, 2, 1, 5, 5];
            let check = numberOperations.sumArrays(first, secont);
            expect(check).to.deep.equal([4, 4, 4, 5, 5]);
        });
        it("with equal arrays", function() {
            let first = [1, 2, 3, 1 ,1];
            let secont = [3, 2, 1, 5, 5];
            let check = numberOperations.sumArrays(first, secont);
            expect(check).to.deep.equal([4, 4, 4, 6, 6]);
        });
    });
});