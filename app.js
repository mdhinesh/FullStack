let car = {
  name: "C class",
  manufacturer: "Mercedes",
  printt: () => {
    console.log(`${car.name} was created by ${car.manufacturer}`)
  }
} 

console.log(car)

console.log(car.hasOwnProperty('name'))

// console.log(Object.values(car))
// console.log(Object.keys(car))
