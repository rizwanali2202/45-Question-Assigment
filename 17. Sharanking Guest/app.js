"use strict";
// // Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// // • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// // • Print a message to each of the two people still on your list, letting them know they’re still invited.
// // • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// // let guest_list : string [] = ['ali', 'rizwan', 'raza', 'ahsan'];
// // for (let i=0; i<guest_list.length; i++){
// //     console.log(`respected Sir` + guest_list[i] + `you are invited in dinner`)
// // };
// let guest_list : string [] = ['ali', 'rizwan', 'raza', 'ahsan'];
// // let dontCome = "ahmad";
// // guest_list.splice(0, 1 , "ahmad");
// // guest_list.forEach(wellcome => console.log(`salam, ${wellcome}, you are invited on dinner`));
// // console.log(guest_list);
// // console.log("we found a big table");
// // 16 b (use unshift for make in start array)
//  guest_list.unshift("faisal");
//  console.log(guest_list);
// // //  16 c (use splice for make in middle arary)
// let middleGuest = "hasnain"
// let middleIndex = middleGuest.length/2
// guest_list.splice(middleIndex,0, middleGuest);
// console.log(guest_list);
// // 16 d (use push for make in end array)
// guest_list.push("aslam");
// console.log(guest_list);
// // 16 e (print message to all array person)
// guest_list.map(items => console.log(`\n Dear ${items}, \n you are invited to dinner`));
//question (17 a)
console.log("we can invite only two peoples for dinner!");
let guest_list = ['ali', 'rizwan', 'raza', 'ahsan'];
//remove last 2 name
while (guest_list.length > 2) {
    let removeGuest = guest_list.pop();
    console.log(`\n sorry ${removeGuest} we cant invite you on dinner`);
}
;
//remaing first 2 name
guest_list.map(items => console.log(`${items} \n you are still invited on dinner`));
//remaning first 2 name also remove and make empty
guest_list.pop();
guest_list.pop();
console.log(guest_list);
