// singleton - when object is called make a singleton

const mysym = Symbol("key1");
const jsUser = {
    name: "Kallu",
    age: 65,
    location: "Rajkot",
    [mysym]: "key1",
    email: "kallu@papa.com",
    isLoggerIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(jsUser.name);
console.log(jsUser["email"]);
console.log(jsUser[mysym]);
console.log(typeof(jsUser[mysym]));

jsUser.email = "kallubhaiya@google.com";
// Object.freeze(jsUser);
// jsUser.email = "kallubhaiya@iosuser.com";
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello duniya");
}
console.log(jsUser.greeting());
