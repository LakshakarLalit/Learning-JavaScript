// Immediately Invoked Function Expression (IIFE)

// Named iife
(function sala(){
    console.log(`DB CONNECTED`);
})();

// Un-named iife
((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('kajal')