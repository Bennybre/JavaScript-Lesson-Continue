// Funktion för att hämta pokemon
async function loadPokemon() {
    // Fånga upp vilken div vi vill populera med innehåll
    const pokemonList = document.getElementById('pokemon-list');

    // Tar bort allt innehåll ifall ifall det skulle ligga något och skräpa
    pokemonList.innerHTML = '';

    try {
        // Länk till endpoint från API:et
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');

        //   Kontrollera om requesten lyckades
        if (!response.ok) {
            throw new Error('Kunde inte hämta pokémon');
        }

        // Konvertera response till JSON format
        const data = await response.json();

        console.log(data);


        //   Mappa upp alla pokemon från data
        const pokemonPromises = data.results.map(async (pokemon) => {

            // Hämta/fetcha datan från deras varje pokemons endpoint
            const detailsResponse = await fetch(pokemon.url);

            // Säkerställ att datan kan hämtas
            if (!detailsResponse.ok) {
                throw new Error(`Kunde inte hämta data för ${pokemon.name}`);
            }

            // Konvertera till json format.
            const details = await detailsResponse.json()

            return createPokemonCard(details)
        });

        // Tar emot en Array av promises och väntar tills ALLA är klara
        const pokemonCards = await Promise.all(pokemonPromises)

        // Slår vi samma alla promises
        pokemonList.innerHTML = pokemonCards.join('')

    } catch (error) {
        pokemonList.innerHTML = '<h4>Något gick fel vid laddning</4>'
        console.error(error);
    }
}

// Funktion för att skapa HTML
function createPokemonCard(details) {
    return `
                <div class="item">
                <!-- Pokemon number -->
                <div class="item-number">#${String(details.id).padStart(3, '0')}</div>
                <!-- Image -->
                <div class="item-image">
                <img src="${details.sprites.other['official-artwork'].front_default}"
                alt="${details.name}" />
                </div>
                <!-- Content -->
                <div class="item-content">
                <h3 class="item-name">${details.name}</h3>
                <div class="item-categories">
                    ${details.types
                        .map(type => `<div class="${type.type.name}">${type.type.name}</div>`)
                        .join('')
                    }
                </div>
                </div>
                <a href="#" class="read-more">Read more</a>
                </div>
    `
}

// Kör funktionen
loadPokemon();