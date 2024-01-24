// let myButton = document.getElementById('myButton')

// myButton.addEventListener('click', () => {
//     console.log("Hello there!");
// })

// let myText = document.getElementById('myText')
// let checker = false;
// myText.addEventListener('mouseover', (event) => {
//     event.target.style.color = "yellow";
// })

// myText.addEventListener('mouseout', (event) => {
//     event.target.style.color = "purple";
// })


// let myTextField = document.getElementById('myTextField')

// myTextField.addEventListener('keydown', (event) => {
//    console.log("This is keydown: " + event.code);
// })

// myTextField.addEventListener('keyup', (event) => {
//     console.log("This is keyup: " + event.code);
//  })



//  let mySubmission = document.getElementById('myForm')
//  mySubmission.addEventListener('submit', submission)
    
//  function submission(e) {
//     e.preventDefault();
//     let myData = document.getElementById('data')
//     let myOtherData = document.getElementById('data2')
//     console.log(myData.value + " " + myOtherData.value)
// }

// let myFinalText = document.getElementById('myFinalText')

// myFinalText.addEventListener('click', (e) => {
//     e.target.style.color = "blue";

// })

// myFinalText.addEventListener('mouseover', (e) => {
//     e.target.style.fontSize = "60px";
// })

// myFinalText.addEventListener('mouseout', () => {
//     alert("Hey! Come back!");
// })


let parentDiv = document.getElementById('parentDiv')
let childDiv = document.getElementById('childDiv')

parentDiv.addEventListener('click', parentFunction)

function parentFunction() {
    console.log("I'm number 1")
}

childDiv.addEventListener('click', childFunction)

function childFunction() {
    console.log("I'm number 2")
}
