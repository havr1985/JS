function swap(arr, index1, index2) {
    if (index1 >= arr.length || index2 >= arr.length || index1 < 0 || index2 < 0) {
        return false;
    }
    const item = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = item;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));