$(function () {
  /*

    Check the current matched set of elements against a selector,
    element, or jQuery object and return true if at least one of
    these elements matches the given arguments.

    Unlike other filtering methods, .is() does not create a new
    jQuery object. Instead, it allows you to test the contents of
    a jQuery object without modification. This is often useful
    inside callbacks, such as event handlers.

  */

  // .is( selector )
  $('.selector').on('click', function (e) {
    const target = $(e.target);
    if (target.is(':first-child') || target.is(':last-child'))
      console.log('hello');
    else console.log('bye');
  });

  //. is( selection )
  $('.selection').on('click', function (e) {
    const target = $(e.target);
    const first_children = $(':first-child');
    const last_children = $(':last-child');
    if (target.is(first_children) || target.is(last_children))
      console.log('hello');
    else console.log('bye');
  });

  //. is( element(s) )
  $('.element').on('click', function (e) {
    const target = $(e.target);
    const level3 = document.querySelectorAll('.element .level3');
    if (target.is(level3)) console.log('hello');
    else console.log('bye');
  });

  // .is( predicate )
  $('.predicate').on('click', function (e) {
    /*
      Calls the callback function (a predicate) for each element in the
      jQuery collection, if the function returns true, .is() returns
      true as well.

      The callback is passed two arguments :
      - idx : element's index in the jQuery collection
      - ele : Current DOM element

      Within the function, this refers to the current DOM element.

    */
    const target = $(e.target);
    const ans = target.is(function (idx, ele) {
      return $(this).is(':first-child') || $(this).is(':last-child');
    });

    if (ans) console.log('Hello');
    else console.log('bye');
  });
});
