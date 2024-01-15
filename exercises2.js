let myArray = ["apple", "banana", "pear", "berry", "orange"];
let secondArray = ["String", 3, ["stuff", "in", "my", "array"]];

let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'];
animals[1] = "tiger";
console.log(animals[1]);

let a = [1,2,3];
let b = [4,5,6];

let newArray = a.concat(b);
console.log(newArray);

let c = [1,2,3,7,8,9];
let d = [4,5,6];
c[2] = d;

console.log(c);

let arr = ['a', 'b', 'c'];
let arrNew = [];

for(let i = 0; i < arr.length; i++) {
    arrNew[i] = arr[i];
}

console.log(arr);
console.log(arrNew);

let fruits = ['kiwi', 'apple', 'pear'];
let newFruit = "abble";
let yetAnotherFruit = "spanana";

fruits.push(newFruit);
console.log(fruits);

fruits.unshift(yetAnotherFruit);
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(1, 0, "orange");
console.log(fruits);

fruits.splice(3, 0, "Dragon fruit, banana, berry");
console.log(fruits);

let names = ['David', 'Christoffer', 'Johan', 'Maja']
names.splice(1,2);
console.log(names);

let nums = [1,2,3,4,5,6,7,8,9];
console.log(nums);
let numsReversed = nums.reverse();
console.log(numsReversed);

let str = 'Supercalifragilisticexpialidocious';
if(str.includes("n")) {
    console.log("The array contains n!");
}

if(str.includes("x")){
    console.log("The array contains x!");
}

if(str.includes("p")){
    console.log(str.indexOf("p"))
}

for(let i = 0; i <= 5; i++) {
    console.log(str[i]);
} 

let strArr = str.split('');
let length = strArr.length;
for(let i = length; i > length - 8; i--) {
    console.log(strArr[i]);
}

/* for(let j = 0; j < 1000; j++){
    console.log(j);
} */

/* for(let j = 100; j > 0; j--) {
    console.log(j);
} */


let moreFruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
for(let j = 0; j < moreFruits.length; j++) {
    console.log(j + " " + moreFruits[j]);
}

let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];

for (let listThings of things)  {
console.log(listThings);
}

things.forEach((element, index) => console.log(element, index));

/* let j = 0;
while( j < 1000) {
    console.log(j);
    j++;
} */



let friends = [
    {
        name: 'Sixten',
        likes: [
            'bananas',
            'strawberries',
            'blueberries'
        ]
    },
    {
        name: 'Khalid',
        likes: [
            'papaya',
            'pear',
            'pineapple'
        ]
    },
    {
        name: 'Lisa',
        likes: [
            'raspberries',
            'watermelon',
            'apple'
        ]
    }
]

friends.forEach((friends, likes) => console.log(friends, likes));

let yetMoreFruits = ['apelsin', 'päron', 'äpple', 'kiwi'];

yetMoreFruits.forEach((element, index) => console.log(element, index));

for (let listFruits of yetMoreFruits)  {
    console.log(listFruits);
    }

for(let i = 0; i < yetMoreFruits.length; i++){
    console.log(i + " " + yetMoreFruits[i]);
}

/*
let type = ["hearts", "spades", "clubs", "diamonds"];
let deck = [];

for(let i = 0; i < type.length; i++){
    for(let j = 1; j <= 13; j++) {
       deck.push(type[i] + j);
    } 
}
console.log(deck);

*/

let books = [
    {
        title: "Norse Mythology",
        author: "Neil Gaiman",
        numpages: "282"
    },
    {
        title: "Offer utan ansikte",
        author: "Ahnhem",
        numpages: "589"
    },
    {
        title: "La vida imaginaria",
        author: "Mara Torres",
        numpages: "251"
    },
];


function lookForBook(object, book) {
    for(let i = 0; i < books.length; i++){
            if(books[i].title.includes(book)){
                console.log("Object contains " + book);
            }
        }
    }

lookForBook(books, "Offer utan ansikte");


let person = { name: "Dylan", age: "27", city: "Barcelona" };

console.log(person.name);
console.log(person.age);
person.age = "28";
console.log("Happy birthday " + person.age)

person.country = "Spain";

console.log(person);

function greeting() {
    console.log("Hello there " + person.name + "!");
}

greeting();