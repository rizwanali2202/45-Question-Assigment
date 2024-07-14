// creating a variable
let age = 23;

// creating a program determining the stage of life using else-if chain
if (age < 2) {
    console.log("You are a baby");
}
else if(age >= 2 && age < 4) {
    console.log("Yoy are a toddler");
}
else if (age >= 4 && age < 13) {
console.log("you are a kid");
}
else if (age >= 13 && age < 20) {
    console.log("you are a teenage");
}
else if(age >= 20 && age < 65) {
    console.log("you are a adult");
}
else if(age >= 65) {
    console.log("you are a elder");
}