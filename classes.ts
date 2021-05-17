//Clases - blueprint to create an object with some fields (values) and methods (funcitons) to represent a thing

class Vehicle {
    drive(): void {
        console.log('vroom')
    }
 }

 const vehicle = new Vehicle()
 vehicle.drive()