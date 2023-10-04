/*
  + Selecting single elements
  * Selecting a specific element by using getElementById()
    - can select an id
  * Selecting anything using querySelector() (selects only the first element)
    - can select a tag name
    - can select a class name
    - can select an id name
*/
console.log('\u001b[32m id -> header-title : ', document.getElementById("header-title")); // No need to put '#' before id name as it is implied

console.log('\u001b[32m qs -> h2 : ', document.querySelector("h2")); // Outputs only 1 element but there are 2 such elements
console.log('\u001b[32m qs -> .title : ', document.querySelector(".title")); // Outputs only 1 element but there are 2 such elements
console.log('\u001b[32m qs -> #items : ', document.querySelector("#items"));

/*
  + Selecting multiple elements
  * Selecting multiple elements by referencing anything using querySelectorAll()
   - can select a class name
   - can select a tag name
  querySelectorAll() returns a 'NodeList' which can be used as an Array and
  array functions can directly be called upon it
  
  * Selecting multiple elements from a class using getElementsByClassName()
  - can only select a class name
  - no need to put dot operator before class name as it is implied
  getElementsByClassName() returns an 'HTMLCollection' which cannot be used as
  an array directly and thus in order to apply array methods, it has to be
  manually converted to an array

  * Selecting multiple elements from a class using getElementsByTagName()
  - can only select a tag name
  getElementsByTagName() also returns an HTMLCollection
  
*/
console.log('\u001b[32m qsa -> h2 : ', document.querySelectorAll("h2"));
console.log('\u001b[32m qsa -> .title : ', document.querySelectorAll(".title"));

console.log('\u001b[32m class -> List Group Item : ', document.getElementsByClassName("list-group-item")); // No need to put dot before class name as it is implied
console.log('\u001b[32m tag -> h2 : ', document.getElementsByTagName("h2"));
