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