const rgbToHexColor = require('./RGBToHex');
const { expect } = require('chai');

describe('testRgbToHexColor', () => {
    it('happyPath', () => {
        expect(rgbToHexColor(21, 116, 92)).to.equal('#15745C');
    });
    it('returnUndefinedWithIntegerOutOfRange', () => {
        expect(rgbToHexColor(-1, 116, 92)).to.undefined;
    });
    it('returnUndefinedWithIntegerOutOfRange', () => {
        expect(rgbToHexColor(20, 460, 92)).to.undefined;
    });
    it('returnUndefinedWithIntegerOutOfRange', () => {
        expect(rgbToHexColor(4, 116, 256)).to.undefined;
    });
    it('returnUndefinedWithNonInteger', () => {
        expect(rgbToHexColor('2', 116, 256)).to.undefined;
    });
    it('returnUndefinedWithNonInteger', () => {
        expect(rgbToHexColor(1, '116', 256)).to.undefined;
    });
    it('returnUndefinedWithNonInteger', () => {
        expect(rgbToHexColor(2, 116, '25')).to.undefined;
    });
    it('returnUndefinedWithLessArg', () => {
        expect(rgbToHexColor(2, 116)).to.undefined;
    });
    it('returnCorrectColorWithMoreThenTree Arg', () => {
        expect(rgbToHexColor(2, 116, 50 ,2)).to.equal('#027432');
    });
    it('happyPath', () => {
        expect(rgbToHexColor(0, 116, 50)).to.equal('#007432');
    });
    it('happyPath', () => {
        expect(rgbToHexColor(0, 116, 255)).to.equal('#0074FF');
    });

        
})