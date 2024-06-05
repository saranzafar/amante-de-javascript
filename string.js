const str1 = "this is string  "
const str2 = new String("This is 2nd string")

// console.log(str1);
// console.log(str2);

// console.log(str2.__proto__);
// console.log(str1.charAt(2));
// console.log(str1.indexOf("i"));
// console.log(str1.substring(2, 6));
// console.log(str1.slice(-8, -4));
// console.log(str1.trim());

// const url = "https://saran%20zafar.github.io"
// console.log(url);
// console.log(url.replace("%20", "-"));
// console.log(url.includes("Saran"));
// console.log(str1.split(" "));

const arr = ["12", " ", 343, " 545", { a: "ghh" }]
console.log("".concat(...arr));

let myData = new Date()
console.log(myData.toString());
