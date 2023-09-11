$(function () {
  // Content Filters-------------------------------------------------------------------

  $(`.empty-selector div`).filter(':empty').css({
    /*
      + .filter(':empty') or ':empty'
      Select all elements that have no children (including text nodes).
      
      This selector is the inverse of :parent.

      One important thing to note with :empty (and :parent) is that child
      elements include text nodes.

      The W3C recommends that the <p> element have at least one child node,
      even if that child is merely text. Some other elements, on the other
      hand, are empty (i.e. have no children) by definition: <input>, <img>,
      <br>, and <hr>, for example.

      Don't forget to first select elements using pure CSS selector to get
      performance boost.

    */
    border: '1px solid white'
  });

  $(`.parent-selector div`).filter(':parent').css({
    /*
      Inverse of :empty

      To obtain the parents or ancestors of an existing jQuery set, see the
      methods -> .parent() and .parents().

    */
    border: '1px solid white'
  });

  $(`.has-selector div`).has('div').css({
    /*
      + .has() or ':has(selector)'

      Selects elements which contain at least one element that matches
      the specified selector. This element does not need to be a direct child.

      Don't forget to first select elements using pure CSS selector to get
      performance boost.

    */
    border: '1px solid white'
  });

  $(`.contains-selector span`).filter(`:contains('Hello')`).css({
    /*
      + .filter(':contains(text)') or ':contains(text)'
      text: A string of text to look for. As with attribute selectors,
      it can be written as a bare word or surrounded by quotes
      
      
      ~ Case sensitive.
      
      Select all elements that contain the specified text. The matching
      text can appear directly within the selected element, in any of
      that element's descendants, or a combination thereof.
      
      Don't forget to first select elements using pure CSS selector to get
      performance boost.

    */
    color: 'red'
  });

  // Child Filters----------------------------------------------------------------------
  //~ There are also type-of child selectors for each of the below mentioned selectors

  $('.first-child-selector div').filter(':first-child').css({
    /*
      + ':first-child'
      + ':nth-child(1)'

      Selects all elements that are the first child of their parent.

      ~ Note : :first is not same as :first-child. While this matches only a single
      ~ element, :first-child can match more than one: One for each parent.
      
    */

    border: '1px solid white'
  });

  $('.last-child-selector div').filter(':last-child').css({
    /* Same as first-child */
    border: '1px solid white'
  });

  $('.nth-child-selector div').filter(':nth-child(3)').css({
    /*
      + ':nth-child(n)'

      * Argument
      - Accepts an integer 'n' (n starts from 1)
      - Accepts 'odd' and 'even'
      - Accepts an equation (basically a mathematical expression)

      The :nth-child(n) pseudo-class is easily confused with the .eq(n) call, even though the two
      can result in dramatically different matched elements. With :nth-child(n), all children are
      counted, regardless of what they are, and the specified element is selected only if it matches
      the selector attached to the pseudo-class. With the .eq(n) call only the selector attached to
      the pseudo-class is counted, not limited to children of any other element, and the (n+1)th one
      (n is 0-based) is selected.
      
    */

    border: '1px solid white'
  });

  $('.nth-last-child-selector div').filter(':nth-last-child(3)').css({
    /*
      Same as nth-child but it begins counting from the end
    */

    border: '1px solid white'
  });

  $('.only-child-selector div').filter(':only-child').css({
    /*
      Selects all elements that are the only child of their parent.
      If the parent has other child elements, nothing is matched.
    */

    border: '1px solid white'
  });

  // Index Filters----------------------------------------------------------------------

  $('.first-selector div').first().css({
    /*
      + .first() or ':first'
      + .eq(0) or ':eq(0)'
      + .lt(1) or ':lt(1)'
      
      ~ Note : :first is not same as :first-child. While this matches only a single
      ~ element, :first-child can match more than one: One for each parent.

      Don't forget to first select elements using pure CSS selector to get
      performance boost.
      
    */

    border: '1px solid white'
  });

  $('.last-selector div').last().css({
    /* Same as first */
    border: '1px solid white'
  });

  $('.index-selector div').eq(3).css({
    /*
      + .eq(idx) or ':eq(idx)'

      The index-related selectors (:eq(), :lt(), :gt(), :even, :odd) filter
      the set of elements that have matched the expressions that precede them. 

      - Follows zero based indexing
      - Negative values count from end

      Select the element at index n within the matched set.

      Don't forget to first select elements using pure CSS selector to get
      performance boost.
      
    */

    border: '1px solid white'
  });

  $('.negative-index-selector div').eq(-3).css({
    border: '1px solid white'
  });

  $('.even-selector div').even().css({
    /*
      + .even() or ':even'

      - Follows zero based indexing
      In particular, note that the 0-based indexing means that, counter-intuitively,
      :even selects the first element, third element, and so on within the matched set.

      Don't forget to first select elements using pure CSS selector to get
      performance boost.
      
    */

    border: '1px solid white'
  });

  $('.odd-selector div').odd().css({
    /* Same as even*/

    border: '1px solid white'
  });

  $('.slice-selector div').slice(4, 6).css({
    /*
      + .slice(start, stop) or ':gt(start)' or ':lt(stop)'

      * Arguments

      Start : An integer indicating the 0-based position at which the elements begin
      to be selected. If negative, it indicates an offset from the end of the set.

      Stop : An integer indicating the 0-based position at which the elements stop being
      selected. If negative, it indicates an offset from the end of the set. If omitted,
      the range continues until the end of the set.

      Don't forget to first select elements using pure CSS selector to get
      performance boost.
      
    */

    border: '1px solid white'
  });

  // Misc Filters----------------------------------------------------------------------

  $('.not-selector div').not(':parent').css({
    /*
      + .not(selector) or ':not(selector)'

      Selects all elements that do not match the given selector
        or
      Remove elements from the set of matched elements
      
      
      Can pass multiple selectors using a comma
      
    */

    border: '1px solid white'
  });

  $('.animate-selector button').on('click', function () {
    /*
      + .filter(':animated') or ':animated'

      Select all elements that are in the progress of an animation at
      the time the selector is run.

      Because :animated is a jQuery extension and not part of the CSS
      specification, queries using :animated cannot take advantage of
      the performance boost provided by the native DOM querySelectorAll()
      method. To achieve the best performance when using :animated to
      select elements, first select the elements using a pure CSS selector,
      then use .filter(":animated").
    
    */

    $('.animate-selector div').filter(':animated').toggleClass('alter-color');
  });

  $('.container *').filter(':header').css({
    /*

      Selects all elements that are headers, like h1, h2, h3 and so on.
      + .filter(':header') or ':header'

      Don't forget to first select elements using pure CSS selector to get
      performance boost.
      
    */

    fontFamily: 'Arial',
    fontStyle: 'italic',
    margin: '0px',
    marginBottom: '5px'
  });

  $('.focus-selector button').on('focus blur', function () {
    /*
      + ':focus'
      
      If you are looking for the currently focused element, $(document.activeElement)
      will retrieve it without having to search the whole DOM tree.
    
    */

    const element = $(this);
    element.toggleClass('focused', element.is(':focus'));
  });

  $('.hidden button').on('click', function () {
    /*
    + .filter(':hidden') or ':hidden'
    
    Selects all elements that are hidden. An element is assumed to be hidden
    if it or any of its parents consumes no space in the document.

    :visible selector is opposite of :hidden selector

    * Elements can be considered hidden for several reasons:
    . They have a CSS display value of none.
    . An ancestor element is hidden, so the element is not shown on the page.
    . They are form elements with type="hidden".
    . Elements that are hide after an animation
    
    * Elements can be considered visible when they can't be seen:
    . Elements with visibility: hidden
    . Elements with opacity: 0
    . Their width and height are explicitly set to 0.
    . When elements hide during animations, the element is considered to be visible until the end of the animation.

    Elements that are not in a document are not considered to be visible as
    jQuery does not if they will be visible when appended to a document.

    During animations to show an element, the element is considered to be
    visible at the start of the animation.

  */
    const hidden_items = $('.hidden-selector *').filter(':hidden');
    $(this).text(hidden_items.length);
    console.log(hidden_items);
  });

  /*
  
    * Other filters include :

    - .filter(':target')
    - .filter(':root') -> selects document root
    - .filter(':lang()') -> selects based on language. Accepts language to select in as argument


    * Useful Form Selectors

    .filter(':input')
      - Selects all input, textarea, select and button elements
      - Basically selects all form controls

    .filter(':text')
      - Selects all input elements of type text
      - The :text selector selects input elements that have no specified type attribute
        (in which case type="text" is implied).
      - Difference between $(":text") and $(`[type="text"]`) :
          . $( "<input>" ).is( "[type=text]" ); // false
          . $( "<input>" ).is( ":text" ); // true

    .filter(':checked')
      - Matches all elements that are checked or selected
      - Works for checkboxes, radio buttons, and options of select elements
      - To retrieve only the selected options of select elements, use the :selected selector

    .filter(':selected')
      - Selects all elements that are selected
      - Works for <option> elements. It does not work for checkboxes or radio inputs

    .filter(':disabled')
      - Selects all elements that are disabled
      - Although their resulting selections are usually the same, $(':disabled') is subtly different
        from the $(`[disabled]`) attribute selector. The :disabled matches elements that are actually
        disabled while [disabled] only checks for the existence of the disabled attribute.

      - The :disabled selector should only be used for selecting HTML elements that support the
        disabled attribute (button, input, optgroup, option, select, textarea, menuitem, and fieldset)

    .filter(':enabled')
      - Selects all elements that are enabled
      - Although their resulting selections are usually the same, :enabled selector is subtly different
        from :not([disabled]); :enabled selects elements that have their boolean disabled property
        strictly equal to false, while :not([disabled]) selects elements that do not have a disabled
        attribute set (regardless of its value).
      - The :enabled selector should only be used for selecting HTML elements that support the
        disabled attribute (button, input, optgroup, option, select, textarea, menuitem, and fieldset)


    ~ Useless Form Selectors

    .filter(':button')
      - Selects all button elements and elements of type button
      . For better performance, use $(`button, [type="button"]`)

    .filter(':password)
      - Selects all elements of type password
      . For better performance, use $(`[type=password]`)

    .filter(':checkbox')
      - Selects all elements of type checkbox
      . For better performance, use $(`[type="checkbox"]`)

    .filter(':image')
      - Selects all elements of type image
      . For better performance, use $(`[type="image"]`)

    .filter(':reset')
      - Selects all elements of type reset
      . For better performance, use $(`[type="reset"]`)

    .filter(':file')
      - Selects all elements of type file
      . For better performance, use $(`[type="file"]`)

    .filter(':radio')
      - Selects all elements of type radio
      . For better performance, use $(`[type=radio]`)
      - To select a set of associated radio buttons, use: $("input[name=gender]:radio")

    .filter(':submit')
      - Selects all elements of type submit
      . For better performance, use input[type="submit"], button[type="submit"]
      - This selector typically applies to button or input elements.
      - Note that some browsers treat <button> element as type="submit" implicitly while
        others (such as IE) do not. To ensure that markup works consistently across all
        browsers and guarantee that it is possible to consistently select buttons that will
        submit a form, always specify a type property.


  */
});
