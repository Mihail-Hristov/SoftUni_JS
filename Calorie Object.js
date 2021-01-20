function solve(arr) {
    const myObj = {};

    function returnKey(name) {
        return name;
    }

    for (let i = 0; i < arr.length - 1; i += 2) {
        let cur = arr[i];
        myObj.arr[i] = arr[i + 1];
    }

    console.log(myObj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);