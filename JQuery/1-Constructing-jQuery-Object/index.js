//. Function to execute when document is ready
/*
  . $(callback) -> an alias for $( document ).ready()
    - callback is a function to execute when the DOM is ready

  
  . $(noConflict) -> Relinquish jQuery's control of the $ variable.

  Many JS libraries use $ as a fxn or variable name, just as jQuery does.
  In jQuery's case, $ is just an alias for jQuery, so all functionality
  is available without using $. If you need to use another JS library
  alongside jQuery, return control of $ back to the other library with a
  call to $.noConflict().
  
  * Old references are not lost
  Old references of $ are saved during jQuery initialization; noConflict()
  simply restores them.

  * Combining with .ready()
  This technique is especially effective in conjunction with the .ready()
  method's ability to alias the jQuery object, as within callback passed to
  the .ready() you can use $ if you wish without fear of conflicts later.

*/

//. Functions that return a jQuery Object instance
/*

  .$(), .$(null / undefined / [] / "")
    - returns a jQuery object of length 0

  . $(selector, ?context)
    - selector is a string containing containing selector expression
    - context can be a selector / element / jQuery Object to be used as a context
    - returns all matched elements wrapped in a jQuery Object
    - returns a jQuery object of length 0 if no element gets selected
  
  .$(DOM element)
    - returns the element wrapped in a jQuery Object

  .$(array of DOM elements)
    - returns the elementArray wrapped in a jQuery object

  .$(jQuery Object)
    - returns a clone of the passed jQuery object

  .$(JS object)
   - returns the JS object wrapped in jQuery object


  * Considerations while wrapping a JS Object inside a jQuery Object

  At present, the only operations supported on plain JS objects wrapped in
  jQuery are: .data(),.prop(),.on(), .off(), .trigger(), .triggerHandler()

  The use of .data() (or any method requiring .data()) on a plain object
  will result in a new property on the object called jQuery{randomNumber}
  (eg. jQuery123).

  .trigger() v/s .triggerHandler()

  Should .trigger( "eventName" ) be used, it will search for an "eventName"
  property on the object and attempt to execute it after any attached jQuery
  handlers are executed. It does not check whether the property is a function
  or not. To avoid this behavior, .triggerHandler( "eventName" ) should be
  used instead.

*/

//. Functions that create a jQuery object from a newly created DOM element on the fly
/*

  .$(html, attributes)
    - html is a string defining a single, standalone, HTML element
      (e.g. <div/> or <div></div>)
    - attributes is an object of attributes, events, and methods to
      call on the newly-created element.

  .$(html, ?ownerDocument)
    - html is a string of HTML to create on the fly.
      Note that this parses HTML, not XML.
    - ownerDocument is a document in which the new elements will be
      created.

  * How does jQuery differentiate between html and selector strings
  .For explicit parsing of a string to HTML, use the $.parseHTML() method.

  If a string is passed as the parameter to $(), jQuery examines it to see if it
  looks like HTML (i.e., it starts with <tag ... >). If not, the string is
  interpreted as a selector expression. But if the string appears to be an HTML
  snippet, jQuery attempts to create new DOM elements as described by the HTML.
  
  Then a jQuery object is created and returned that refers to these elements.
  You can perform any of the usual jQuery methods on this object.


  * How to pass in the owner document argument

  By default, elements are created with an .ownerDocument matching the document
  into which the jQuery library was loaded. Elements being injected into a different
  document should be created using that document, e.g.,
  .$("<p>hello frame</p>", $("#my_frame").prop("contentWindow").document).


  * How does jQuery create elements

  If HTML is complex (eg multiple tags with attributes),the actual creation of the
  elements is handled by the browser's 'innerHTML' mechanism. In most cases, jQuery
  creates a new <div> element and sets the innerHTML property of the element to the
  HTML snippet that was passed in.
  
  When the parameter has a single tag (with optional closing tag or quick-closing)
  . $( "<img />" ) or $( "<img>" ), $( "<a></a>" ) or $( "<a>" ),
  jQuery creates the element using the native JavaScript .createElement() function.


  * Pitfalls

  When passing in complex HTML, some browsers may not generate a DOM that exactly
  replicates the HTML source provided. As mentioned, jQuery uses the browser's
  innerHTML property to parse the passed HTML and insert it into the current document.
  During this process, some browsers filter out certain elements such as :
  .<html>, <title>, or <head> elements
  As a result, the elements inserted may not be representative of the original string.

  Filtering isn't, however, limited to these tags. For example, Internet Explorer prior
  to version 8 will also convert all href properties on links to absolute URLs, and
  Internet Explorer prior to version 9 will not correctly handle HTML5 elements without
  the addition of a separate compatibility layer.

  * Overcoming pitfalls

  To ensure cross-platform compatibility, the snippet must be well-formed.
  
    - Tags that can contain other elements should be paired with a closing tag:
      .$( "<a href='https://jquery.com'></a>" );

    - Tags that cannot contain elements may be quick-closed or not:
      .$( "<img>" );
      .$( "<input>" );

  * Problems with text Nodes
  - When passing HTML to jQuery(), note that text nodes are not treated as DOM elements.
    With the exception of a few methods (such as .content()), they are generally ignored
    or removed.
  - jQuery() requires the HTML string to start with a < (i.e text nodes cannot appear at
    the front of the HTML string).


  * Passing attributes as a second argument

  ~ Note : If the second argument is passed, the HTML string in the first argument must
  ~ represent a simple element with no attributes. 
    
  The second argument to jQuery() can accept a plain object consisting of a superset of
  the properties/attributes that can be passed to the .attr() method.
  - In addition to attributes, the following can also be passed as properties
    - Event types can be passed inside .on property
    - The following jQuery methods can be passed inside .methodName property
      .val, .css, .html, .text, .data, .width, .height, or .offset

  Note : Ideally a second argument containing arguments should be avoided. Instead use
  chaining to add attributes after creating an object.

*/

/*

  Ensuring that the code written below only executes when the document is ready
  At the same time also ensuring that $ does not create an problems

*/
$.noConflict();
jQuery(function ($) {
  //. Creating a jQuery object from a JS object
  const jQ = $({ name: 'zen', speed: 100 });
  jQ.prop('name', 'santro');
  console.log(jQ.prop('name'));
  jQ.on('info', e => console.log(e.target.name, e.target.speed));
  jQ.triggerHandler('info');

  //. Creating an element by passing attributes as second argument
  $('<div></div>', {
    class: 'my-div',
    on: {
      mouseenter(e) {
        $(this).css({ opacity: 0.7 });
      },
      mouseleave(e) {
        $(this).css({ opacity: 0.5 });
      },
      mousedown(e) {
        $(this).css({ opacity: 1 });
      },
      mouseup(e) {
        $(this).css({ opacity: 0.7 });
      }
    },
    css: {
      height: '50px',
      width: '50px',
      backgroundColor: 'black',
      opacity: 0.5
    }
  }).appendTo('body');

  //. Creating an element and then adding other attributes by chaining
  $('<div></div>')
    .addClass('my-div')
    .on({
      mouseenter(e) {
        $(this).css({ opacity: 0.7 });
      },
      mouseleave(e) {
        $(this).css({ opacity: 0.5 });
      },
      mousedown(e) {
        $(this).css({ opacity: 1 });
      },
      mouseup(e) {
        $(this).css({ opacity: 0.7 });
      }
    })
    .css({
      height: '50px',
      width: '50px',
      backgroundColor: 'black',
      marginTop: '10px',
      opacity: 0.5
    })
    .appendTo('body');
});
