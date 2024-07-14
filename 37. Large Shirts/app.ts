// making function, buydefault message daya hoa ha
function make_shirt(size : string = "Large", printMessage: string = "i Love Typescript"){
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// (a)calling a function with bydauflat value (yahan hum koi message recall ni kartay.kyn k bydefault uper message dia hoa ha)
make_shirt();

// (b) calling function now with Medium size and default message.. ab hum size medium kar dain gy but message same rahay ga
make_shirt("Medium");

// // (c) calling function now with Small size and default message.. ab hum size medium kar dain gy but message same rahay ga
make_shirt("Small");