const itemInput = document.querySelector('input[type="text"');
const sel = document.querySelector(".options");

sel.addEventListener("change", select);
sel.addEventListener("input", select); //. Similar to change

function select(e) {
  if (e.type == "change" || e.type == "input") {
    itemInput.value = e.target.value;
    document.getElementById("msg-1").innerHTML = e.type;
  }
}
