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

const func2 = () => ({ name: "haider" })
console.log(func2());

// Immidiatly Invoked Function Expression 
// to imidiatly inveke a function and prevent function from globle pollution 

// named IIFE 
(function func3() {
    console.log("Imidiatly invoked");
})();
((name) => {
    console.log("Imidiatly invoked");
})("Saran");



