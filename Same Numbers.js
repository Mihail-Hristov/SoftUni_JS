function solve(number) {
    let check = true;
    let t = String(number);
    let sum = Number(t.charAt(0));
    

    for (let i = 1; i < t.length; i++) {
        if (t.charAt(i) === t.charAt(i - 1)) {
        }else {
            check = false;
        }

        sum += Number(t.charAt(i));
    }
    console.log(check);
    console.log(sum);
}

solve(1234);