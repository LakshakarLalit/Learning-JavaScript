// const tinderUser = {};                      // Non-singleTone object
const tinderUser = new Object();            // SingleTone object

tinderUser.id = "12345";
tinderUser.name = "Akku";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "isiji@gmail.com",
    fullname : {
        userFullName : {
            firstname: "quaara",
            lastname : "adam"
        }
    }
}

console.log(regularUser.fullname.userFullName);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3);
