/** @param {string} s */
const $ = s => document.querySelector(s);

$('#button').addEventListener('click', load_users);

/** @param {PointerEvent} e */
function load_users(e) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users', true);
  xhr.onload = function () {
    if (this.status === 200) {
      const users = JSON.parse(this.responseText);
      let output = '';
      for (let i of users) {
        output += /*HTML*/ `
          <div class="user">
            <img src="${i.avatar_url}" width="70px" height="70px"/>
            <ul>
              <li>ID : ${i.id}</li>
              <li>Login : ${i.login}</li>
            </ul>
          </div>
        `;
      }
      const style = /*HTML*/ `
        <style>
          .user{
            display : flex;
            background : #f4f4f4;
            padding : 10px;
            margin-bottom : 10px
          }
          .user ul{
            list-style : none;
          }
        </style>
      `;
      output += style;
      $('#users').innerHTML = output;
    }
  };
  xhr.send();
}
