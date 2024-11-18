// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, maker, year, maxSpeed, engineVolume) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    };
    
    this.info = function () {
        for (const item in this) {
            if (typeof this[item] !== 'function') {
                console.log(`${item} - ${this[item]}`);
            }
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(this.maxSpeed);
    }

    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(this.year);
    }

    this.addDrive = function (newDrive) {
        this.driver = newDrive;
        console.log(this.driver);
    }
}

const car = new Car('Volvo', 'VOLVO', 1985, 250, 80);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(50);
car.changeYear(1991);
car.addDrive({
    name: 'John',
    surname: 'Doe'
})