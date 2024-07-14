"use strict";
// creating a array
let userNames = ['ali', 'faisal', 'waqas', 'admin', 'usman'];
// using foreach loop on array
userNames.forEach(oneUser => {
    if (oneUser === "admin") {
        console.log(`Hello, ${oneUser}, would you like to see the status report`);
    }
    else {
        console.log(`Hello, ${oneUser}, thank you for looging in again`);
    }
});
