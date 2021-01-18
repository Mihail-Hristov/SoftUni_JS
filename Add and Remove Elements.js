function solve(arr) {
    const newArr = [];

    for (let i = 1; i <= arr.length; i++) {
        let command = arr[i-1];

        switch(command) {
            case 'add':
                newArr[newArr.length] = i;
            break;
            case 'remove':
                newArr.pop();
            break
        }
    }
    if (newArr.length == 0) {
        console.log('Empty')
    }else {
        for (const item of newArr) {
            console.log(item)
        }
    }
}

solve(['remove',
'remove',
'remove']);