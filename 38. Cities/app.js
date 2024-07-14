// creating a function (3 cities hamara add karna ha or country by default pakistan dia gya ha)
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
// calling a function
describe_city("karachi");
describe_city("lahore");
// ab agar hum yahan hum city and country change karain gy
describe_city("washton", "USA");
