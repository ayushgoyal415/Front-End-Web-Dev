const itemList = document.querySelector('#items');

/*
  + Grabbing child nodes/elements (one at a time)
  * .firstChild / .firstElementChild and .lastChild / .lastElementChild

  Note : .firstElementChild & .lastElementChild are better because they
  pick only those children that are actual 'elements' whereas their
  counterparts ie. (.firstChild, .lastChild) will pick the first & last
  child node respectively even if there is whitespace and not actual
  elements.

*/

console.log(
  '\u001b[32m Inner text of first child : ',
  itemList.firstChild.innerText
);

console.log(
  '\u001b[32m Inner text of first element child : ',
  itemList.firstElementChild.innerText
);

/*
  + Grabbing child nodes/elements (multiple nodes)
  * .children -> returns an HTML collection -> cannot use Array functions
  * .childNodes -> returns a NodeList -> can use Array functions
  
  Note : .children is better than .childNodes because .children functions
  similar to .firstElementChild and .lastElementChild and thus does not
  consider the useless whitespace, present in the HTML, as child nodes.
  
*/
const items = itemList.children;
let ans = [];
for (let i = 0; i < items.length; i++) ans.push(items[i].innerText);
console.log('\u001b[32m Children : ', ans.join(' -> '));

ans = [];
itemList.childNodes.forEach(val => ans.push(val.innerText));
console.log('\u001b[32m Child Nodes : ', ans.join(' -> '));

/*
  + Grabbing parent node/element
  * .parentNode / .parentElement

  Note : We can only grab a single parent element at a time as an element
  can only have a single parent.

  Note : In most cases, .parentElement is same as .parentNode. The only
  difference comes when a node's parentNode is not an element in which case
  the .parentElement returns null.

*/
console.log('\u001b[32m Parent Node of documentElement : ', document.documentElement.parentNode); // Returns Document node
console.log('\u001b[32m Parent element of documentElement : ', document.documentElement.parentElement); // Returns null

// Parent Chain
itemList.parentNode.style.border = '4px solid lightBlue';
itemList.parentNode.parentNode.style.border = '4px solid lightPink';
itemList.parentNode.parentNode.parentNode.style.border = '4px solid red';

/*
  + Grabbing sibling nodes/elements (one at a time)
  * .nextSibling / .nextElementSibling
  * .previousSibling / .previousElementSibling

  Note : .nextElementSibling is better than .nextSibling

*/
itemList.children[1].nextElementSibling.style.color = 'blue';
itemList.previousElementSibling.style.color = 'red';
