// define a function with a rest parameter that accept items arrugment representing our sandwich
function makeSandwich(...items : string[]){
    
    console.log("\nMaking the sandwich with the following items:\n")
    
    items.forEach(singleItems => console.log(singleItems));

    console.log("\n Now Enjoying Sandwitch\n")
};

// call the function 3 times with different 3 aurgement
makeSandwich("Chicken","Cheez","Mayo","Egg");

makeSandwich("Bread","Beef","Mayo");

makeSandwich("Egg","Bread");


