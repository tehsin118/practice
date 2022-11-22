//  Premitive DataTypes
let num1 = 7;
let num2 = num1;

console.log("value of num1 is ", num1);
console.log("value of num2 is ", num2);
num1++;
console.log("After Increment");
console.log("value of num1 is ", num1);
console.log("value of num2 is ", num2);

// Reference Types

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array 1 ", array2);
console.log("array 2 ", array2);
array1.push("itemm3");
console.log("After Increment");
console.log("array 1 ", array2);
console.log("array 2 ", array2);
