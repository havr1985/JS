function sortNums(array, direction) {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    }
    if (direction === 'descending') {
        return array.sort((a, b) => b - a);
    }
}

console.log(sortNums([10,8,-7,55,987,-1011,0,1050,0], 'ascending'));
console.log(sortNums([10,8,-7,55,987,-1011,0,1050,0], 'descending'));
