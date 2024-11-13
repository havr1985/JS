const areaCircle = (r) => {
    if (r <= 0 ) {
        return 'Radius must have > 0';
    }
    return Math.PI * Math.pow(r, 2);
}

console.log(areaCircle(5));
console.log(areaCircle(-1));