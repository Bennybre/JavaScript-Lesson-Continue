// DOM Elements
const n1 = document.querySelector("#n1");
const n1Code = n1.querySelector("code");

const n2 = document.querySelector("#n2");
const n2Code = n2.querySelector("code");

const n3 = document.querySelector("#n3");
const n3Code = n3.querySelector("code");

const n4 = document.querySelector("#n4");
const n4Code = n4.querySelector("code");

const n5 = document.querySelector("#n5");
const n5Code = n5.querySelector("code");
const multiple = n5.querySelector("div#multiple");
const yatzy = n5.querySelector("div#yatzy");

// console.log("n1", n1);
// console.log("n1Code", n1Code);


// Variabler


// Skapa ett slumtal mellan 0 och 1
// Använd inbyggda objektet Math
const randomFloat = Math.random();

// Visa talet på sidan. toFixed() hur många decimaler.
n1Code.textContent = randomFloat.toFixed(5);

// n2
// -------------------------------------

// Skapa ett slumtal mellan 0 och 1
// Använd inbyggda objektet Math
// Ett tal mindre än eller lika med 0.5 är 0, ett tal större än 0.5 är 1.
// Ternary Operator condition (istället för if-else)
// ? = if : ? else
const coin = randomFloat <= 0.5 ? 0 : 1;

// Alternativt
// let coin2;
// if (randomFloat <= 0.5) {
//     coin2 = 0
// } else {
//     coin2 = 1
// }

// Visa talet på sidan.
n2Code.textContent = coin;



// n3
// ----------------------------------------
// Promise objektet i JavaScript i en funktion
// Objektet kan hantera ett löfte om en korrekt lösning (resolve), eller ett alternativ (reject)



flipCoin().then((result) => {
    console.log("Result", result);
    n3Code.textContent = result;
});


// n4
// ------------------------------------

//  Visuell variant av funktionen flipCoin


// Anropa funktionen för att se resultatet.
flipCoinV().then((result) => {
    console.log(result);
    n4Code.textContent = result;
});


// n5
// ------------------------------------------------

// Kasta tärning när man klickar på något.

// 1. Lägg till en bild på en tärning.
// 2. Se till att man kan klicka på bilden.
// 3. När man klicka på tärningen ska ett eller flera tärningskast simuileras.
// 4. Resultatet av tärningskast ska presentteras i elemenet <code></code>

// Lösning 1
// Använd det inbyggda objektet Image() för att skapa en bild.
// Tilldela elemet ett src attribut
// Med html: <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/2-Dice-Icon.svg" alt="ett par tärningar.">

// Med Javscript
// Ny Bild
let img = new Image();

// Använd attributet src
img.src = "https://upload.wikimedia.org/wikipedia/commons/c/c4/2-Dice-Icon.svg";

// Ange attributet alt
img.alt = "ett par träningar"

n5.appendChild(img);

for (let i = 1; i <= 5; i++) {

    // kastas tärning..
    rollDice().then((result) => {
        // multiple.textContent += result + "\n";

        // Skapa ett nytt element för varje tärningskast
        // Visa vilken tärning som det gäller
        const div = document.createElement("div");
        div.textContent = `Tärning ${i} visar ${result}`;
        div.classList = "dice result";
        multiple.appendChild(div);
    });
}

// Kasta 5 tärningar och inväta resultat då samtliga 5 tärningar stannat.
// I Promise objektet kan man inväta mer än ett utfall - Promise.all

// En array för tärningar
const dices = [];

// 5 tärningskast
for (let i = 0; i < 5; i++) {
    const dice = rollDice();
    dices.push(dice);
}

Promise.all(dices).then((values) => {
    yatzy.textContent = values.join(",");
});




// Händelselyssnare

img.addEventListener("click", (e) => {
    console.log(`Ett klick på elementet ${e.target}`);

    // Kastas en tärning
    rollDice().then((result) => {
        n5Code.textContent = result;
    });

});


// Funktioner

function rollDice() {
    return new Promise((resolve) => {


        // Låt de ta lite tid
        setTimeout(() => {

            // Ett resultat mellan ca 0.000006 och 5.99999994
            const randomFloat = Math.random() * 6;

            // // Funktion flr att avrunda ett tal till närmsta större heltal.
            // Math.ceil();

            // // Funktion för att avrunda ett tal till närmsta mindre heltal.
            // Math.floor();

            resolve(Math.ceil(randomFloat));

        }, Math.random() * 3000 );
    });
}

// n3
function flipCoin() {
    return new Promise((resolve, reject) => {


        // Använd setTimeout för att de ska ta tid...
        setTimeout(() => {

            // resolve(1);

            const randomFloat = Math.random();
            const coin = randomFloat <= 0.5 ? "Krona" : "Klave";
            resolve(coin);

        }, 3 * 1000);

    });
}

// n4
function flipCoinV() {


    // Returnera promise - ett framtida löfte om ett resultat
    return new Promise((resolve, reject) => {

        // Visuellt: Visa att värdet växlar mellan krona och klave.
        // setInterval, spara unikt id så att metoden kan avbrytas.

        const intervalId = setInterval(() => {
            n4Code.textContent = Math.random() <= 0.5 ? "krona" : "klave";
        }, 100);

        // Math.random alltid tal mellan 0-1.
        const randomFloat = Math.random();
        const coin = randomFloat <= 0.5 ? "krona" : "klave";

        // Framtida resusltat med nyckelordet resolve

        // Se till att funktionen tar en viss tid...
        setTimeout(function () {

            // Avbryt intervallet så att vi kan visa det slutliga svaret
            clearInterval(intervalId);
            resolve(coin);

        }, Math.random() * 1000 * 5);
    });

}