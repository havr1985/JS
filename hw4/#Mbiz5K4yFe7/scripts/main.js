function areaCylinder(radius, height) {
    if (radius <= 0 || height <= 0) {
        return 'Radius and height must be greater than 0';
    }
    return 2 * Math.PI * radius * (radius + height);
}

console.log(areaCylinder(5, 2));
console.log(areaCylinder(5, -1));
