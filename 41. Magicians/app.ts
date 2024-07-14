// define a function to prient a each magician name from a array
function show_magicians(magician : string []){
    magician.forEach(trick => console.log(trick))
};

// now make a array by using the name of magician’s names

let magician_names = ["HarryPorter","Zakuta","Hamoon"];

// calling a function prient a each magician
show_magicians(magician_names);