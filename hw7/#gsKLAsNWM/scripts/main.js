const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.customForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

arr.customForEach((item, index) => console.log(index, item));

Array.prototype.customFilter = function (callback) {
   const newArr = [];
   for (let i = 0; i < this.length; i++) {
       if (callback(this[i], i, this)) {
           newArr.push(this[i]);
       }
   }
   return newArr;
}

const filteredArr = arr.customFilter((item) => item < 5);
console.log(filteredArr);