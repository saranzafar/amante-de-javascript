const arr = new Array(1, 2, 3, 4)
console.log(arr);
arr.push(5)
arr.push(6)
// arr.unshift(10)//add value to start and shift other elements
// arr.pop()//remove last element
// arr.shift()// remove first element
// console.log(arr.includes(5))// check either 9 is include or not 
// const newArr = arr.join()//convert arr into string 
// console.log(arr);

// const newArr = arr.slice(1, 3)
// console.log("A : ", newArr);
// const spliceArr = arr.splice(1, 3)
// console.log("B : ", spliceArr);
// console.log("C : ", arr);

let arr1 = [1, 2, 3]
// const arr2 = [4
//     , 5, 6]
// arr1.push(arr2)
// console.log(arr1)

// arr1 = [1, 2, 3]
// const arr3 = arr1.concat(arr2)
// console.log(arr3)


const newArray = [...arr, ...arr1]
console.log(newArray);

const anotherArray = [1, 2, [3, 4, [5, 6], [7, 8]], 9, 18]
const anothernewarrray = anotherArray.flat(Infinity)
console.log(anothernewarrray);

console.log(Array.isArray("212"));//check either given element is array or not
console.log(Array.from("212"));
console.log(Array.from({ key: "Value" }));//intresting

const score1 = 123
const score2 = 456
const score3 = 789

console.log(Array.of(score1, score2, score3))