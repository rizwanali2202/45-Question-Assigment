// define a function creat a car object with optional options..
function create_car(manufacturer: string, model: string, ...options: string[]): { [key: string]: any } {
    // Initialize a car object with manufacturer and model
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model,
    };

    // Add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
}

// Call to function to create the car object
let my_car = create_car("Toyota", "Camry", "Color : Black", "Sunroof : True", "Year : 2022");

console.log(my_car);