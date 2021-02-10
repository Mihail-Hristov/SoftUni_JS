function solve() {
    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
        }

        changeUnits(newUnits) {
            this.units = newUnits;
        }

        changeParam(param) {
            switch (this.units) {
                case 'm':
                    param /= 10
                    break;
                case 'cm':
                    break;
                case 'mm':
                    param *= 10;
                    break;
            }
            return param;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this._radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }

        get radius() {
            return this.changeParam(this._radius);
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get area() {
            return this.width * this.height;
        }

        get width() {
            return this.changeParam(this._width);
        }

        get height() {
            return this.changeParam(this._height);
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }


    return {
        Figure,
        Circle,
        Rectangle
    }
}
