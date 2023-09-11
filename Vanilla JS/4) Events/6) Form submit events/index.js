const form = document.getElementById("form-body");
const items = document.getElementById("items");
const form_input = document.getElementById("form-input");
const search = document.getElementById("search");

form.addEventListener("submit", add_item);
items.addEventListener("click", remove_item);
search.addEventListener("keyup", search_item);

function add_item(e) {
  e.preventDefault();

  // Checking and giving back error if item is empty
  if (form_input.value === "") {
    const div = document.createElement("div");
    div.innerHTML = /*HTML*/ `
    <p id ="error">* Item name is required</p>
      <style>
        #error{
          color : red;
          margin-left : 10px;
        }
      </style>
    `;

    form.appendChild(div);

    setTimeout(() => div.remove(), 3000);

    return;
  }

  // Creating a new element for item list by grabbing value from input box
  const new_item = document.createElement("li");
  new_item.className = "list-group-item";
  new_item.appendChild(document.createTextNode(form_input.value));

  // Creating a delete button for this new item
  const new_del_btn = document.createElement("button");
  new_del_btn.id = "del-btn";
  new_del_btn.innerHTML = /*HTML*/ `&#10006;`;
  new_item.appendChild(new_del_btn);

  items.appendChild(new_item);

  form_input.value = "";
}
function remove_item(e) {
  if (e.target.classList.contains("delete-button"))
    if (confirm("Are You Sure?")) e.target.parentElement.remove();
}
function search_item(e) {
  const text_to_find = e.target.value.toLowerCase();
  Array.from(items.children).forEach(item => {
    const item_name = item.firstChild.textContent;
    if (item_name.toLowerCase().indexOf(text_to_find) == -1) {
      item.style.display = "none";
    } else {
      item.style.display = "flex";
    }
  });
}
