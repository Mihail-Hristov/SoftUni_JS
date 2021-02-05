function  solve(arr, criterio) {
    
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    
    let result = [];

    for (const element of arr) {
        let tokens = element.split('|');
        let destination = tokens[0];
        let price = parseFloat(tokens[1]);
        let status = tokens[2];

        let currentTicket = new Ticket(destination, price, status);
        result.push(currentTicket);
    }

    if (criterio == 'price') {
        result.sort((a, b) => a[criterio] - b[criterio]);
    }else {
    result.sort((a, b) => a[criterio].localeCompare(b[criterio]));
    }
    return result

}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'));