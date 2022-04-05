//Decorators
//To use decorators in typescript we need to uncomment the following line "experimentalDecorators": true
//in tsconfig.json file.

//A decorator is a function that executes a logic in other function.

function SelfDriving(constructorFunctions: Function) {
    constructorFunctions.prototype.selfDriving = "Drove by AI";
}

function Wheels(numberOfWheels: number) {
    return function (constructorFunction: Function) {
        constructorFunction.prototype.wheels = numberOfWheels;
    };
}

@SelfDriving
@Wheels(4)
class Car {
    private brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }
}

const nissan: Car = new Car("Nissan");
console.log(nissan);
console.log(nissan.selfDriving);
console.log(nissan.wheels);
//The editor doesn't know about the new properties added by the decorators but it exists.
