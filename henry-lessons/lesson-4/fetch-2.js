//document.body.innerHTML += "Hello";

// Uppgift 1. Skapa en sökmotor för Star Wars filmer

const searchFormEl = document.querySelector("#searchForm")
const resultsEl = document.querySelector("#results")

function renderFilmCard(m) {
    return `<div>
            <h2>${m.title}</h2>
            <p>${m.opening_crawl}</p>
            <div>
                <h3>Characters</h3>
                <ul>
                ${m.characters.map(c => `<a href=${c}>Test</a>`)}
                </ul>                                           
            </div>
            </div>
        `
}

function handleSubmit(e) {
    e.preventDefault();
    // TODO: implementera 
    // Lägg sökresultatet i resultsEl
    const searchString = e.target.search.value;

    // reset results
    resultsEl.innerHTML = "";

    // Hur ni använder fetch
    fetch("https://swapi.info/api/films")
        .then((res) => res.json()) // från response till json
        .then((data) => {
            const movies = data;

            const html = movies.filter(m => m.title.toLowerCase().includes(searchString.toLowerCase()))
                .map(renderFilmCard)
                .join('')

            resultsEl.innerHTML += html
        })
        .catch((error) => console.error(error))
}

searchFormEl.addEventListener("submit", handleSubmit)