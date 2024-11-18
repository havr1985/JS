class Car {
    constructor(model, maker, year, maxSpeed, engineVolume) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }


    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    info () {
        for (const item in this) {
            if (typeof this[item] !== 'function') {
                console.log(`${item} - ${this[item]}`);
            }
        }
    }

    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(this.maxSpeed);
    }

    changeYear(newValue) {
        this.year = newValue;
        console.log(this.year);
    }

    addDrive(newDrive) {
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