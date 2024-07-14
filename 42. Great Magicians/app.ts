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

// call make_great function to modify the magicians names
let great_magicians = make_great(magician_names);

show_magicians(great_magicians);