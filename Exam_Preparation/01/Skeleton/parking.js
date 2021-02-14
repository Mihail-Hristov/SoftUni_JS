class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity <= this.vehicles.length) {
            throw new Error('Not enough parking space.');
        } else {
            let car = {
                carModel,
                carNumber,
                payed: false,
            }
            this.vehicles.push(car);
            return `The ${carModel}, with a registration number ${carNumber}, parked.`;
        }
    }

    removeCar(carNumber) {
        let forRemove = this.vehicles.find(car => car.carNumber === carNumber);
        if (!forRemove) {
            throw new Error(`The car, you're looking for, is not found.`);
        } else if (forRemove.payed === false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        } else {
            this.vehicles = this.vehicles.filter(c => c.carNumber !== carNumber);
        }
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let forPay = this.vehicles.find(car => car.carNumber === carNumber);
        if (!forPay) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        } else if (forPay.payed === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        } else {
            forPay.payed = true;
            return `${carNumber}'s driver successfully payed for his stay.`;
        }
    }

    getStatistics(carNumber) {
        let result;
        if (!carNumber) {
            result = `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.\n`
            if (this.vehicles.length == 1) {
                this.vehicles.forEach(c => result +=`${c.carModel} == ${c.carNumber} - ${c.payed ? 'Has payed' : 'Not payed'}`);
            } else {
                this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel)).forEach(c => result += `${c.carModel} == ${c.carNumber} - ${c.payed ? 'Has payed' : 'Not payed'}` + '\n');
            }
        } else {
            let curCar = this.vehicles.find(car => car.carNumber === carNumber);
            result = `${curCar.carModel} == ${curCar.carNumber} - ${curCar.payed == true ? 'Has payed' : 'Not payed'}`;
        }

        return result.trim();
    }
}

const parking = new Parking(12);

console.log(parking.addCar('Volvo t600', 'TX3691CA'));
console.log(parking.getStatistics());

console.log(parking.pay('TX3691CA'));
console.log(parking.removeCar('TX3691CA'));
console.log(parking.getStatistics());
