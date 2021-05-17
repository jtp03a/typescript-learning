//Flexible types

const importantDates: (Date | string )[] = []
importantDates.push('2030-10-10')
importantDates.push(new Date())

//Tuple - Array-like structure where each element represents some property of a record
const drink = { 
    color: 'brown',
    carbonated: true,
    sugar: 40
}

const drinkTuple: [string, boolean, number] = ['brown', true, 40]

drinkTuple[0] = 40

type Drink = [string, boolean, number]

const pepsi: Drink = ['red', false, 30]