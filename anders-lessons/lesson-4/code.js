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
        { type: "Moose" },
        { type: "Deer" },
        { type: "Beaver" }
    ]
};


let questions = [
    obj,
    {
        question: "What birds lives in the forest?",
        // answers: "Moose, Deer, Beaver"
        answers: [
            { type: "Eagle" },
            { type: "Owl" },
            { type: "Woodpeckers" }
        ]
    },
    {}
];







// Händelselyssnare
// --------------------------------------------
button.addEventListener("click", (e) => {

    // En iteration av det som finns i array questions
    questions.forEach(element => {
        console.log(element);

        // Visualisera!

        // 1. Visa frågan i ett h4 element
        // Skapa ett h4 element
        // Lägg till texten i h4 element
        // Visa på sidan

        renderQuestion(element.question);

        // 2. Visa ul li med svarsalternativ
        // Skapa ett omslutande ul element
        // För varje svarsalternativ:
        // Skapa ett omslutande li element
        // Lägg till textenb till li element
        // Visa på sidan

        renderAnswers(element.answers)



    });
});




// Funktioner
// --------------------------------------------

function renderQuestion(question) {
    const h4 = document.createElement("h4");
    h4.textContent = question;

    divResult.appendChild(h4);
}

function renderAnswers(answers) {

    // Answers är en array
    const ul = document.createElement("ul");

    if (answers) {
        answers.forEach((item) => {
            const li = document.createElement("li");

            li.textContent = item.type;

            ul.appendChild(li);
        });

        divResult.appendChild(ul);
    }

    
}