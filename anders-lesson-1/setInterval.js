// setInterval funktion som utför en instruktion i ett visst intervall

let second = 0;

console.log(typeof second);

// setInterval(function() {
//     console.log(second += 1);
// }, 1000);

// Avbryt setInterval instruktionen efter en viss tid.

// Funktionerna set Interval och SetTimeout generaerar unika IDn
//som kan användas för att avbryta exekvering.

let intervalId = setInterval(() => {
    console.log(second += 1);
    // console.log(second = second + 1);
    // console.log(second++);

}, 1000);

// Vilket id genereras?
console.log(`Funktionen setInterval tilldelades id ${intervalId}`);


// Avbryt uppräkningen av antal sekunter efter ex 10 sek
// använd metoden clearInerval
//med metoden setTimeout är det möjligt.
setTimeout(() => {
    clearInterval(intervalId);
}, 10 * 1100);


// let count = 0;
// let myInterval = setInterval(function () {
//     console.log("Körning: " + count);
//     count++;
//     if (count >= 5) {
//         clearInterval(myInterval); // Stoppar intervallet efter 5 körningar
//         console.log("Intervallet är stoppat.");
//     }
// }, 1000);
