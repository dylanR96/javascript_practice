//Exercise 1
function doAfterDelay(anotherFunk, delaySec) {
    setTimeout(() => {
        anotherFunk()
    },delaySec);
}   


function printHello() {
    console.log("Hello there!");
}

doAfterDelay(printHello, 5000);

//Exercise 2
const myArray = ["hello", "my", "baby", "hello", "my", "honey"];

function myFunk(arr, itterate) {
    itterate(arr);
}

function overArr(){
    myArray.forEach((element) => console.log(element));
}

myFunk(myArray, overArr);

//Exercise 3
function processElements(arr, arrChanger){
    arrChanger(arr);
}

function lowerCase(){
    myArray.forEach((element) => console.log(element.toLowerCase()));
}

function upperCase(){
    myArray.forEach((element) => console.log(element.toUpperCase()));
}

processElements(myArray, lowerCase);
processElements(myArray, upperCase);

//Exercise 4
function simulateAsyncOperation(value, funk){
    funk(value);
}


function giveBack(value) {
    setTimeout(() => {
        console.log(value);
    }, 2000)
}

simulateAsyncOperation(155, giveBack);

//Exercise 5
function somethingWrong(callback){
    let error = "Error found!";
    let result = "You got it!";
    let num = Math.floor(Math.random() * 10);
    if(num == 3) {
        callback(error);;
    } else {
        callback(result);;
    }
}

function callback(error, result) {
    if(error) {
       console.log(error);
    } else {
    console.log(result);
    }
}

somethingWrong(callback);


//Exercise 6
function addEvent(callback){
   let myButton = document.getElementById('myButton');
   myButton.addEventListener('click', callback);
}

function change(){
    document.getElementById("myButton").style.color = "red";
}

addEvent(change);


//Level-Up
function funkOne(callback){
    setTimeout(() => {
        console.log("I'm number one!");
        callback(funkThree);
    }, 2000)
}

function funkTwo(callback){
    setTimeout(() => {
    console.log("I'm number two!");
    callback(funkFour);
    }, 2500)
}

function funkThree(callback){
    setTimeout(() => {
        console.log("I'm number three!");
        callback();
        }, 1000)
    }

function funkFour(){
    setTimeout(() => {
        console.log("I'm number four!");
        }, 500)
    }

funkOne(funkTwo);