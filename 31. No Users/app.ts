let userNames = ['ali','faisal','waqas','admin','usman'];

// for b condition
userNames = []

if (userNames.length === 0) {
    console.log("Your array is empty we need to find some user");
}else{
    // using foreach loop on array
    userNames.forEach(oneUser => {
    if(oneUser === "admin"){
        console.log(`Hello, ${oneUser}, would you like to see the status report`);
    }else {
        console.log(`Hello, ${oneUser}, thank you for looging in again`)
    }
})
}
