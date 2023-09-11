/*
  + Click Events
  - click -> when both mousedown & mouseup are executed inside parent/child
  - dblclick -> when 2 click are performed quickly inside parent/child
  - mousedown -> when mouse click is pressed inside parent/child
  - mouseup -> when mouse click is lifted inside parent/child
*/

const test_box = document.querySelector('.test-box');

test_box.addEventListener('click', mouse);
test_box.addEventListener('dblclick', mouse);
test_box.addEventListener('mousedown', mouse);
test_box.addEventListener('mouseup', mouse);

/** @param {PointerEvent} e */
function mouse(e) {
  const msg = document.querySelector('.msg');
  if (e.type == 'click' || e.type == 'dblclick') {
    msg.innerHTML = /*HTML*/ `${e.type} completed`;
  }
  if (e.type == 'mouseup') {
    test_box.style.backgroundColor = 'rgb(200, 200, 200)';
    msg.innerHTML = /*HTML*/ `${e.type}`;
  }
  if (e.type == 'mousedown') {
    test_box.style.backgroundColor = 'rgb(150, 150, 150)';
    msg.innerHTML = /*HTML*/ `${e.type}`;
  }
}
