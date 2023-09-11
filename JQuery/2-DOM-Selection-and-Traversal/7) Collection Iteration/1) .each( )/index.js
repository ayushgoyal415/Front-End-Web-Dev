$(function () {
  $('button').on('click', function () {
    /*
    Iterate over a jQuery object, executing a callback function for each matched element.

    * The callback function is passed two arguments :
      . i -> index of current DOM element
      . e -> current DOM element

    The .each() iterates over the DOM elements that are part of a jQuery object. Note that
    the callback is fired in the context of the current DOM element, so the keyword 'this'
    refers to the element. To access a jQuery object instead of the regular DOM element, use
    $( this ).

    The loop can be stopped from within the callback function by returning false.

    * Implicit iteration
    Most jQuery methods that return a jQuery object also loop through the set of elements in
    the jQuery collection — a process known as implicit iteration. When this occurs, it is
    often unnecessary to explicitly iterate with the .each() method.
    
    .each() is unnecessary here:
    $( "li" ).each(function() {
      $( this ).addClass( "foo" );
    });
 
    . $( "li" ).addClass( "bar" ); // Correct Way

  */

    const target = $('.container div div');

    let max_height = 0;
    target.each(function (i, e) {
      max_height = Math.max(max_height, $(this).height());
    });

    target.height(max_height);
  });
});
