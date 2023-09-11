$(function () {
  // .addClass(string / array / function(i,ccn) => string/array/void)
  /*
  
    Adds the specified class(es) to each element in the set of matched elements

    Note : .addClass() adds a new class to class attribute of the element. This
    is a better approach than to modify the className property of elements.

    It's important to note that this method does not replace a class. It simply
    adds the class, appending it to any which may already be assigned to the
    elements. To replace all existing classes with another class, we can use the
    method .attr( "class", "newClass" ) instead.

    * Adding multiple classNames at once :

    . While using string as an argument
      multiple classNames can be added by separating classNames with a space :
      'className1 className2 className3 ...'

    . While using an array as an argument
      multiple classNames can be added by separating classNames with a comma :
      [className1, className2, className3, ...]

    . While using a string returning function as an argument
      function(i, ccn){
        return 'className1 className2 className3 ...'
      }
    . While using an array returning function as an argument
      function(i, ccn){
        return [className1, className2, className3, ...]
      }

  */

  $('.addClass-string div div').on('click', function (e) {
    $(e.target).nextAll().addBack().addClass('border click');
  });
  $('.addClass-array div div').on('click', function (e) {
    $(e.target).nextAll().addBack().addClass(['border click', 'color']);
  });
  $('.addClass-function div div').on('click', function (e) {
    $(e.target)
      .nextAll()
      .addBack()
      .addClass(function (i, ccn) {
        /*
      The function is called for each element in the current set.
      Basically it iterates one by one over each element.

      * Arguments
      . i(index) - an  integer denoting the index of current element in the set
      . ccn(current className(s)) - a string containing space separated ccn(s)

      Within this function, 'this' refers to the current element in the set

      * Return type
      
      We can either return a string containing space separated className(s)
      or an array containing className(s)
      
      The current element is assigned the new classes that are returned.

      No class is assigned if nothing is returned.

    */

        if ($(this).is(':first-child, :last-child'))
          return 'border click color';
        return ['border', 'click'];
      });
  });

  // .removeClass( ?string / ?array / ?function(i,ccn) => string/array/void)
  $('.removeClass-string div div').addClass('border click color').removeClass('color click'); // prettier-ignore
  $('.removeClass-array div div').addClass('border click color').removeClass(['color', 'click']); // prettier-ignore
  $('.removeClass-function div div').addClass('border click color').removeClass(function (i, ccn) {
      if ($(this).is(':first-child, :last-child')) return; //. Remove Nothing
    return 'click color'; //. Remove classes 'click' and 'color'
  }); // prettier-ignore
  $('.removeClass div div').removeClass(); //. removes all classes

  // .toggleClass(string / array / function , ?state)
  $('.toggleClass-string div div').on('click', function (e) {
    /*
    Add or remove one or more classes from each element in the
    set of matched elements, depending on either the class's
    presence or the value of the state argument.

    * Overloads
    . toggleClass(string, ?state)
    . toggleClass(Array ?state)
    . toggleClass(function(i, ccn, state), ?state) => string / array

    * Arguments
    . string : a string of className(s) to be toggled
    . array : an array of className(s) to be toggled
    . i : index of current element
    . ccn : a string containing className(s) of the current element
  
    state : a boolean (not just truthy/falsy) value to determine
    whether the class should be added or removed.

  */
    $(e.target).siblings().toggleClass('old-class border click color');
  });
  $('.toggleClass-string-state div div').on('click', function (e) {
    $(e.target).siblings().toggleClass('color border click', true);
    $(e.target).toggleClass('old-class', false);
  });
  $('.toggleClass-function div div').on('click', function (e) {
    $(e.target)
      .siblings()
      .toggleClass(function (i, ccn, state) {
        if ($(e.target).is(':first-child')) return 'color border click';
        return; // Toggles all classes
      });
  });

  // .hasClass(string) -> Determine whether "any" element in the set has the given class
  $('.hasClass').parent().on({
    mousedown() {
      $('.hasClass div').each(function (i, e) {
        if ($(e).hasClass('old-class')) $(e).addClass('border');
      });
    },
    mouseup: () => $('.hasClass div').removeClass('border')
  }); // prettier-ignore

  // .attr()
  $('.get-attr').on('click', function (e) {
    /*

      . attr(string) -> Returns attr value or undefined
      The .attr(string) method gets the attribute value for only the first element
      in the matched set. To get the value for each element individually, use a
      looping construct such as jQuery's .each() or .map() method.

      Attribute values are strings with the exception of a few attributes such as
      value and tabindex.

      Returns undefined for attributes that have not been set.

    */
    const jQ = $(e.target);
    console.log(jQ.attr('class'));
  });
  $('.set-attr div div').on('click', function (e) {
    /*
      . attr(string, value)
      "Adds" or "updates" the attr value for each element in the set
      The value can be supplied as a 'string' or a number or null
      If null, the specified attribute will be removed (as in .removeAttr()).
    */
    $(e.target).attr('class', 'border color click');
  });
  $('.set-attrs div div').on('click', function (e) {
    /*
      . attr(object) -> "Adds" or "updates" multiple attr values
      Accepts an object of attribute-value pairs to set.
    */
    $(e.target).attr({
      class: 'color border',
      id: 'click'
    });
  });
  $('.attr-function div div').on('click', function (e) {
    /*
      . attr(string, function(i, ca)) => string, number, null, undefined
      string : the name of the attribute to set
      i(index) : index of current element in the set
      ca(current attr) : a string containing the current value of attr
      'this' keyword refers to the current element
    
      The returned value(a string or a number) is set as the new value
      for the specified attribute for the current element in the set.

      If nothing is returned, or if undefined is returned, the current value
      is not changed. If null is returned, the specified attribute will be
      removed for the current element 

    */

    $(e.target).attr('class', function (i, ca) {
      if ($(this).is(':first-child, :last-child')) return 'border color click';
      return null;
    });
  });

  // .removeAttr(string) -> Remove attribute(s) from each element in the set
  $('.removeAttr div div').on('click', function (e) {
    $(e.target).removeAttr('class'); // Can supply multiple attributes by adding space
  });

  // .prop() and .removeProp()
  /*

    Everything other than that mentioned below is similar between .attr()
    and .prop() method

    Properties generally affect the dynamic state of a DOM element without
    changing the serialized HTML attribute. Examples include :
    .  the value property of input elements
    .  the disabled property of inputs and buttons
    .  the checked property of a checkbox
    
    The .prop() method should be used to set disabled and checked instead of
    the .attr() method. The .val() method should be used for getting and
    setting value.

    The .prop() method retrieves and sets property values, while the .attr()
    method retrieves attributes. The following properties are are considered
    properties (and not attributes) and thus retrieved and set by .prop() :

    . selectedIndex
    . tagName
    . ownerDocument
    . nodeName, nodeType
    . defaultChecked, defaultSelected
    . states of form elements eg. checked, selected, disabled

    * checked "attribute" v/s checked "property"

    According to the W3C forms specification, the checked attribute is a boolean
    attribute, which means the corresponding property is true if the attribute is
    present at all—even if, for example, the attribute has no value or is set to
    empty string value or even "false". This is true of all boolean attributes.

    Nevertheless, the most important concept to remember about the checked attribute
    is that it does not correspond to the checked property. The attribute actually
    corresponds to the defaultChecked property and should be used only to set the
    initial value of the checkbox. The checked attribute value does not change with
    the state of the checkbox, while the checked property does. Therefore, the
    cross-browser-compatible way to determine if a checkbox is checked is to use :

    . if ( elem.checked )
    . if ( $( elem ).prop( "checked" ) )
    . if ( $( elem ).is( ":checked" ) )

    The same is true for other dynamic attributes, such as selected and value.

    * .removeProp()

    Remove a property for the set of matched elements.

    Important: the .removeProp() method should not be used to remove native properties
    such as "checked", "disabled", "selected", or others. This will lead to unexpected
    behavior.

    It's almost always better to use .prop() to set native properties to false instead
    of removing them.

    In Internet Explorer prior to version 9, using .prop() to set a DOM element
    property to anything other than a simple primitive value (number, string, or
    boolean) can cause memory leaks if the property is not removed using the
    removeProp() method before the DOM element is removed from the document. To
    safely set values on DOM objects without memory leaks, use .data().


  */

  // .val(?value / ?function(i, cv))
  $('.get-val button').on('click', function (e) {
    /*
      . val()
      Get the current value of the first element in the set of matched elements.
      The .val() method is primarily used to get the values of form elements such
      as input, select and textarea.
      
      When called on an empty collection, it returns undefined.

    */
    console.log($('.get-val input').val());
  });
  $('.get-values button').on('click', function (e) {
    /*
      .val() -> Functionality on select
      When the first element in the collection is a select-multiple (i.e., a select
      element with the multiple attribute set), .val() returns an array containing
      the value of each selected option. As of jQuery 3.0, if no options are
      selected, it returns an empty array.

    */

    console.log($('.get-values select').val());
  });
  $('.set-val button').on('click', function (e) {
    /*
      A string of text, a number to assign as the value of input.
    */
    $('.set-val input').val('hello');
  });
  $('.set-values button').on('click', function (e) {
    /*
      val() allows you to pass an array of element values. This is useful
      when working on a jQuery object containing elements like :
      . <input type="checkbox">
      . <option> inside <select>
      . <input type="radio">

      In these cases, the inputs and the options having a value that matches
      one of the elements of the array will be checked/selected while those
      having a value that doesn't match one of the elements of the array will
      be unchecked or unselected, depending on the type.

      Setting values using this method (or using the native value property)
      does not cause the dispatch of the change event. For this reason, the
      relevant event handlers will not be executed. If you want to execute them,
      you should call .trigger( "change" ) after setting the value.

    */
    $('.set-values select').val(['Opt 1', 'Opt 2', 'Opt 3']);
  });
  $('.set-values-checkbox button').on('click', function (e) {
    $('.set-values-checkbox input').val(['Box 1', 'Box 2']);
  });
  $('.set-values-function button').on('click', function (e) {
    $('.set-values-function input').val(function (i, cv) {
      /*
        .i - index of current element
        .cv - value of current element
      */
      return cv.trim().toUpperCase();
    });
  });

  // .html(?htmlString / ? function())
  $('.get-html').on('click', function (e) {
    /*
      .html()

      Get the HTML contents of the first element in the set of matched elements.
      This method uses the browser's innerHTML property.

    */
    console.log($(e.target).html());
  });
  $('.set-html>div>div').on('click', function (e) {
    /*
      .html(string)

      When .html() is used to set an element's content, any content that was in that
      element is completely replaced by the new content. Additionally, jQuery removes
      other constructs such as data and event handlers from child elements before
      replacing those elements with the new content.

      By design, any jQuery constructor or method that accepts an HTML string —
      jQuery(), .append(), .after(), etc. — can potentially execute code. This
      can occur by injection of script tags or use of HTML attributes that
      execute code (for example, <img onload="">). Do not use these methods to
      insert strings obtained from untrusted sources such as URL query parameters,
      cookies, or form inputs. Doing so can introduce cross-site-scripting (XSS)
      vulnerabilities. Remove or escape any user input before adding to html.

    */
    $(e.target).html(``);
  });
  $('.set-html-function>div>div').on('click', function (e) {
    $(e.target).html(function (i, ch) {
      /*
        .i - index of current element
        .ch - html of current element
        'this' refers to current element
        
      */
      if ($(this).is(':first-child, :last-child')) return '';
    });
  });
});
