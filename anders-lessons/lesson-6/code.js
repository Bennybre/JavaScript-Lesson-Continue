// console.log("Hello world");


// DOM element
// ------------------------------------------
const button = document.querySelector("button");
const searchElement = document.querySelector("input");
const resultDiv = document.querySelector("#result");



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


    // url = `https://api.disneyapi.dev/character/${searchString}`;
    url = `https://api.disneyapi.dev/character?name=${searchString}`;
    // url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`;


    // Med API nyckel skulle url kunna se ut så här
    // API Key "1"
    // En quearystring anger hur en webbserver ska hantera en förfrågan
    // Ex, api_key=1
    // s=blueberry
    // Första delen i en quearystring anges efter ett inledande frågetrecken ? 
    // Därefter anges parvis en parameter med dess värde
    // Om olika parametrar ska anges använder man ett & tecken, enligt följande exempel
    // url = `https://www.themealdb.com/api/json/v1/1/search.php?API_KEY=1&s=${searchString}`;


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

            displayData(data);
            
            console.log(data);

            // 

        })

        .catch ((error) => {
        console.error('Error:', error);
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });

});



// Funktioner
// ------------------------------------------

function displayData(data) {
    // Clear previous results
    resultDiv.innerHTML = '';

    // Check if data exists and has info property (Disney API returns data.info and data.data)
    if (data && data.data && data.data.length > 0) {
        // Loop through characters
        data.data.forEach(character => {
            const characterDiv = document.createElement('div');
            characterDiv.className = 'character-card';
            characterDiv.innerHTML = `
                <h3>${character.name}</h3>
                ${character.imageUrl ? `<img src="${character.imageUrl}" alt="${character.name}">` : ''}
                ${character.films ? `<p><strong>Films:</strong> ${character.films.join(', ')}</p>` : ''}
                ${character.tvShows ? `<p><strong>TV Shows:</strong> ${character.tvShows.join(', ')}</p>` : ''}
            `;
            resultDiv.appendChild(characterDiv);
        });
    } else {
        resultDiv.innerHTML = '<p>No characters found</p>';
    }
}




