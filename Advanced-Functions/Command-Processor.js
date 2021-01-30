function solution() {
    let text = '';

    return {
        append,
        removeStart,
        removeEnd,
        print,
    }

    function append(input) {
        text += input;
    }

    function removeStart(n) {
        text = text.substring(n);
    }

    function removeEnd(n) {
        text = text.substring(0, text.length - n);
    }

    function print() {
        console.log(text);
    }
}

let firstZeroTest = solution();
firstZeroTest.append('123');
firstZeroTest.append('45');
firstZeroTest.removeStart(2);
firstZeroTest.removeEnd(1);

firstZeroTest.print();