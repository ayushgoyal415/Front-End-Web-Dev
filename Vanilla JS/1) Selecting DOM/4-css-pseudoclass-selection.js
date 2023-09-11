const headerTitle = document.getElementById("header-title");
const header = document.getElementById("main-header");

/*
  * Using tag along with type attribute to select element
  In this webpage we have two input elements -
   - First is of 'text' type
   - Second is of 'submit' type -> looks like a button
  We can select these boxes in the same ways as we can select in CSS
*/

const text = document.querySelector(`input[type="text"]`);
const submit = document.querySelector(`input[type="submit"]`);

text.placeholder = "Start typing...";
submit.value = "SEND";

/*
  * Using CSS pseudo-classes
    - last-child
    - nth-child()
    - nth-child(odd)
*/

const lastItem = document.querySelector(`.list-group-item:last-child`);
lastItem.style.color = "red";

const secondItem = document.querySelector(`.list-group-item:nth-child(2)`);
secondItem.style.color = "blue";

const oddItems = document.querySelectorAll(`.list-group-item:nth-child(odd)`);
oddItems.forEach(item => (item.style.backgroundColor = "lightGray"));
