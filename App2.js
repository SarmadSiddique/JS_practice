// import { object } from "./node_modules/prop-types/index.js";
// import { object } from "prop-types";



// Use the imported object here

// Use the imported object here



// const let var difference ---------------
// function hello1() {
//     const name = "sarmad siddique"
//     // const greeting = "salam";
//     let greeting2 = "WSALAM"
//     {


// import { object } from "prop-types";

//         var time = 3;
//         const greeting = "hi";
//         console.log(`${greeting} my name is ${name}`)

//     }
//     // console.log(`${greeting} my name is sarmad`)
//     if (time > 2) {
//         // console.log(greeting)
//         console.log(greeting2)


//     }
// }
// hello1();
// arrow function lexical this-------
// const uni = {
//     name: "GCUF",
//     dep: 23,
//     rooms: 200,
//     show: function () {
//         setTimeout(() => {
//             console.log(`uni has ${this.rooms} rooms`)
//         }, 2000)
//     }
// }

// console.log(uni.show())
// for in and for of loop------------
// const array = ["fruits", 3, "apple", 4, "mango", 87, 56];
// for (const key of array) {
//     console.log(key)
// }

// for (const n in students) {
//     console.log(students[n])
// }
// var students = [{
//     name: "Mike",
//     track: "track-a",
//     achievements: 23,
//     points: 400,
// }]
// students.forEach(myFunction);
// function myFunction(item, index, arr) {
//     console.log(item)
//     document.getElementById("sarmad").innerHTML = item.name + " " + " is a good guy";

// }
// // find and filter method in js
// const arry = [1, 2, 8, 6, 44, 140];
// const newarr = arry.filter((elem) => {
//     return elem > 5
// })
// console.log(newarr)
//  for of loop on array----
// const names = ["sarmad", "saad", "talha", "junaid", "snda"];
// for (const a of names) {
//     console.log(a);
// }
// for in loop for objects---
// const obj = {
//     fname: "talal",
//     lname: "ahmed",
//     adress: "RYK",
//     institue: "GCUS"
// }
// for (const a in obj) {
//     console.log(obj[a]);
// }
// hoisting--
// "use strict";
// a = 3
// console.log(a);
// var a;
// function any() {
//     var a = 24;
//     var b = "HELLO"
//     var c = a - b
//     console.log(typeof (c))
// }
// console.log(any(), "function")
// anonymous functions
// we can pass arguments in anonymous functions and call them later bcz they are stored in variables---
// let multiply = function (x, y) {
//     return x * y;
// };
// console.log(multiply(8, 7));
/* IIFE on the other hand in IIEF they are called once immediately bcz they are not stored in variables
we can not pass arguments to them */
(function () {
    console.log('Immediately Invoked Function Expression ')
})();
// practical interview questions---
// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i <= 10; i++) {
//     setTimeout(() => console.log(b[i]), 1000);
// }
// function func1() {
//     x = 12;
//     setTimeout(() => {
//         console.log(x);
//         console.log(y)
//     }, 3000)


//     var x;
//     let y = 3;
// }
// func1();
// function func2() {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(() => console.log(i), 2000);
//     }
// }
// func2();
// closure question
// var scope = "global scope";
// function check() {
//     var scope = "local scope";
//     function f() {
//         console.log(scope)
//     }
//     return f();
// }
// console.log(check());
// check();
// logics building problems -----
// var numbers = [2, 4, 6, 10, 10];
// var sum = 0;
// for (let index = 0; index < numbers.length; index++) {
//     sum += numbers[index];
// }
// console.log(sum);




// function countOccurance(fruits) {

//     for (let index = 0; index < fruits.length; index++) {
//         const element_ = fruits[index];
//         console.log(element_)
//     }
//     const newarr = [];

//     const newobj = Object.assign({}, [fruits[2], fruits[3], fruits[5]])
//     // newarr.push(fruits[2], fruits[3], fruits[5])
//     console.log(newobj)


// }
// const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'banana', 'apple'];
// countOccurance(fruits);
// function countOccurrences(arr) {
//     const occurrences = {};

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];

//         if (occurrences[element]) {
//             occurrences[element]++;
//         } else {
//             occurrences[element] = 1;
//         }
//     }

//     return occurrences;
// }

// const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'banana', 'apple'];
// const occurrences = countOccurrences(fruits);
// console.log(occurrences);
// find even numbers--

// function findEvenNumbers(arr) {
//     const evenNumbers = arr.filter(num => num % 2 === 0);
//     return evenNumbers;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = findEvenNumbers(numbers);
// console.log(evenNumbers);'

// const findDuplicates = (arr) => {
//     const dup = arr.filter((item, index) => arr.indexOf(item) !== index)
//     return dup;
// }
// const items = [1, 2, 3, 4, 2, 5, 6, 3, 4, 7, 8, 7];
// const duplication = findDuplicates(items)
// console.log(duplication)
// const removeDuplicate = (numbers) => {
//     const removeDup = numbers.filter((item, index) => {

//         return numbers.indexOf(item) === index
//     })
//     console.log(removeDup)

// }
// const numbers = [1, 2, 3, 4, 2, 5, 6, 3, 4, 8, 7];
// removeDuplicate(numbers);
// sum two arrays but on condition---
// const sum = () => {
//     const arr1 = [1, 2, 3, 4];
//     const arr2 = [5, 6, 7, 8];
//     let newarr
//     newarr = []
//     // newarr = arr1[2] + arr2[1]
//     for (let index = 0; index < arr1.length; index++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (index === j ) {
//                 newarr.push(arr1[index] + arr2[j])
//             }
//         }
//     }
//     console.log(newarr)
// }
// sum()
// find missing number in an array ---
// const findMissingone = (numbers) => {
//     let i = 1;
//     for (let index = 0; index < numbers.length; index++) {
//         const element = numbers[index];
//         if (element !== i) {
//             console.log(i);
//             i++

//         }
//         i++
//     }
// }
// const numbers = [1, 2, 3, 5, 7, 8, 10];
// findMissingone(numbers);
// reverse array---
// const reverseArray = (numbers) => {
//     let reverseArray = [];
//     for (let i = numbers.length - 1; i >= 0; i--) {
//         var element = numbers[i];
//         reverseArray.push(element)
//     }
//     return reverseArray
// }
// const numbers = [1, 2, 3, 4, 5];
// const reversedNumbers = reverseArray(numbers);
// console.log(reversedNumbers);
// leetcode questions-------------------
// (function (n) {
//     console.log(n,"nn")

//   })(10);