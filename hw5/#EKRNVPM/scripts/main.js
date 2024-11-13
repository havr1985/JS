const sum = (array) => {
    let total = 0;
    for (const items of array) {
        total += items;
    }
    return total
}

console.log(sum([1, 2, 10]));