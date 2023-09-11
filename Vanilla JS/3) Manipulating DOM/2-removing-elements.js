const items = document.querySelector("#items");

// Removing a child node
items.removeChild(items.lastElementChild);

// Removing an element itself
items.lastElementChild.remove();

// Removing an attribute
items.removeAttribute("class");
