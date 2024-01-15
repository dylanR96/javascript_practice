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


