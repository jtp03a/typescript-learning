//Clases - blueprint to create an object with some fields (values) and methods (funcitons) to represent a thing

class Vehicle {
    //lots of repetition of the word color
    // color: string

    // constructor(color: string) {
    //     this.color = color
    // }
    //more sucinct
    constructor(public color:string, public horsepower: number) {}

    protected honk(): void {
        console.log('beep')
    }
 }

 class Car extends Vehicle {
    constructor(public wheels: number, color: string, horsepower: number) {super(color, horsepower)}
    
    private drive(): void {
        console.log('zoom zoom')
    }

    startDrivingProcess(): void {
        this.drive()
        this.honk()
    }
 }

 const vehicle = new Vehicle('green', 500)
 console.log(vehicle.color)
 console.log(vehicle.horsepower)
//  vehicle.drive()
//  vehicle.honk()

 const car = new Car(4, 'purple', 600)
 car.startDrivingProcess()
 console.log(car.color)
 console.log(car.horsepower)
 console.log(car.wheels)
//  car.honk()

 //class modifies
 //public - this method can be called any where, any time
 //private  - this method can only be called by other methods in this class
 //protected - this method can be called by other methods in this class, or by other methods in child classes

