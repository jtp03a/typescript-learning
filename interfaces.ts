//interface - Creates a new type, describing the property names and value types of an object

//no interface
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
}

const printVehicle = (vehicle: { name: string; year: number; broken: boolean}): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken: ${vehicle.broken}`)
}

printVehicle(oldCivic)

//improve with interface
interface Reportable {
    // name: string;
    // year: Date;
    // broken: boolean;
    summary(): string;
}

const printItem = (item: Reportable): void => {
    console.log(item.summary())
}

const badCivic = {
    name: 'test',
    year: new Date(),
    broken: false,
    summary(): string {
        return `Name: ${this.name}`
    }
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has: ${this.sugar} grams of sugar`
    }
}

//No good doesnt match interface
printItem(badCivic)
printItem(drink)