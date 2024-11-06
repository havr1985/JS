let a = +prompt('Введіть число а');
let b = +prompt('Введіть число b');

if (a > b) {
    console.log(`Максимальне число a=${a}`);
} else if (b > a) {
    console.log(`Максимальне число b=${b}`);
} else {
    console.log(`Числа a=${a} і b=${b} рівні`);
}

