function solve(input) {
    const objects = [];

    const commands = {
        create: (...name) => {
            if (name[1] === undefined) {
                const obj = {
                    name: name[0],
                }
                objects.push(obj);
            }else {
                const obj = {
                    name: name[0],
                }
                objects.push(obj);
            }

        },
        set: (name, key, value) => {
            objects.find(o => o.name === name)[key] = value;
        },
        print: (name) => {
            const obj = objects.find(o => o.name === name);
            let result = [];
            for (const key in obj) {
                if (key != 'name') {
                    result.push(`${key}:${obj[key]}`);
                }
            }
            console.log(result.join(', '))
        },
    }


    input.forEach(el => {
        let tokens = el.split(' ');
        let command = tokens[0];
        let name = tokens[1];
        let key = tokens[2];
        let value = tokens[3];

        commands[command](name, key, value);
    });
}

solve(['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2']);