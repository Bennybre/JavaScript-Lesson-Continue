// map - map används för att skapa en ny array med transformerade element

const array1 = [{title: "Title 1", content: "This is post 1"}, {title: "Title 2", content: "This is post 2"}, {title: "Title 3", content: "This is post 3"}];

// function countStringLength(string) {
//     return string.length;
// }

// Skapa en ny array - Omvandlar elemenetet från element till längd av contet property
// const res = array1.map(element => element.content.length);

// Skapa en ny array - Leägga till en ny property till varje element.
// const res = array1.map(element => {
//     const newElement = {title: element.title, contect: element.content, length: element.content.length}
//     return newElement;
// });

// Använder sprea operatorn (...) för att kopiera av alla properties från det gamla objetet.
const res = array1.map(element => {
    const newElement = {...element, length: element.content.length}
    return newElement;
});

// console.log(res);

// Filter
// Visa filter - filter används för att swkapa en ny array med element som uppfyller villkor
// En filterfunktion ska returnera ett booleanskt värde dvs true/false

function filterFunc(element) {
    return element.title.includes("Title 1");
}

const res2 = array1.filter(filterFunc);

// console.log(res2);

// console.log([30, 40, 50, 60, 100, 150].filter(number => number >= 100));

// Find - Find används för att hitta det första elementet som uppfyller villkor

const array2 = ["bob", "olof", "lovisa", "malin"];

const res3 = array2.find(name => name.includes("lo"));

// console.log(res3);

// Some och every - some används för att kontrollera om minsta ett element uppfyuller ett villkor
// medan every kontrollerar om alla element gör det

const res4 = array2.some(name => name.includes("lo"));
// console.log(res4);

const res5 = array2.every(name => name.includes("lo"));
// console.log(res5);

// Reduce - Reduce används för att sammanfoga alla element i en Array till ett enda värde

const array3 = [{name: "Bob", salary: 25000}, {name: "Lisa", salary: 45000}, {name: "Sven", salary: 15000}];

// let total = 0;
// for (let i = 0; i < array3.length; i++) {
//     const person = array3[i];

//     total += person.salary;
// }

// console.log(total);

const res6 = array3.reduce((total, person) => total+=person.salary, 0);

// console.log(res6);


// övning:
// 1. Använd map för att skapa en ny array med kvadraterna av talen i arrayNumbers

const numbers = [3, 5, 6, 9, 8, 20, 30, 40, 50];

const squared = numbers.map(num => num * num);

console.log("Result 1", squared)

// 2. Använd filter för att skapa en ny array med bara jämna tal från arrayNumbers

const evenNumb = numbers.filter(num => num % 2 === 0);

console.log("Result 2", evenNumb);

// 3. Använd find för att hitta det första objektet i arrayObjekts där age är större än 30

const bigger = numbers.find(num => num > 30);
console.log("Result 3", bigger);
// 4. Använd reduce för att beräkna summan av alla tal i arrayNumbers

const sumTotal = numbers.reduce((total, num) => total += num, 0);

console.log("Result 4", sumTotal);

// 5. Använd some för att kontrollera om det finns något objekt i arrayObjekts med name som börjar med "A"



// 6. Använd every för att kontrollera om alla objekt i arrayObjekts har age större än 18