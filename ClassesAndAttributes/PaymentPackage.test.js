const PaymentPackage = require('./PaymentPackage');
const { expect } = require('chai');

describe('testPaymentPackage', () => {
    let instance = undefined;
    beforeEach(() => {
        instance = new PaymentPackage('Name', 100)
    })
    describe('createInstanceSuccessfully', () => {
        it('testName', () => {
            expect(instance._name).to.equal('Name');
        });
        it('testValue', () => {
            expect(instance._value).to.equal(100);
        });
        it('testVAT', () => {
            expect(instance._VAT).to.equal(20);
        });
        it('testActive', () => {
            expect(instance._active).to.equal(true);
        });
    })
    describe('createInstanceWithInvalidParam', () => {
        it('testNameWithEmptyString', () => {
            let inst = function () { new PaymentPackage('', 100)};
            expect(inst).to.throw(Error, 'Name must be a non-empty string');
        });
        it('testNameWithEmptyString', () => {
            let inst = function () { new PaymentPackage(100)};
            expect(inst).to.throw(Error, 'Name must be a non-empty string');
        });
        it('testNameWithNonString', () => {
            let inst = function () { new PaymentPackage(100, 100)};
            expect(inst).to.throw(Error, 'Name must be a non-empty string');
        });
        it('testValueWithNegativeNumber', () => {
            let inst = function () { new PaymentPackage('Name', -100)};
            expect(inst).to.throw(Error, 'Value must be a non-negative number');
        });
        it('testValueWithoutNumber', () => {
            let inst = function () { new PaymentPackage('Name')};
            expect(inst).to.throw(Error, 'Value must be a non-negative number');
        });
        it('testValueWithNonNumber', () => {
            let inst = function () { new PaymentPackage('Name', 'secondName')};
            expect(inst).to.throw(Error, 'Value must be a non-negative number');
        });
    })
    describe('testAccesorForName', () => {
        it('testGetName', () => {
            expect(instance.name).to.equal('Name');
        });
        it('testSetName', () => {
            expect(instance.name = 'New Name').to.equal('New Name');
        });
        it('testSetNameWithEmptryString', () => {
            let inst = function () {
                let newInst = new PaymentPackage('', 100);
                newInst.name = '';
            }
            expect(inst).to.throw(Error, 'Name must be a non-empty string');
        });
        it('testSetNameWithNonString', () => {
            let inst = function () {
                let newInst = new PaymentPackage('', 100);
                newInst.name = 123;
            }
            expect(inst).to.throw(Error, 'Name must be a non-empty string');
        });
    })
    describe('testAccesorForValue', () => {
        it('testGetValue', () => {
            expect(instance.value).to.equal(100);
        });
        it('testSetValue', () => {
            expect(instance.value = 150).to.equal(150);
        });
        it('testSetValueWithNegativeNumber', () => {
            let inst = function () {
                let newInst = new PaymentPackage('Name', 100);
                newInst.value = -100;
            }
            expect(inst).to.throw(Error, 'Value must be a non-negative number');
        });
        it('testSetNumberWithNonNumber', () => {
            let inst = function () {
                let newInst = new PaymentPackage('Name', 100);
                newInst.value = 'Test';
            }
            expect(inst).to.throw(Error, 'Value must be a non-negative number');
        });
    })
    describe('testAccesorForVAT', () => {
        it('testGetVAT', () => {
            expect(instance.VAT).to.equal(20);
        });
        it('testSetVAT', () => {
            expect(instance.VAT = 150).to.equal(150);
        });
        it('testSetVATWithNegativeNumber', () => {
            let inst = function () {
                let newInst = new PaymentPackage('Name', 100);
                newInst.VAT = -100;
            }
            expect(inst).to.throw(Error, 'VAT must be a non-negative number');
        });
        it('testSetVATWithNonNumber', () => {
            let inst = function () {
                let newInst = new PaymentPackage('Name', 100);
                newInst.VAT = 'Test';
            }
            expect(inst).to.throw(Error, 'VAT must be a non-negative number');
        });
    })
    describe('testAccesorForActive', () => {
        it('testGetActive', () => {
            expect(instance._active).to.equal(true);
        });
        it('testSetActive', () => {
            expect(instance.active = false).to.equal(false);
        });
        it('testSetActiveWithNegativeNumber', () => {
            let inst = function () {
                let newInst = new PaymentPackage('Name', 100);
                newInst.active = -100;
            }
            expect(inst).to.throw(Error, 'Active status must be a boolean');
        });
        it('testSetActiveWithNonNumber', () => {
            let inst = function () {
                let newInst = new PaymentPackage('Name', 100);
                newInst.active = 'Test';
            }
            expect(inst).to.throw(Error, 'Active status must be a boolean');
        });
    })
    describe('testToString', () => {
        it('testActive', () => {
            expect(instance.toString()).to.equal(`Package: Name\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`);
        });
        it('testInactive', () => {
            instance.active = false;
            expect(instance.toString()).to.equal(`Package: Name (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`);
        });
    })
})