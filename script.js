//your JS code here. If required.
const element = document.getElementById("level");

let current = element;

let count = 0;

while(current){

    count++;

    current = current.parentElement;

}

alert(`The level of the element is: ${count}`);