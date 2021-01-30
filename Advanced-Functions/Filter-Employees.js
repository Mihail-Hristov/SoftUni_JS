function solve(input, criteria) {
    const data = JSON.parse(input);
    let result = [];

    if (criteria === 'all') {
        for (const index in data) {
            result.push(`${index}. ${data[index].first_name} ${data[index].last_name} - ${data[index].email}`)
        }
        
    }else {
        let tokens = criteria.split('-');
        let key = tokens[0];
        let value = tokens[1];
        const final = data.filter(p => p[key] == value);

   for (const index in final) {
            result.push(`${index}. ${final[index].first_name} ${final[index].last_name} - ${final[index].email}`);
        }

       // result = final.reduce((acc, i) => acc += ' ' + (`${i.id - 1}. ${i.first_name} ${i.last_name} - ${i.email}`), [])
    }
    
    
    return result.join('\n');
}

console.log(solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'gender-Female'));

    //gender-Female'