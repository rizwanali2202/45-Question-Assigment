"use strict";
// let guest_list : string [] = ['ali', 'rizwan', 'raza', 'ahsan'];
// for (let i=0; i<guest_list.length; i++){
//     console.log(`respected Sir` + guest_list[i] + `you are invited in dinner`)
// };
let guest_list = ['ali', 'rizwan', 'raza', 'ahsan'];
let dontCome = "ahmad";
guest_list.splice(0, 1, "ahmad");
guest_list.forEach(wellcome => console.log(`salam, ${wellcome}, you are invited on dinner`));
