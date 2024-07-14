// define a function to prient a each magician name from a array
function show_magicians(magician) {
    magician.forEach(function (trick) { return console.log(trick); });
}
;
// now make a array by using the name of magician’s names
var magician_names = ["HarryPorter", "Zakuta", "Hamoon"];
// calling a function prient a each magician
show_magicians(magician_names);
