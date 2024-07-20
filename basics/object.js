//1. object litrels 

const symb = Symbol("key1")
const obj = {
    name: 'sagar',
    age: 20,
    address: 'pune',
    "address 2": 'kashmir',
    [symb]: "Value"
}

// console.log(obj.name);
// console.log(obj["address 2"]);
// console.log(obj[symb]);

obj.name = "Saran"
// console.log(obj.name);
// Object.freeze(obj)// freez the object
// obj.name = "Ali"
// console.log(obj.name);

obj.greeting = function () {
    console.log("Hi!");
}

obj.greeting1 = function () {
    console.log(`This is function 2 ${this.name}`);
}
// console.log("Function says ", obj.greeting());
// console.log("Function says ", obj.greeting1());

// 2.  singleton(constructurs)
// Object.create() 
const tinderObj = new Object()

tinderObj.name = "saran";
tinderObj.age = 20;
tinderObj.address = "pune";

const newTinderObj = {
    email: "saranzafar736@gmail.com",
    password: "1234567890",
    nestedObj: {
        name: "mohit",
        age: 20
    }
}

// console.log("Newobjttinder: ",newTinderObj.nestedObj.name);

const obj1 = { a: "1", b: "2" }
const obj2 = { c: "3", d: "4" }
const obj3 = { e: "5", f: "6" }


// const obj4 = { ...obj1, ...obj2 }
const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);
// console.log(Object.keys(obj4));
// console.log(Object.values(obj4));
// console.log(Object.entries(obj4));
// console.log(obj4.hasOwnProperty("g"));// check either "g" key available or not

const course = {
    name: "javascript",
    duration: "3 months",
    fees: 999
}

const { name, duration: d } = course
console.log(name, d);

// githubapi: https://api.github.com/users/saranzafar

const apiObj = [
    {
        "login": "saranzafar",
        "id": 131322772,
        "node_id": "U_kgDOB9PTlA",
    },
    {
        "type": "User",
        "site_admin": false,
        "name": "saran zafar",
        "company": null,
    },
]
console.log(apiObj[1].id);