// define a function to print a each magician name from a array
function show_magicians(magician) {
    magician.forEach(function (trick) { return console.log(trick); });
}
;
// function to make magicians great through .map().it will modify arary
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
;
// now make a array by using the name of magician’s names
var magician_names = ["HarryPorter", "Zakuta", "Hamoon"];
// making a copy of original array through .slice() function (slice kasi b array ke copy bnanay k laya use hota ha)
var copy_magician_name = magician_names.slice();
// modify the copy array to include "the great" with there names
var copy_great_magician = make_great(copy_magician_name);
//  show both array "original" and "copy"
// original
console.log("Original Array\n");
show_magicians(magician_names);
// copy
console.log("\n Copy Array\n");
show_magicians(copy_great_magician);
