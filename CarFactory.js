function solve(car) {
    const {model, power, color, carriage, wheelsize} = car;

    return {
        model,
        engine: getEngine(power),
        carriage: getCarriage(carriage, color),
        wheels: getWheels(wheelsize),
    }


    function getEngine(power) {
        let arr = [{ power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }];

        let temp = arr.find(p => p.power >= power);

        return temp;
    }

    function getCarriage(carriage, color) {
        return {
            type: carriage,
            color,
        }
    }

    function getWheels(wheels) {
        if (Math.floor(wheels) % 2 === 0) {
            wheels -= 1;
        }

        wheels = Math.floor(wheels);

        return [wheels, wheels, wheels, wheels];
    }

}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheels: 14
}))
