(function solve() {
    String.prototype.ensureStart = function (str) {
        let result;
        let tokens = this.split(' ');
        if (tokens[0] !== str.trim()) {
            result = str + this;
        } else {
            result = this;
        }

        return result.toString();
    }

    String.prototype.ensureEnd = function (str) {
        let result;
        let tokens = this.split(' ');
        if (tokens[tokens.length - 1] !== str.trim()) {
            result = this + str;
        } else {
            result = this.toString();
        }

        return result;
    }

    String.prototype.isEmpty = function () {
        let result;
        if (this.length == 0) {
            result = true;
        } else {
            result = false;
        }

        return result;
    }

    String.prototype.truncate = function (n) {
        let result = '';
        if (this.length < n) {
            result = this;
        } else {
            let tokens = this.split(' ');
            if (tokens.length > 1) {
                result = trans(tokens, n);
            } else {
                if (n < 4) {
                    for (let i = 0; i < n; i++) {
                        result += '.';
                    }
                } else {
                    result = this.slice(0, n - 3);
                    result += '...';
                }
            }
        }

        function trans(tok, count) {
            let result = '';

            if (result.length > count) {
                break;
            }

            result += result.trans(tok, count);

            return result;
        }

        return result.toString();
    }

    String.format = function (string, ...params) {
        let regex = /{[0-9]}+/g;
        let match;

        for (let i = 0; i < params.length; i++) {
            match = regex.exec(string)
            if (match == null) {
                break;
            } else {
                string = string.replace(match[0], params[i]);
            }
        }

        return string;
    }

}());

var testString = 'quick brown fox jumps over the lazy dog';
var answer = testString.ensureStart('the ');
console.log(answer);
answer = answer.ensureStart('the ');
console.log(answer);
