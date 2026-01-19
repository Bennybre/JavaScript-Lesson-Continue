// Namn, Releaseyear, Säsonger/Avsnitt/Runtime, Karaktärer
// Genre, Rottentomatoscore, Kostnad att göra avnitt/säsong
let tvShow = {};

tvShow.name = "Supernatural";
tvShow.img = "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTyhe8j6YwsL_abygEiWs41L5dVHM6lf7lVbi8TU7-BMRn4vJtHfvM2TPEYEe-OmpaG0LOSt9NdWZNGGcbUq3-FQJ3184BNXIgrq.jpg"
tvShow.releaseYear = "2005";
tvShow.seasons = 15;
tvShow.characters = ["Jensen Ackles", "Jared Padlecki", "Misha Collins", "Mark Sheppard"];
tvShow.genre = "Fantasy, Skräck";
tvShow.score = "Rotten tomato score: " + 93;
tvShow.cost = "Around $650million to make the whole show excluding the actors pay";
tvShow.award = true;


const show = JSON.stringify(tvShow);

console.log(show);


let tvShowTwo = {
    name: "Supernatural",
    img: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTyhe8j6YwsL_abygEiWs41L5dVHM6lf7lVbi8TU7-BMRn4vJtHfvM2TPEYEe-OmpaG0LOSt9NdWZNGGcbUq3-FQJ3184BNXIgrq.jpg",
    releaseYear: "2005",
    seasons: 15,
    characters: ["Jensen Ackles", "Jared Padlecki", "Misha Collins", "Mark Sheppard"],
    genre: "Fantasy, Skräck",
    score: "Rotten tomato score: " + 93,
    cost: "Around $650million to make the whole show excluding the actors pay",
    award: true
};
