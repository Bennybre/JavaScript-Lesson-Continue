const arrayNumbers = [5, 12, 8, 130, 44];
const arrayStrings = ["Henry", "Edison", "Tesla"];
const arrayObjekts = [{name: "Henry", age: 33}, {name: "Edision", age: 0.5}, {name: "Tesla", age: 8}]


// Om vi vill behandla alla eller något element i arrayen så har vi använt en for-loop

// en traditionell for-loop har fallgropar
// a.k.a implementationsdetailjer
// initialisering av en index
// stopvillkor
// stegningsoperation
// en forloop har kontroll att ändra i orginalet 
console.log("Traditionell for-loop");
for (let i = 0; i < arrayNumbers.length; i++) {
    let element = arrayNumbers[i];

    // gör något med elementet
    console.log(element);

    // ändra på orginalelementet
    // arrayNumbers[i] = 99;
}


console.log("Foreach");
function logElement(element) {
    console.log(element);
    element = 99;
}

// för varje element i arrayen arrayNumbers kör logElement
// arrayNumbers kommer ALLTID vara oförändrad efter körning. "arrayObjektrad"
arrayNumbers.forEach(logElement)


// uppgift. Använd foreach och försök dubbla talen i arrayNumbers
console.log("Foreach - dubbel");
function double(element) {
    return element * 2;
} 

arrayNumbers.forEach(double);
console.log(arrayNumbers)


//const doubledArrayNumbers = arrayNumbers.map(double)
const doubledArrayNumbers = arrayNumbers.map(element => element * 2);

console.log(doubledArrayNumbers);

// Uppgift: Använd arrayObjekt för att skapa ny array med bara namnen "names"
// skapa sedan en ny array med map på names för att gör alla bokstäver till upper case

// const names = arrayObjekts.map(element => element.name);
// const capitalizedNames = names.map(name => name.toUpperCase());

const result = arrayObjekts.map(element => element.name) // 1st plocka ut name
            .map(name => name.toUpperCase()) // 2nd gör dem upperCase
            .filter(name => name.includes('N')) // ta bara med namn med bokstaven N

console.log(result)