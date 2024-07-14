// define a function to print a each magician name from a array
function show_magicians(magician : string []){
    magician.forEach(trick => console.log(trick))
};

// function to make magicians great through .map().it will modify arary
function make_great(magician : string []){
   return magician.map(name => `The Great ${name}`)
};

// now make a array by using the name of magician’s names

let magician_names = ["HarryPorter","Zakuta","Hamoon"];

// making a copy of original array through .slice() function (slice kasi b array ke copy bnanay k laya use hota ha)
let copy_magician_name = magician_names.slice()

// modify the copy array to include "the great" with there names
let copy_great_magician = make_great(copy_magician_name)

//  show both array "original" and "copy"

// original
console.log("Original Array\n")
show_magicians(magician_names);

// copy
console.log("\n Copy Array\n")
show_magicians(copy_great_magician);
