// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let cinderellas = [
    new Cinderella('Marie', 28, 35),
    new Cinderella('Anna', 25, 36),
    new Cinderella('Julia', 22, 37),
    new Cinderella('Linda', 21, 38),
    new Cinderella('Sarah', 28, 39),
    new Cinderella('Clara', 29, 40),
    new Cinderella('Kylie', 21, 41),
    new Cinderella('Lora', 28, 42),
    new Cinderella('Beckie', 23, 34),
    new Cinderella('Donna', 28, 33),
]

const prince = new Prince('Orest', 34, 34);

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoeSize) {
        console.log(`${cinderella.name} is wife ${prince.name}`)
    }
}

const wife = cinderellas.find(cinderella => cinderella.footSize === prince.shoeSize);
console.log(`${wife.name} is wife ${prince.name}`);
