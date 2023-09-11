$(function () {
  $('*', '.container>div>div').filter(':first-child').css({
    /*
    + $( selector , context )

    context : an element / jQuery / Selector

    Context : A DOM Element, Document, jQuery or selector to use
    as context. By default, selectors perform their searches within
    the DOM starting at the document root. However, an alternate
    context can be given for the search by using the optional second
    parameter to the $() function. For example, to do a search
    within an event handler, the search can be restricted like so:

    $(selector , this)

    Internally, selector context is implemented with the .find() method,
    so $(selector , this ) is equivalent to $( this ).find( selector ).

  */

    border: '2px solid yellow'
  });
});
