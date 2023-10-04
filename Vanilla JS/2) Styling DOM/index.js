const header = document.querySelector('header');
header.style.borderBottom = 'solid 3px #000';

// Adding multiple styles to multiple elements at once using forEach
const items = document.querySelectorAll('li');
const new_styles = { backgroundColor: 'black', color: 'white' };
items.forEach(val => Object.assign(val.style, new_styles));

// Adding style by adding a new class
const titles = document.querySelectorAll('h2');
titles.forEach(val => val.classList.add('new'));
