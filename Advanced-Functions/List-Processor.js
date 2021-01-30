function solve(input) {
    let area = [];

    let obj = {
        add: (input) => {
            area.push(input);
        },
        remove: (input) => {
            area = area.filter(el => el != input);
        },
        print: () => {
            console.log(area.join(','));
        },
    }

    input.forEach(el => {
        let tokens = el.split(' ');
        let command = tokens[0];
        let input = tokens[1];
        
        let func = obj[command];
        func(input);
    });
}

solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);