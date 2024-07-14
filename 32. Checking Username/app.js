"use strict";
// ARRAY of current_users
let current_users = ['Ali', 'ahmad', 'Rizwan', 'Asad', 'Rafay'];
// ARRAY of new_users
let new_users = ['Waqas', 'Noman', 'Ahmad', 'Talha', 'Rizwan'];
// loop through new_usersto check username availibility
new_users.forEach(new_one_user => {
    // making a condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    //    diff messages using if-else statements
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken`);
    }
    else {
        console.log(`this username ${new_one_user} is available`);
    }
});
