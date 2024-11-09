function areaRectangle(width, height) {
    if ( width <= 0  || height <= 0 ) {
        return 'Width and height must be > 0'
    }
    return width * height;
}

console.log(areaRectangle(5, 4));
console.log(areaRectangle(5, 0));
