// Funktionen setTimeout
// En funktion som utför något efter en viss tid
// 1000 = 1 sec

console.log("Cheese")

// Med nyckelordet function
setTimeout(function() {
    console.log("I Love Cheese");
}, 2000);

// som så kallad 'arrow function'
setTimeout(() => {
    console.log("You need to love Cheese");
}, 1000);
