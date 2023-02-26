// let number =  5
// let name="sarmad";
// console.log(number);
// document.getElementById("num").innerHTML=number+ " is the luckiest number of " +name;
// const can never be reassigned and initialize
// reassigned to const--
// const value = 123;
// value = 344
// console.log(value);
// initializing through const
// const greeting;
// greeting= "hello";
// console.log(greeting);
// const array  =["mango",2,null,"banana"];
// array.push("orange","apple");
// console.log(array);
// let text = "How are you doing today?";
// functions in JavaScrip ----
// let val;
// function greet(){
//     return 54;
// }
// val = greet();
// console.log(val,"hey i am a simple function")
// anonymous functions---
// const square = function(num=100){
//     return num*num
// }
// console.log(square());
// IIFEs (Immediately invoked function execution)----

(function () {
    console.log("hello IIFE")
})();
let person = {
    firstName: 'sarmad',
    lastName: 'Doe'
};

(function () {
    console.log(person.firstName + ' ' + person.lastName);
})(person);
// loops------
// Traditional for loop---
const array = ["fruits", 3, "apple", 4, "mango", 87, 56];
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
// for in loop---
for (const key in array) {
    console.log(key, "for in loop")
}
// iterate Strings by using for in loop----
// var intro = ["My Name is Sarmad"]
// intro.push("siddique")
// for (const key in intro) {
//     console.log(intro[key]);
// }
// for of loops----
// for (const key of array) {
//     console.log(key,"for of loop")
// }
// map methods ----
// it iterate as well as perform some operations on the array---
// binary numbers of array
// const numbers = [10, 30, 70, 411, 10];
// const output = numbers.map((x) => {
//     console.log(x)
//     return x.toString(2)
// })
// console.log(output)
// filter method--- filter array from an array based on some logics
// const arr=[1,2,3,4,5,6,7,8];
// const output=arr.filter((isGreater5)=>{
//     return isGreater5>5
// })
// console.log(output);
// console.log(arr."original array")
// forEach , map and filter difference
var students = [{
    name: "Mike",
    track: "track-a",
    achievements: 23,
    points: 400,
},
{
    name: "james",
    track: "track-a",
    achievements: 2,
    points: 21,
},
]

// const { func } = require("prop-types");


// const { func } = require("prop-types")

let val = students.forEach(myFunction);
function myFunction(item, index, arr) {
    console.log(item.name)
    console.log(item.track)
    console.log(item.achievements)
    console.log(item.points)
}
console.log(val)
// console.log(students)
// sorting array of objects on different logics----
// var date1 = new Date("2001-03-25");
// var date2 = new Date("2002-03-28");
// var date3 = new Date("2004-06-10");
// var date4 = new Date("2003-12-13");

// const user = [
//     { name: "sarmad", age: 21, subject: "IT", date: date1 },
//     { name: "talha", age: 18, subject: "English", date: date2 },
//     { name: "saad", age: 10, subject: "Urdu", date: date3 },
//     { name: "junaid", age: 29, subject: "DVM", date: date4 },
// ]

// const out = user.find((val) => {
//     if (val.age == 18) {
//         return val.age

//     }
// })
// console.log(out)
// console.log(user, "original array")

// const output = user.sort(compare);

// function compare(a, b) {
//   if(a.date<b.date){
//     return -1
//   }else if(a.date>b.date){
//     return 1
//   }
//   else{
//     return 0
//   }
// }
// console.log(output);

// sort method array----
// sort by looking first alphabet of straing element in acending order
// const name=["sarmad","saad","talha" ,"junaid","Aman"];
// const alph=[98,34,49,23,87,91 ,11 ,9,4,6,2];

