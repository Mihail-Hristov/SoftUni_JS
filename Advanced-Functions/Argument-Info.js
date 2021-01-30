function solve() {
    let map = new Map();

    const statistic = {};

    for (const element of arguments) {
        let type = typeof element;
        
        if (map.get(type) === undefined) {
            map.set(type, []);
        }
        map.get(type).push(element);
        console.log(`${type}: ${element}`)
    }

    //let sortedMap = map.sorted((a, b) => b.value.length - a.value.length);
    let sortedMap = new Map([...map.entries()].sort((a, b) => b[1].length - a[1].length));
    for (const [key, value] of sortedMap) {
       console.log(`${key} = ${value.length}`)
    }
    
}

solve(42, 'cat', 15, 'kitten', 'tomcat');