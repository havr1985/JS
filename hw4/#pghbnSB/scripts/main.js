function minNumberArr(array) {
    let min = array[0];
    for (const item of array) {
        if (item < min) {
            min = item;
        }
    }
    return min;
}

console.log(minNumberArr([4, 5, 99, -6, 0, 9]));

function minNumberArr2(array) {
    return Math.min(...array);
}

console.log(minNumberArr2([4, 5, 99, -6, 0, 9]));