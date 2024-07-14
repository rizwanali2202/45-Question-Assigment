// define a function to print a each magician name from a array
function show_magicians(magician) {
    magician.forEach(function (trick) { return console.log(trick); });
}
;
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
;
// now make a array by using the name of magician’s names
var magician_names = ["HarryPorter", "Zakuta", "Hamoon"];
// calling a function prient a each magician
var Output = make_great(magician_names);
show_magicians(Output);
