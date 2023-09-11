const box = document.querySelector('input');
const msg1 = document.querySelector('#msg-1');
const msg2 = document.querySelector('#msg-2');
const msg3 = document.querySelector('#msg-3');
const msg4 = document.querySelector('#msg-4');

// input, keypress, keydown, keyup, focus, blur, cut, paste
box.addEventListener('input', input);

/** @param {KeyboardEvent} e */
function input(e) {
  if (e.key === 'Enter') e.preventDefault();
  /*

    The above code will prevent submission only for those events that :
      . record 'key' and/or 'code'
      . and fire before the key action gets completed

    Thus it works only for 'keydown' event.

  */

  if (e.type === 'input') {
    /*

      . Fires after input test is altered (added or deleted)

      + Fires for all ASCII characters, backspace and delete

      . Does not fire for 'enter', 'ctrl` etc
      . Does not record key and code

    */

    msg1.innerHTML = 'Type : ' + e.type;
    msg2.innerHTML = 'Val : ' + e.target.value;
    msg3.innerHTML = 'Code : ' + e.code;
    msg4.innerHTML = 'Key : ' + e.key;
  }

  if (e.type === 'keypress') {
    /*

      . Fires as soon as an ASCII character is entered
      . thus it fires the event even before the key action is completed

      + Fires for all ASCII characters

      . Does not fire for 'backspace', 'enter', 'del', 'ctrl' etc
      . Records key and code -
        . 'key' returns the ASCII character entered (eg. 'a' and 'A')
        . 'code' returns the key pressed (eg. '2' and '@' return digit2)

    */

    msg1.innerHTML = 'Type : ' + e.type;
    msg2.innerHTML = 'Val : ' + e.target.value;
    msg3.innerHTML = 'Code : ' + e.code;
    msg4.innerHTML = 'Key : ' + e.key;
  }

  if (e.type === 'keydown' || e.type === 'keyup') {
    /*

      . Keydown : When a key is pressed (even before release)
      . thus it fires the event even before the key action is completed

      . Keyup : When a key is released
      . thus it fires the event after the key action is completed
    
      + Both Fire for all keys

      . Records key and code (same as keypress)

    */

    msg1.innerHTML = 'Type : ' + e.type;
    msg2.innerHTML = 'Val : ' + e.target.value;
    msg3.innerHTML = 'Code : ' + e.code;
    msg4.innerHTML = 'Key : ' + e.key;
  }

  //. When input in focus
  if (e.type === 'focus') this.style.border = `1px solid blue`;

  //. When input not in focus
  if (e.type === 'blur') this.style.border = `1px solid rgb(182, 182, 182)`;

  //. Also have paste similarly
  if (e.type === 'cut') {
    const p = document.createElement('p');
    p.style.color = 'red';
    p.textContent = `* cutting is not allowed`;

    const main = document.getElementById('main');
    main.insertBefore(p, main.children[1]);

    setTimeout(() => p.remove(), 5000);
  }
}
