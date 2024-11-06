let day = +prompt('Введіть число від 1 до 31');

if (day < 1 || day > 31) {
    console.log('Число не коректне!');
} else if (day >= 1 && day <= 10) {
    console.log('Перша декада місяця');
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада місяця');
} else {
    console.log('Третя декада місяця');
}