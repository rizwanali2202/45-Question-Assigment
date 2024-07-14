// define a function with a rest parameter that accept items arrugment representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking the sandwich with the following items:\n");
    items.forEach(function (singleItems) { return console.log(singleItems); });
    console.log("\n Now Enjoying Sandwitch\n");
}
;
// call the function 3 times with different 3 aurgement
makeSandwich("Chicken", "Cheez", "Mayo", "Egg");
makeSandwich("Bread", "Beef", "Mayo");
makeSandwich("Egg", "Bread");
