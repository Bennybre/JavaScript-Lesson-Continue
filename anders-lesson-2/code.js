console.log("Hello World");


// DOM Element
    const button = document.querySelector("button");
    const dataElement = document.querySelector("#data");
    


// Variabler





// Händelselyssnare
    button.addEventListener("click", (e) => {
        console.log("Klick på knapp");

        const xhr = new XMLHttpRequest();
        console.log(xhr);

        // Hämta från en url
        // const url = "https://cdn2.thecatapi.com/images/ebv.jpg";

        // Måste man skriva GET med stora bokstäver?
        // xhr.open("GET", url);
        xhr.open("GET", "data.txt");
        xhr.addEventListener("load", () => {
            console.log(xhr.responseText);
        });
        xhr.send();

    });




// Funktioner