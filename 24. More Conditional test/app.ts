import { Console } from "console";

// condition (a) test with equality and unequality with string
let apple = "apple";

console.log("Is apple is equal to apple");
console.log(apple == "apple");

console.log("Is apple is not equall to apple");
console.log(apple != "apple");



// now condition (b). lower case
let uppercaseApple = "APPLE"
console.log("\nIs APPLE is equall to apple after converting to lower case")
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("Is APPLE is notequall to apple after converting to lower case")
console.log(uppercaseApple.toLowerCase() != "apple");



//  now condition (c) equality and unequality.
let ten = 10;
let twenty = 20;

console.log("\nIs ten is equall to twenty");
console.log(ten == twenty);

console.log("is ten is not equall to twenty");
console.log(ten != twenty);



// now condition . greater than and smaller than
console.log("\nIs ten is greater than twenty");
console.log(ten > twenty);

console.log("Is ten is less than twenty");
console.log(ten < twenty);


// new condition. greater than equal and less then equall to
console.log("\nIs ten is greater and equall to  twenty");
console.log(ten >= twenty);

console.log("Is ten is less and equall to  twenty");
console.log(ten <= twenty);


// now condition (d) "and" & "or" operator;         //"and gate" is use for multiplication
console.log("\n twenty is not equall to 10 and 20 is greater than 10");
console.log(twenty != ten && 20 > 10);

console.log("twenty is equall to 10 and 20 is greater than 10");
console.log(twenty == ten && 20 > 10);



// "OR gate" is using for addition
console.log("\n twenty is not equall to 10 and 20 is greater than 10");
console.log(twenty != ten || 20 > 10);

console.log("twenty is  equall to 10 and 20 is less than 10");
console.log(twenty == ten && 20 < 10);



// now condition (e) test weather item in array
let fruits = ["apple",'grapes','mango']
console.log("\nis grapes is include in my array")
console.log(fruits.includes("grapes"));


// // now condition (e) test weather item is not in array
let fruit = ["apple",'grapes','mango']
console.log("is grapes is not include in my array")
console.log(!fruit.includes("grapes"));
