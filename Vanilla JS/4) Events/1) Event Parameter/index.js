const button = document.querySelector('.btn');
button.addEventListener('click', mouse);

function get_element() {
  const div = document.createElement('div');
  div.className = 'output-box';
  div.innerHTML = /*HTML*/ `<p class="msg"></p>`;
  document.querySelector('.outputs').appendChild(div);
  return div.firstChild;
}

/** @param {PointerEvent} e */
function mouse(e) {
  // Prevents the default action of the button
  e.preventDefault();

  // Prevents event from reaching any registered event listeners after the
  // current one finishes running and, when dispatched in a tree, also prevents
  // event from reaching any other objects.
  e.stopImmediatePropagation();

  // When dispatched in a tree, invoking this method prevents event from reaching
  // any objects other than the current object.
  e.stopPropagation();

  /*
    *There are different phases during lifecycle an event :
    - None -> when event has not started yet
    - Capturing Phase -> when event goes down to the element
    - Target Phase -> when event reach the element
    - Bubbling Phase -> Bubbling phase is when the event bubbles up from the element

  */
  get_element().innerHTML = `None : ${e.NONE}`;
  get_element().innerHTML = `Capturing : ${e.CAPTURING_PHASE}`;
  get_element().innerHTML = `Target : ${e.AT_TARGET}`;
  get_element().innerHTML = `Bubbling : ${e.BUBBLING_PHASE}`;

  // Event attributes
  get_element().innerHTML = `Event Type : ${e.type}`;

  // Positions of click w.r.t window
  get_element().innerHTML = `XPos wrt window : ${e.clientX}`;
  get_element().innerHTML = `YPos wrt window : ${e.clientY}`;

  // Positions of click w.r.t the button itself
  get_element().innerHTML = `XPos wrt element : ${e.offsetX}`;
  get_element().innerHTML = `YPos wrt element : ${e.offsetY}`;

  // Checking if additional keys were pressed or not
  get_element().innerHTML = `Alt Pressed : ${e.altKey}`;
  get_element().innerHTML = `Shift Pressed : ${e.shiftKey}`;
  get_element().innerHTML = `Ctrl Pressed : ${e.ctrlKey}`;

  // Event target attributes
  get_element().innerHTML = `Target Class : ${e.target.className}`;
}
