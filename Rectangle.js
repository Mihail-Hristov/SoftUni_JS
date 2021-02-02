function rectangle(width, height, color) {
    return obj = {
        width: width,
        height: height,
        color: color,
        calcArea: function() {
            return width * height;
        }
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

