$(function () {
  $('.children').children(':first-child').css({
    /*
      + .children(?selector)

      Given a jQuery object that represents a set of DOM elements,
      this method allows to search through the children of these
      elements in the DOM tree and construct a new jQuery object.

      . v/s .find()
      The .children() method differs from .find() in that .children()
      only traverse a single level down the DOM tree while .find() can
      traverse down multiple levels to select descendant elements.

      . v/s .contents()
      The .children() method does not return text nodes; to get all
      children including text and comment nodes, use .contents().

      . Argument 
      The .children() method optionally accepts a selector expression
      to match elements against.

    */
    border: '1px solid white'
  });

  $('.find').find(':first-child').css({
    /*
      + .find(selector/element/jQuery)

      Get the descendants of each element in the current set of
      matched elements, filtered by a selector, jQuery object,
      or element.

      ~ The selector expression is required in a call to .find().
      If we need to retrieve all of the descendant elements, we can
      pass in the universal selector '*' to accomplish this.

    */
    border: '1px solid white'
  });

  $('.parent div div').first().parent().css({
    /*
      + .parent(?selector)

      Get the parent of each element in the current set of matched
      elements, optionally filtered by a selector.

      . v/s .parents()
      The .parent() method only traverse a single level up the DOM tree.

    */
    border: '1px solid white'
  });

  $('.parents div div').first().parents('div').css({
    /*
      + .parents(?selector)

      Get the ancestors of each element in the current set of matched
      elements, optionally filtered by a selector.

      Constructs a new jQuery object from the matching elements ordered
      from immediate parent on up; the elements are returned in order
      from the closest parent to the outer ones.

    */
    border: '2px solid yellow'
  });

  $('.parentsUntil div div').first().parentsUntil('body', ':odd').css({
    /*
      + .parentsUntil(?selector/jQuery/element , ?filter)

      Get the ancestors of each element in the current set of matched
      elements, up to but not including the element matched by the
      selector, DOM node, or jQuery object.

      * Arguments

      . selector/jQuery object/element
      If the selector is not matched or is not supplied, all ancestors
      will be selected; in these cases it selects the same elements as
      the .parents() method does with no selector.

      . filter
      The method optionally accepts a selector expression for its second
      argument. If this argument is supplied, the elements will be filtered
      by testing whether they match it.

    */
    border: '2px solid yellow'
  });

  $('.next div div').first().next().css({
    /*
      + .next(?selector)

      Get the immediately following sibling of each element in
      the set of matched elements. If a selector is provided,
      retrieves the next sibling only if it matches that selector

    */
    border: '1px solid white'
  });

  $('.nextAll div div').first().nextAll(':odd').css({
    /*
      + .nextAll(?selector)

      Get all following siblings of each element in the set of
      matched elements, optionally filtered by a selector.

    */
    border: '1px solid white'
  });

  $('.nextUntil div div').first().nextUntil(':last-child', ':odd').css({
    /*
      + .nextUntil(?selector/jQuery/element , ?filter)

      . Similar to parentsUntil
      Get all following siblings of each element up to but not including
      the element matched by the selector, DOM node, or jQuery object passed.

    */
    border: '1px solid white'
  });

  $('.prev div div').last().prev().css({
    border: '1px solid white'
  });

  $('.prevAll div div').last().prevAll(':odd').css({
    border: '1px solid white'
  });

  $('.prevUntil div div').last().prevUntil(':first-child', ':odd').css({
    border: '1px solid white'
  });

  $('.siblings div div').first().siblings(':odd').css({
    /*
      + .siblings(?selector)

      Get the siblings of each element in the set of matched elements,
      optionally filtered by a selector.

      . The original element is not included among the siblings
      However, if the original collection contains more than one element,
      they might be mutual siblings and will both be found. If you need
      an exclusive list of siblings, use : 
      
      $collection.siblings().not($collection)

      . v/s nextAll()
      nextAll() selects only the siblings that appear after the element
      where as siblings() selects all siblings ie. prevAll + nextAll

    */
    border: '1px solid white'
  });

  $('.closest div div').first().closest('div').css({
    /*
      + .closest(?selector/element/jQuery)

      For each element in the set, get the first element that matches the
      selector by testing the element itself and traversing up through its
      ancestors in the DOM tree.

      . v/s parents()
      The .parents() and .closest() methods are similar in that they both
      traverse up the DOM tree. The differences between the two include :

      closest() : Begins with the current element
      parent() : Begins with the parent element

      closest() : Travels up the DOM tree until it finds a match for the
      supplied selector
      parent() : Travels up the DOM tree to the document's root element,
      adding each ancestor element to a temporary collection; it then
      filters that collection based on a selector if one is supplied.

      closest() : the returned jQuery object contains at max 1 element
      for each element in the original set
      parent() : the returned jQuery object may contain any number of
      elements for each element in the original set

    */
    border: '1px solid white'
  });

  // Also there is .offsetParent()
});
