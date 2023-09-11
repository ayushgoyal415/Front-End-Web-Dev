$(function () {
  $('.add div div:first').add('.add div div:last').css({
    /*

      + .add(selector/jQuery/element/html)

      Given a jQuery object that represents a set of DOM elements, the .add() method
      constructs a new jQuery object from the union of those elements and the ones
      passed into the method. The argument to .add() can be pretty much be anything :
      - Selector
      - jQuery Object
      - DOM elements
      - HTML Snippet

      . Sorting
      This method does not append the elements to the existing collection in the order they
      were passed in the argument. Instead the order of returned elements is as follows :

      - When all elements are members of the same document, the resulting collection will
        be sorted in order of each element's appearance in the document.

      - If the collection consists of elements from different documents or ones not in any
        document, the sort order is undefined.
        
      To create a jQuery object with elements in a well-defined order and without sorting
      overhead, use the $(array_of_DOM_elements) signature.

      ~ Note :
      The following will not save the added elements, because the .add() method creates a
      new set and leaves the original set unchanged:

      const p = $( "p" );
      p.add( "div" ); // WRONG, p will not change

      . Creating new elements using .add()
      Using an HTML snippet as the .add() method's argument, we can create additional elements
      on the fly and add those elements to the matched set of elements.

      eg. $( "p" ).add( "<span>New</span>" ).appendTo( document.body );

      . Combining with .not()
      To reverse the .add() you can use .not( elements | selector ) to remove elements from the
      jQuery results

    */
    border: '1px solid white'
  });

  $('.addBack div div').first().addBack().css({
    /*

      + .addBack(?selector)

      Add the previous set of elements on the stack to the current set, optionally filtered
      by a selector.

      jQuery objects maintain an internal stack that keeps track of changes made to the matched
      set of elements. When one of the DOM traversal methods is called, the new set of elements
      is pushed onto the stack. The .addBack() can the select previous set of elements if desired.

    */
    border: '1px solid white'
  });

  /*

    + .end()

    End the most recent filtering operation in the current chain and return the set of
    matched elements to its previous state.

    Most of jQuery's DOM traversal methods operate on a jQuery object instance and
    produce a new one, matching a different set of DOM elements. When this happens,
    it is as if the new set of elements is pushed onto a stack that is maintained
    inside the object. Each successive filtering method pushes a new element set onto
    the stack. If we need an older element set, we can use end() to pop the sets back
    off of the stack.

    The end() method is useful primarily when exploiting jQuery's chaining properties

  */
  $('.end')
    .find('>div>div')
    .css({ border: '1px solid white' })
    .end()
    .find('>div')
    .css({ border: '1px solid yellow' })
    .end()
    .css({ border: '2px solid red' });
});
