$(function () {
  /*
    - Mouse Events -> click, dblclick, mouseenter, mouseleave, mousedown, mouseup

    - Keyboard Events -> keypress, keydown, keyup
    
    - Form events -> submit, change, focus, blur
    
    - document/window events -> load, resize, scroll, unload
  */

  //. Adding multiple event listeners to button using .on() and chaining
  $('button')
    .on('mouseenter', function on_enter() {
      this.style.opacity = 0.8;
    })
    .on('mouseleave', function on_leave() {
      this.style.opacity = 1;
    });

  //. Adding multiple event listeners to input bar using .on() and passing an object
  $('#bar').on({
    keydown(e) {
      if (e.key === 'Control') e.target.type = 'text';
    },

    keyup(e) {
      if (e.key === 'Control') e.target.type = 'password';
    }
  });
});
