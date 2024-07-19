// function name(var1, var2, ...params) {...params is rest operator
//     console.log(...params);
// }
// name(20, 43, 66, 78)

/*
Closure:
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state
(the lexical environment). 
In other words, a closure gives you access to an outer function's scope from an inner function.

JavaScript Hoisting:
refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes,
or imports to the top of their scope, prior to execution of the code. Hoisting is not a term normatively defined
in the ECMAScript specification.
*/
//  hoisting produce no error
// console.log(func(44));
// function func(params) {
//     return params + 1
// }

//  hoisting produce error
// console.log(var1(33))
// const var1 = function funcTwo(params) {
//     return params + 1
// }


// this : refer current context

// let obj1 = {
//     name: 'John',
//     age: 20,
//     print: function () {
//         console.log(this.name);
//         console.log(this);
//     }
// }
// console.log(this);
// console.log(obj1.print());

// const func1 = () => {
//     console.log(this);
// }
// func1()

// const func2 = () => ({ name: "haider" })
// console.log(func2());

// Immidiatly Invoked Function Expression 
// to imidiatly inveke a function and prevent function from globle pollution 

// named IIFE 
// (function func3() {
//     console.log("Imidiatly invoked");
// })();
// ((name) => {
//     console.log("Imidiatly invoked");
// })("Saran");

// Falsy values 
// false, 0, -0, BigInt 0n, null, undefined, NaN

// truthy values
// true, "0", "false", "null", "undefined", "", [], {}, 1

// nullish coalescing operator: this just made for "null & undefined"
const var1 = 10 ?? 30;
const var2 = null ?? 30;

// console.log(var1);
// console.log(var2);

let jsonData = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "images/the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
    {
        "author": "Unknown",
        "country": "Sumer and Akkadian Empire",
        "imageLink": "images/the-epic-of-gilgamesh.jpg",
        "language": "Akkadian",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "title": "The Epic Of Gilgamesh",
        "year": -1700
    },
    {
        "author": "Unknown",
        "country": "Achaemenid Empire",
        "imageLink": "images/the-book-of-job.jpg",
        "language": "Hebrew",
        "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
        "pages": 176,
        "title": "The Book Of Job",
        "year": -600
    },
    {
        "author": "Unknown",
        "country": "India/Iran/Iraq/Egypt/Tajikistan",
        "imageLink": "images/one-thousand-and-one-nights.jpg",
        "language": "Arabic",
        "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
        "pages": 288,
        "title": "One Thousand and One Nights",
        "year": 1200
    },
    {
        "author": "Unknown",
        "country": "Iceland",
        "imageLink": "images/njals-saga.jpg",
        "language": "Old Norse",
        "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
        "pages": 384,
        "title": "Nj\u00e1l's Saga",
        "year": 1350
    },
]

// const filterData = jsonData.filter((obj) => obj.pages < 250)//filter
// console.log(filterData);


// map / function chaning 
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const storedData = myArray
    .map((num) => num * 2)
    .map((num) => num + 1)
    .filter((num) => num > 10)
// console.log(storedData);

// reduce function 

const yourArray = [1, 2, 3, 4, 5]

// yourArray.reduce((previousValue, currentValue, currentIndex, array) => {

//     console.log(previousValue, currentValue, currentIndex, array, "\n");
// }, 0)// previousValue = 0

const numberOfPages = jsonData.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.pages
}, 0)
console.log(numberOfPages, "\n");
