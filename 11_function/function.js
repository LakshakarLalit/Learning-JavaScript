function name() {
    console.log("k");
    console.log("a");
    console.log("a");
    console.log("l");
    console.log("u");
};

// name();

// function addTwoNumber(num1, num2){              // Parameters
//     console.log(num1 + num2);
// }

// addTwoNumber(3, 4);                             // Arguments

function add(num1, num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
};

const result = add(89, 7);

console.log("Result is ", result);

function loginMsg(username="jamuna"){
    if(!username){
        console.log("Please enter a valid username");
        return
    }
    return `${username} just logeed in`
}

console.log(loginMsg());
