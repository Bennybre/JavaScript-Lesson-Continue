// DOM Element
// --------------------------------------------

const divResult = document.querySelector("#result");
const button = document.querySelector("button");

// Variablar
// --------------------------------------------
let obj = {
    question: "What animal lives in the forest?",
    // answers: "Moose, Deer, Beaver"
    answers: [
        {
            type: "Moose",
            size: "Big",
            img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Moose_in_Grand_Teton_National_Park_3_%288007698498%29.jpg",
            attribute: "Tony Hisgett from Birmingham, UK, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
        },
        {
            type: "Deer",
            size: "Medium",
            img: "https://upload.wikimedia.org/wikipedia/commons/8/85/Chital_in_Sanjay_Dubri_Tiger_Reserve_December_2024_by_Tisha_Mukherjee_01.jpg",
            attribute: "Tisha Mukherjee, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
        },
        {
            type: "Beaver",
            size: "Small",
            img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/American_Beaver.jpg",
            attribute: "Steve from Washington, DC, USA, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons"
        }
    ]
};


let questions = [
    obj,
    {
        question: "What birds lives in the forest?",
        answers: [
            {
                type: "Eagle",
                size: "Big",
                img: "https://upload.wikimedia.org/wikipedia/commons/6/67/Bald_Eagle_Head_sq.jpg",
                attribute: "Martin Falbisoner, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
            },
            {
                type: "Owl",
                size: "Medium",
                img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Eastern_Barn_Owl_-_Tyto_javanica_stertens_-_India_%281%29_01.jpg",
                attribute: "Nikhilmore nimo, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
            },
            {
                type: "Woodpeckers",
                size: "Small",
                img: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Acorn_woodpecker_holding_a_nut_in_its_beak-0225.jpg",
                attribute: "© Frank Schulenburg"
            }
        ]
    },
    {
        question: "What lives in this pond?",
        answers: [
            {
                type: "Largemouth Bass",
                size: "Small",
                img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/1351_largemouth_bass_%28Micropterus_salmoides%29_300_dpi.jpg",
                attribute: "Robert Pos, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons"
            },
            {
                type: "Pike",
                size: "Medium",
                img: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Esox_Lucius.JPG",
                attribute: "Georg Mittenecker, CC BY-SA 2.5 <https://creativecommons.org/licenses/by-sa/2.5>, via Wikimedia Commons"
            },
            {
                type: "Gator",
                size: "Big",
                img: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Two_american_alligators.jpg",
                attribute: "Mfield, Matthew Field - http://www.photography.mattfield.com, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
            }
        ]
    }
];







// händelselyssnare
// ------------------------------------------
button.addEventListener("click", () => {


    divResult.innerHTML = "";

    
    // en iteration av det som finns i array questions
    questions.forEach(element => {
        console.log(element);

        // visualisera!

        // 1. Visa frågan i ett h4 element
        // skapa ett h4 element
        // lägg till texten i h4 elementet
        // visa på sidan
        // lösning: använd en metod som kan anropas

        renderQuestion(element.question)


        // 2. Visa ul li med svarsalternativ
        // skapa ett omslutande ul element
        // för varje svarsalternativ:
        // skapa ett omslutande li element
        // lägg till texten till li elementet
        // visa på sidan

        renderAnswers(element.answers);



    });


});




// funktioner
// ------------------------------------------

function renderQuestion(question) {

    const h4 = document.createElement("h4");
    h4.textContent = question;

    divResult.appendChild(h4);
}


function renderAnswers(answers) {

    // answers är en array
    console.log(answers);

    // kontrollera att det är en array innan iteration
    if (!Array.isArray(answers)) { return }

    // skapa ett omslutande ul element
    const ul = document.createElement("ul");

    // en iteration över alla svar
    answers.forEach(answer => {

        // skapa ett li element
        const li = document.createElement("li");

        const figure = document.createElement("figure");
        const img = new Image();
        img.src = answer.img;
        img.alt = "";
        figure.appendChild(img);

        let figcaption = document.createElement("figcaption");
        figcaption.classList = "type";
        figcaption.textContent = answer.type;
        figure.appendChild(figcaption);

        if (answer.hasOwnProperty("size")) {
            const span = document.createElement("span");
            span.classList = "size";
            span.textContent = answer.size;
            figure.appendChild(span);
        }

        figcaption = document.createElement("figcaption");
        figcaption.classList = "attribute";
        figcaption.textContent = answer.attribute;
        figure.appendChild(figcaption);
        
        li.appendChild(figure);


        // placera li elementet innanför ul elementet
        ul.appendChild(li);
    });

    // visa på sidan
    divResult.appendChild(ul);

}


// Min lösning
// if (answers) {
//     answers.forEach((answer) => {
//         const li = document.createElement("li");

//         // li.textContent = answer.type + "(" + answer.size + ")";
//         li.textContent = answer.type;

//         ul.appendChild(li);
//     });

// Konvertera JavaScript array questions till JSON format

const jsonData = JSON.stringify(questions);
