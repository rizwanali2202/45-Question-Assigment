// define a function creat a car object with optional options..
function create_car(manufacturar, model) {
    // initilize a car object with manufacturar and models
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturar: manufacturar,
        model: model,
    };
    // add additional option of car Object
    option.forEach(function (element) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
// call to function to creat the car Object
var my_car = create_car("Toyota", "Honda", "Color : Black", "Sunroof : True", "Year : 2022");
console.log(my_car);
