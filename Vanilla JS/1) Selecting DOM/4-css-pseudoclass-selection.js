//* CSS Attribute Selectors

// Selects all elements that are 'input' and are of type 'text'
const text = document.querySelector(`input[type="text"]`);
text.placeholder = 'Start typing...';

// Selects all elements that are 'input' and are of type 'submit'
const submit = document.querySelector(`input[type="submit"]`);
submit.value = 'SEND';


//* CSS pseudo-class Selectors

// Selects all elements that are 'li' and are 'first' child of their parent
const firstItems = document.querySelectorAll(`li:first-child`);
firstItems.forEach(item => (item.style.color = 'green'));

// Selects all elements that are 'li' and are 'second' child of their parent
const secondItems = document.querySelectorAll(`li:nth-child(2)`);
secondItems.forEach(item => (item.style.color = 'orange'));

// Selects all elements that are 'li' and are 'last' child of their parent
const lastItems = document.querySelectorAll(`li:last-child`);
lastItems.forEach(item => (item.style.color = 'red'));

// Selects all elements that are 'li' and are 'even' child of their parent
const oddItems = document.querySelectorAll(`li:nth-child(even)`);
oddItems.forEach(item => (item.style.backgroundColor = 'black'));
