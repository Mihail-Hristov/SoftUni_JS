(function  solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function(n) {
        return this.slice(n);
    };

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    };

    Array.prototype.sum = function () {
        return this.reduce((sum, el) => sum + el, 0);
    };

    Array.prototype.average = function () {
        return this.reduce((sum, el) => sum + el, 0) / this.length;
    };

} ());

let arr = [1, 2, 3];

console.log(arr.average());