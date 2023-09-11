// '$' indicates that the function runs when document gets loaded
$(function () {
  // Syntax for using 'on' -> $(element).on(event, childSelector, data, function)

  //. Adding a click event listener to all buttons
  $('button').on('click', function (e) {
    if ($(this).hasClass('counter')) {
      const s = this.innerHTML;
      const count = parseInt(s.substring(s.length - 1)) + 1;
      this.innerHTML = `Count : ${count}`;
    }
  });

  $('button').trigger('click'); //. Selecting all buttons
  $('button.odd').trigger('click'); //. Selecting all buttons with class odd
  $('#button1').trigger('click'); //. Selecting button with id button1
  $('button:first').trigger('click'); //. Selecting first button
  $('*').trigger('click'); //. Selecting all elements (buttons, body, head etc)
});
