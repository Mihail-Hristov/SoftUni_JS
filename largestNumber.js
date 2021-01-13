function findLargestNumber(first, secnod, third) {
    let result;

    if (first > secnod && first > third) {
        result = first;
    }else if (secnod > first && secnod > third) {
        result = secnod;
    }else if (third > first && third > secnod) {
        result = third;
    }

    console.log(`The largest number is ${result}.`);
}

findLargestNumber(5, -3, 16);
findLargestNumber(-3, -5, -22.5);