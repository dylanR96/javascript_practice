
// Exercise 1
function printer(string) {
    let text = string;
    return text.length;
}

console.log(printer("Hi there!"));

// Exercise 2
function date(date) {
    let substr = date.substring(0, 4);
    console.log(substr);
}

date("2015-02-15");


// Exercise 3
function addition(a, b) {
    let c = a + b;
    console.log(c);
 }
 
 function multiplication(a, b){
     let c = a * b;
     console.log(c);
 }
 
 function minus(a, b) {
     let c = a - b;
     console.log(c);
 }
 
 function operator(a, b, op) {
     if (op == '+') {
         addition(a, b);
     }
     if (op == '*') {
         multiplication(a, b);
     }
     if (op == '-'){
         minus(a, b);
     }
 }
 
 operator(10, 5, "*");

 // Exercise 4
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function newArray(numbers) {
    let newArray = [];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 == 0) {
            newArray.push(numbers[i]);
        }

    } 

    return newArray;
 }

let result = newArray(numbers);
console.log(result);


function newArrays(numbers) {
    let newArray = numbers.filter((number) => number % 2 == 0);
    return newArray;
}

let filterArray = newArrays(numbers);
console.log(filterArray);

// Exercise 5
let books = [
    { author: 'Oscar Wilde', title: 'The importance of being earnest'},
    { author: 'Lewis Carroll', title: 'Alice in wonderland'},
    { author: 'Jules Verne', title: 'Around the world in eighty days'},
    { author: 'Victor Hugo', title: ' The Hunchback of Notre-Dame'},
    ]

let booksArray = books.filter((book) => book.author == 'Jules Verne');

console.log(booksArray);

//Exercise 6
let people = [
    { age: 10, name: 'Gun-Britt'},
    { age: 20, name: 'Conny'},
    { age: 30, name: 'Aurora'},
    { age: 40, name: 'Kalle'},
    { age: 55, name: 'Max'},
  ]

let sum = people.reduce((accumulator, people) => {
    return accumulator + people.age;
}, 0);

console.log(sum);


//Exercise 7
let ArrayNumbers = [2, 3, 1, 5, 4, 10, 8, 7, 9, 6];

const max = ArrayNumbers.reduce((a, b) => Math.max(a, b), -Infinity);

console.log(max);


//Exercise 8
const map1 = books.map((book) => book.title);

console.log(map1);

//Exercise 9

 function older(olderPeople) {
    for(let i = 0; i < olderPeople.length; i++) {
        if(olderPeople[i].age > 40) {
            return false;
        }
    }
    return true;
}

/* let allUnder40 = people.every(person => person.age < 40);
console.log(allUnder40); */

let arrayOfOlder = older(people);
console.log(arrayOfOlder); 

//Exercise 10
let destinations = [
    {Name: 'Canada', Continent: 'North America'},
    {Name: 'Chile', Continent: 'South America'},
    {Name: 'Oceania', Continent: 'New Zealand'},
    {Name: 'Japan', Continent: 'Asia'},
    {Name: 'Uganda', Continent: 'Africa'},
    {Name: 'Norway', Continent: 'Antarctica'},
    {Name: 'Spain', Continent: 'Europe'},
]

//Exercise 10.1
let everyCountry = destinations.map((country) => country.Name);
console.log(everyCountry);

//Exercise 10.2
let everyContinent = destinations.map((country) => country.Continent);
console.log(everyContinent);

//Exercise 10.3


// function printCountry(countryArray){
//     for(let i = 0; i < countryArray.length; i++) {
//         console.log(countryArray[i].Name);
//     }
// }

// function printContinent(countryArray){
//     for(let i = 0; i < countryArray.length; i++) {
//         console.log(countryArray[i].Continent);
//     }
// }

// function specificCountry(countryArray) {
//     for(let i = 0; i < countryArray.length; i++) {
//         if(countryArray[i].Continent == 'Europe') {
//             console.log(countryArray[i].Name);
//         }
//     }
// }

// function search(countryArray, search) {
//     let foundIt = false;
//     for(let i = 0; i < countryArray.length; i++) {
//         if(countryArray[i].Continent == search || countryArray[i].Name == search) {
//             foundIt = true;
//         }
//     }
//     if(foundIt == true) {
//         console.log(`We found ${[search]} in the list, congrats!`);
//     } else {
//         console.log(`We did not find ${[search]} in the list, sorry!`)
//     }

// }

// printContinent(destinations);
// specificCountry(destinations);
// search(destinations, prompt());
