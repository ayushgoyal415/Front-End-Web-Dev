const headerTitle = document.getElementById("header-title");
const header = document.getElementById("main-header");

header.style.borderBottom = "solid 3px #000";

// Adding multiple styles to multiple elements at once using for-loop
const items = document.getElementsByClassName("list-group-item");
for (let i = 0; i < items.length; i++) {
  Object.assign(items[i].style, {
    fontStyle: "italic",
    backgroundColor: "black",
    color: "white"
  });
}

// Adding style by adding a new class
const titles = document.getElementsByClassName("title");
for (let i = 0; i < titles.length; i++) {
  titles[i].classList.add("new");
}
