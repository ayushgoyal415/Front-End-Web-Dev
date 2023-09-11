const test_box = document.querySelector('.test-box');

/*
  + Hover Events
  - mouseenter -> when mouse enters the parent
  - mouseenter -> when mouse leaves the parent
  - mouseover -> when mouse enters the parent or a child of the parent 
  - mouseout -> when mouse leaves the parent or a child of the parent
  - mousemove -> when mouse moves inside parent/child (gives diff values)
*/

// test_box.addEventListener("mouseenter", mouse);
// test_box.addEventListener("mouseleave", mouse);
// test_box.addEventListener("mouseover", mouse);
// test_box.addEventListener("mouseout", mouse);
// test_box.addEventListener('mousemove', mouse);

let over_count = 0, out_count = 0; // prettier-ignore

/** @param {PointerEvent} e */
function mouse(e) {
  const msg = document.querySelector('.msg');
  if (e.type == 'mouseenter' || e.type == 'mouseleave')
    msg.innerHTML = /*HTML*/ ` ${e.type} `;

  if (e.type == 'mouseover') {
    over_count++;
    msg.innerHTML = /*HTML*/ `
      ${e.type} : ${over_count}
    `;
  }

  if (e.type == 'mouseout') {
    out_count++;
    msg.innerHTML = /*HTML*/ `
      ${e.type} : ${out_count}
    `;
  }

  if (e.type == 'mousemove')
    msg.innerHTML = /*HTML*/ `
    XPos : ${e.offsetX} &nbsp; YPos : ${e.offsetY}
  `;
}
