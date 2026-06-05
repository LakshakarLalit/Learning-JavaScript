// IF ELSE-IF ELSE

// const balance = 1000;

// if(balance<500){
//     console.log("less than 500")
// } else if(balance<750){
//     console.log("less than 750")
// } else if(balance<900){
//     console.log("less than 900")
// } else {
//     console.log("Balance is 1000")
// }


const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy the item");
}
const loggedInEmail = true
if (userLoggedIn || loggedInEmail){
    console.log("User logged in");
}