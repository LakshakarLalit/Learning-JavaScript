function calculteCartPrice(val1, val2, ...num1){                   // (...) rest/spread operator
    return num1
};
console.log(calculteCartPrice(200, 400, 800, 50));

const user = {
    username: "nilam", 
    price: 532,
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
};
handelObject(user)