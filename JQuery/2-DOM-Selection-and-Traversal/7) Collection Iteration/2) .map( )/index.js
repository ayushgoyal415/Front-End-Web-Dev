$(function () {
  //. Adding a function to $.fn prototype
  //. Within such functions, 'this' points to the jQuery object making the function call
  $.fn.equalize = function (i, e) {
    /*

      map() calls the callback function for each element in the
      jQuery Object and constructs a new jQuery object containing
      the returned values.As the return value is a jQuery object,
      which contains an array, it's very common to call .get() on
      the result to work with a basic array.

      * The callback function is passed two arguments :
      . i -> index of current DOM element
      . e -> current DOM element

    */
    const heights = this.map((i, e) => $(e).height()).get();
    
    //. Setting heights of all elements equal to max height
    const maxHeight = Math.max(...heights);
    this.height(maxHeight);
  };

  $('button').on('click', function () {
    $('.container div div').equalize();
  });
});
