let name = "kaalibhoot";
console.log(name);
console.log(typeof(name));

const gameName = new String('Labubu');
console.log(gameName); 
console.log(gameName[1]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('u'));

const newS = gameName.substring(0, 3);
console.log(newS);

const anotherS = gameName.slice(-6, -1);
console.log(anotherS);


const spaceName = "            kaalichand                ";
console.log(spaceName);
console.log(spaceName.trim());