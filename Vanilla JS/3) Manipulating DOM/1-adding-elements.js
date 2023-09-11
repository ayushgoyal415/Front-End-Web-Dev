/*
  + Creating an element
  * Using .createElement
*/
const element = document.createElement("ul");

/*
  + Setting attributes of an element
  * By adding properties one by one
*/
element.className = "list"; //. Adding a class name
element.classList.add("list-group"); //. Adding a class that already exists
element.id = "list1"; //. Adding id
element.setAttribute("title", "New List"); //. Adding an attribute

/*
  + Adding a child nodes to the newly created element
  * Using .innerHTML
  * Can also use .appendChild() / .insertBefore() (see below)
*/
element.innerHTML = /*HTML*/ `

  <style>
    .new-items{
      background-color : lightPink;
      border : 1px solid black;
      margin-bottom : -1px;
    }
  </style>
  
  <li class="list-group-item new-items" >List item 1</li>
  <li class="list-group-item new-items" >List item 2</li>
  <li class="list-group-item new-items" >List item 3</li>
  <li class="list-group-item new-items" >List item 4</li>

`;

/*
  + Inserting child nodes into existing elements
  * Using .appendChild() and .insertBefore()

  - .appendChild() inserts the child node into the parent to the end
  - .insertBefore() inserts the child node into the parent before the
    specified sibling
  
  - .insertBefore() accepts two args -
    - the child node to be inserted
    - the sibling node before which we want to insert the child node
  
  Note : Both these functions must be called by the parent node into which
  we want to insert the child node.
*/

const parent_ele = document.querySelector(".card");
parent_ele.insertBefore(element, parent_ele.lastElementChild);
