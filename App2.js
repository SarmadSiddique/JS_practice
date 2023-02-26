// for in and for of loop
// const array = ["fruits", 3, "apple", 4, "mango", 87, 56];
// for (const key of array) {
//     console.log(key)
// }

// for (const n in students) {
//     console.log(students[n])
// }
var students = [{
    name: "Mike",
    track: "track-a",
    achievements: 23,
    points: 400,
}]
students.forEach(myFunction);
function myFunction(item, index, arr) {
    console.log(item)
    document.getElementById("sarmad").innerHTML = item.name + " " + " is a good guy";

}
// find and filter method in js 
const arry = [1, 2, 8, 6, 44, 140];
const newarr = arry.filter((elem) => {
    return elem > 5
})
console.log(newarr)