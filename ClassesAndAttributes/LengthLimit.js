class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        (this.innerLength - length < 0) ? this.innerLength = 0 : this.innerLength -= length;
    }

    toString() {
        let result;

        if (this.innerString.length <= this.innerLength) {
            result = this.innerString;
        }else if (this.innerLength == 0){
            result = '...';
        } else {
            result = this.innerString.substring(0, this.innerString.length - this.innerLength);
            result += '...';
        }

        return result;
    }
}

let test = new Stringer('Test', 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test

