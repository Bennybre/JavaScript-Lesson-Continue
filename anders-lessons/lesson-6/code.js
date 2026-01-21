// console.log("Hello world");


// DOM element
// ------------------------------------------
const button = document.querySelector("button");
const searchElement = document.querySelector("input");



// Variabler
// ------------------------------------------




// Händelselyssnare
// ------------------------------------------
button.addEventListener('click', () => {


    // hämta data synkront
    // metoden fetch

    // en extern resurs som kan ge svar

    // random fox 
    // let url = "https://randomfox.ca/floof";


    // Free Recipe API https://www.themealdb.com/api.php

    // sök textsträng 
    const searchString = searchElement.value;


    url = "https://www.themealdb.com/api/json/v1/1/search.php?s=honey";
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`;

    console.log(`Endpoint: ${url}`);





    fetch(url)
        .then((result) => {

            // console.log(result);
            // omvandla till text för att enkelt kunna 
            // felsöka det första steget
            // result.text()
            // omvandla til json om man vet att resursen är i json format

            // OBS se till att ange return...
            return result.json();
        })


        .then((data) => {

            // gör ngt med data - kan vara en array eller ett objekt
            // analysera vad det är för typ, kan man iterera en array?
            // är det ett objekt med olika egenskaper?
            // kanske en egenskap anger att det finns en array?

            console.log(data);

            // 

        });

});



// Funktioner
// ------------------------------------------