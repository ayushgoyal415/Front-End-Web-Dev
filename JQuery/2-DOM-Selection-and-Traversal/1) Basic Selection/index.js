$(function () {
  $(`p, button`).css({
    /*

    To use any of the meta-characters ( such as  !"#$%&'()*+,./:;<=>?@[\]^`{|}~ )
    as a literal part of a name, it must be escaped with with two backslashes: \\.
    For example, an element with id="foo.bar", can use the selector $("#foo\\.bar"). 
     
      no symbol -> select element
      * -> select all
      . -> select class
      # -> select id


      Multiple Selector
      + SYNTAX : “selector1, selector2, selectorN”

      Selects all the elements that match any of the specified selectors.
      The order of the DOM elements in the returned jQuery object may not
      be identical, as they will be in document order. 
  
    */
    color: 'red'
  });

  $('.grand-selection div').css({
    /*
    
      + Selector A [space] selector B
    
      Grand Selection -> Selects all the descendants (ie children,
      grandchildren and so on) of parent A that match the selector B

    */

    border: '1px solid white'
  });

  $('.child-selection>div').css({
    /*
      + Selector A [>] selector B

      Child Selection -> Selects all direct child elements of parent A that
      match the selector B.

      The child selection (A > B) can be thought of as a more specific form
      of the selection when compared to grand selection (A B) in that it
      selects only first-level of descendants in the DOM tree.

    */

    border: '1px solid white'
  });

  $('.next-adjacent-selection label+input').css({
    /*
      + prev + next

      Selects all next elements matching "next" that are immediately
      preceded by a sibling "prev". Basically locates a pair of
      specified siblings placed next to each other and selects the
      second element from this pair.

      * We also have (prev ~ next)
      
      The notable difference between (prev + next) and (prev ~ siblings)
      is their respective reach. While the former reaches only to the
      immediately following sibling element, the latter extends that reach
      to all following sibling elements.

    */

    opacity: 1
  });

  $('.next-siblings-selection label~input').css({
    /*
      + prev + next

      Selects all next elements matching "next" that are immediately
      preceded by a sibling "prev". Basically locates a pair of
      specified siblings placed next to each other and selects the
      second element from this pair.

      * We also have (prev ~ next)
      
      The notable difference between (prev + next) and (prev ~ siblings)
      is their respective reach. While the former reaches only to the
      immediately following sibling element, the latter extends that reach
      to all following sibling elements.

    */

    opacity: 1
  });
});
