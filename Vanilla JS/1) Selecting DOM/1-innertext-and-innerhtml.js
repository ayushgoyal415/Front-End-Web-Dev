/*
  * Difference between textContent and innerText :
  - innerText does not show useless text (eg. the text which is hidden
    and useless whitespace)
  - textContent will show the text literally as defined inside HTML

  * For most purposes they function the same
*/

const headerTitle = document.getElementById('header-title');
headerTitle.innerHTML = /*HTML*/ `

  <h1>Hello
    <span style="display : none">123</span>
  </h1>

`;

console.log("\u001b[32m textContent : ", headerTitle.textContent);
console.log("\u001b[32m innerText : ", headerTitle.innerText);
