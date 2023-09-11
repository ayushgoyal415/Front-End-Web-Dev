const grab = s => document.querySelector(s);

grab("#button1").addEventListener("click", load_user);
grab("#button2").addEventListener("click", load_users);

function load_user() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "user.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const user = JSON.parse(this.responseText);
      grab("#user").innerHTML = /*HTML*/ `
        <ul>
          <li>ID : ${user.id}</li>
          <li>Name : ${user.name}</li>
          <li>Email : ${user.email}</li>
        </ul>
      `;
    }
  };
  xhr.send();
}

function load_users() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const users = JSON.parse(this.responseText);

      for (let i of users) {
        const ul = document.createElement("ul");

        ul.innerHTML = /*HTML*/ `
          <li>ID : ${i.id}</li>
          <li>Name : ${i.name}</li>
          <li>Email : ${i.email}</li>
        `;
        grab("#users").appendChild(ul);
      }
    }
  };
  xhr.send();
}
