// let guest_list : string [] = ['ali', 'rizwan', 'raza', 'ahsan'];
// for (let i=0; i<guest_list.length; i++){
//     console.log(`respected Sir` + guest_list[i] + `you are invited in dinner`)
// };

let guest_list : string [] = ['ali', 'rizwan', 'raza', 'ahsan'];
// let dontCome = "ahmad";
// guest_list.splice(0, 1 , "ahmad");
// guest_list.forEach(wellcome => console.log(`salam, ${wellcome}, you are invited on dinner`));
// console.log(guest_list);
// console.log("we found a big table");

// 16 b (use unshift for make in start array)
 guest_list.unshift("faisal");
 console.log(guest_list);

// //  16 c (use splice for make in middle arary)
let middleGuest = "hasnain"
let middleIndex = middleGuest.length/2
guest_list.splice(middleIndex,0, middleGuest);
console.log(guest_list);

// 16 d (use push for make in end array)
guest_list.push("aslam");
console.log(guest_list);

// 16 e (print message to all array person)
guest_list.map(items => console.log(`\n Dear ${items}, \n you are invited to dinner`));