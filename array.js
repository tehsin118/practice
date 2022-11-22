//----------------------------- Push method
// let fruits = ["apple", "grapes", "mango"];
// console.log(fruits);
// let newFruit = prompt("Enter fruit name");
// fruits.push("banana");
// console.log(fruits);

// -----------------------------Pop Method --- Remove and return element from end

// let myfruit = fruits.pop();
// console.log(fruits);
// console.log(myfruit);

// -----------------------------unShift Method---Add element in start
// fruits.unshift("cherry");
// console.log(fruits);

// -----------------------------unShift Method---Remove and return element from Start
// let removedFruit = fruits.shift();
// console.log(fruits);
// console.log(fruits);

// push and Pops are fast

// Clone Array

// console.log("------Clone array");

// let array3 = ["item1", "item2"];
// let array4 = ["item1", "item2"];         xxxxxx
// let array4 = array3.slice(0);       //Method 1 to make clone
// let array4 = array3.slice(0).concat(["item4", "item5"]); //to add extra data

// let array4 = [...array3, "item3", "item4"]; //Spread opt
// console.log(array3 === array4);
// array3.push("item3");
// console.log(array3);
// console.log(array4);

// ------------Loops in array

// const fruits = ["apple", "grapes", "mango", "banana"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// ------------------------Array Destructuring

const myArr = ["val1", "val2"];

// let var1 = myArr[0];
// let var2 = myArr[1];

let [var1, var2] = myArr;
console.log(var1, var2);