// name.push("mushtaq");
// name.sort();
// const compare=(a,b)=>{
// return a-b
// }
// const newalph= alph.sort(compare)
// console.log(name,newalph ,"sort method");
// they are laughing at me i am tired of coding now i receive many disappointments from this field
// Asynchronous Javascript---
console.log("Asynchronous JAVASCRtrueIPT")
// ajax and text file data---
document.getElementById('btn').addEventListener('click', data)
function data() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'server.txt', true);

    xhr.onload = function aa() {
        // console.log(this)
        // function inner() {
        //     if (this.status === 200) {
        //         console.log('DONE: ', this.responseText);
        //         console.log(this.status)
        //     }
        // }
        // inner()
        const inner = () => {
            if (this.status === 200) {
                document.getElementById("data").innerHTML = this.responseText;

                console.log('DONE: ', this.responseText);
                console.log(this.status)
            }
        }
        inner()

    };

    xhr.send();
}
// ajax and json ----
document.getElementById('jsondata').addEventListener('click', Jdata)
function Jdata() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'server.json', true);
    xhr.onload = function bb() {
        const inner = () => {
            if (this.status === 200) {
                let output = JSON.parse(this.responseText);
                document.getElementById("data2").innerHTML = `
        <ul>
        <li>${output.id}</li>
        <li>${output.name}</li>
        <li>${output.class}</li>
        <li>${output.subject}</li>
    </ul>
                    `;

                console.log('DONE: ', this.responseText);
                console.log(this.status)
            }
        }
        inner()

    };

    xhr.send();

}
// ajax and external Api----
document.getElementById('jokes').addEventListener('click', getJokes)
function getJokes(e) {
    e.preventDefault();
    const val = document.getElementById("input").value
    console.log(val)
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/${val}`, true);

    xhr.onload = function cc() {

        const inner = () => {
            if (this.status === 200) {
                let pokemon = JSON.parse(this.responseText)
                console.log('DONE: ', pokemon);
                document.getElementById("data2").innerHTML = `
                
        <ul>
        <li>${pokemon.name}</li>
        <li>${pokemon.moves[1].move.name}</li>
        <li>my height is ${pokemon.height} </li >
    </ul >
            `;
            }
        }
        inner()

    };
    xhr.send();
}
// callback functions---
// creating and getting data asynchronously---
const admStudent = [
    {
        reg_no: 8347872,
        stu_name: "Jhon",
        stu_subject: "Python"
    },
    {
        reg_no: 4034999,
        stu_name: "Jack",
        stu_subject: "React"
    }
]

const create_data = (new_data, callback) => {
    setTimeout(() => {
        admStudent.push(new_data)
        console.log(admStudent)
        callback()
    }, 3000)
}

const get_data = () => {
    setTimeout(() => {
        var output = admStudent.forEach(func)
        function func(adm) {
            document.getElementById("admissions").innerHTML = output += `


<ul>
    <li>${adm.stu_name}</li>
    <li>${adm.reg_no}</li>
    <li>${adm.stu_subject}</li>

</ul>
        `
        }
        console.log("data has been retrieved")
    }, 1000)
}
create_data({
    reg_no: 999884111,
    stu_name: "Jimmy",
    stu_subject: "Angular"
}, get_data);

// promises ----
// const create_data = (new_data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             admStudent.push(new_data)
//             console.log(admStudent)
//             let error = false;
//             if (!error) {

//                 resolve(console.log("promise has been fullfiled"));
//             }
//             else {
//                 reject(console.log("sorry promised not fullfiled"));
//             }


//         }, 5000)
//     })

// }
// const get_data = () => {
//     setTimeout(() => {
//         var output = admStudent.forEach(func)
//         function func(adm) {
//             document.getElementById("admissions").innerHTML = output += `


// <ul>
//     <li>${adm.stu_name}</li>
//     <li>${adm.reg_no}</li>
//     <li>${adm.stu_subject}</li>

// </ul>
//         `
//         }
//         console.log("data has been retrieved")
//     }, 3000)
// }
// create_data({
//     reg_no: 999884111,
//     stu_name: "Jimmy",
//     stu_subject: "Angular"
// }).then(() => {
//     get_data();
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// });
// // async await---
document.getElementById('fetch').addEventListener('click', fetchMovies)

async function fetchMovies() {
    setTimeout(() => {
        fetch('server.txt').then(res => {
            return res.text();
        }).then((data) => {
            console.log(data)
        });
    }, 1000)

}

const date = new Date();
console.log(date);
