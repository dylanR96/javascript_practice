/* var button = document.getElementById('changeClass');
var elements = document.getElementsByTagName('div');

button.addEventListener('click', function() {
    for(let i = 0; i < elements.length; i++){
        let element = elements[i];
    if (element.classList.contains('myClass')) {
        element.classList.remove('myClass');
        element.classList.add('newClass');
    } else if (element.classList.contains('newClass')) {
        element.classList.remove('newClass');
        element.classList.add('myClass');
    } else {
        // If neither class is present, add the first one
        element.classList.add('myClass');
    }
    }
});
*/

let listButton = document.getElementById("changeList");
let list = document.getElementById("myList");

listButton.addEventListener('click', function() {
    let newListElement = document.createElement("li");
    let numberOfItems = list.childElementCount;
    let newListItem = document.createTextNode("This list has " + numberOfItems + " list items");
    newListElement.appendChild(newListItem);
    list.appendChild(newListElement);
    let childNodes = list.childNodes;
    let newListElement2 = document.createElement("li");
    for (let i = 0; i < childNodes.length; i++) {
        let newListItem = document.createTextNode(childNodes[i].textContent);
        newListElement2.appendChild(newListItem);
    }
    list.appendChild(newListElement2);
});