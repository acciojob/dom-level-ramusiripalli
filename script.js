//your JS code here. If required.
let element = document.getElementById("level");

let level = 0;

// traverse up the DOM tree
while (element) {
  level++;
  element = element.parentElement;
}

alert("The level of the element is: " + level);
