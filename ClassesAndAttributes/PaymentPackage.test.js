const packages = require('./PaymentPackage');
const { expect } = require('chai');

describe('testPaymentPackage', () => {
    it ('createInstanceSuccessfully', () => {
        let instance = new PaymentPackage('Name', 100);
        expect(instance._name).to.equal('Name');
    })
})