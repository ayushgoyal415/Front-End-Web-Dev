//* Creating element and setting attributes
const element = document.createElement('ul');
element.id = 'new-list';

function get_item(s) {
  const li = document.createElement('li');
  li.innerHTML = s;
  li.id = 'new-item';

  // Can also set class name using li.className and li.classList.add();
  li.setAttribute('class', 'new-items');

  return li;
}

//* Adding a child nodes by using .innerHTML
element.innerHTML += /* HTML */ `
  <style>
    .new-items {
      border: 1px solid black;
      color: red;
      background-color: lightPink;
    }
  </style>
`;

//* Adding child nodes by using .appendChild()
element.appendChild(get_item('List Item 1'));
element.appendChild(get_item('List Item 2'));
element.appendChild(get_item('List Item 3'));
element.appendChild(get_item('List Item 4'));

/*
  * Adding child nodes by using .insertBefore()

  - .appendChild() inserts the child node into the parent to the end
  - .insertBefore() inserts the child node into the parent before the
    specified sibling
  
  - .insertBefore() accepts two args -
    - the child node to be inserted
    - the sibling node before which we want to insert the child node
  
  Note : Both these functions must be called by the parent node into which
  we want to insert the child node.
*/

const parent_ele = document.querySelector('main');
parent_ele.insertBefore(element, parent_ele.lastElementChild);

//* Removing Elements and attributes
const new_items = document.querySelector('#new-list');
new_items.removeChild(new_items.lastElementChild);
new_items.lastElementChild.remove();
new_items.lastElementChild.removeAttribute('class');
