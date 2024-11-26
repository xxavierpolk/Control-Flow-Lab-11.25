// Declaring the variables //

const PI = 3.1415;
const radius = 5
const area = PI * radius * radius
const numberofPlants = 20
const numberofWeeks = 3

const week1 = numberofPlants * 2
const week2 = week1 * 2 
const week3 = week2 * 2

const minSpace = 0.8
const maxSpace = area / minSpace
console.log(maxSpace);

if (0.8 >= maxSpace) {
    console.log("should be pruned" )

} else if (0.5 >= maxSpace && 0.8 >+ maxSpace) {
    console.log("Needs to be monitored")

} else {
    console.log("plant more")
}

// Part 2 

const expandedPlants = 100
const expandedWeeks = 10

if (radius * expandedWeeks) {
        console.log("New Radius of Expanded Garden")
    }










// for ( let i = 10; i > 0; i--) {
//     console.log("run this up", i)
// }
// for ( let i = 1; i <= 10; i += 2) {
//     console.log("run this up", i)
// }