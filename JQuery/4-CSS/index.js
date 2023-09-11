jQuery.noConflict();

jQuery(function ($) {
  // .css(string / array)
  /*
    .css(string)
    returns a string containing the value of computed style property for the
    first element in the set of matched elements.

    .css(array)
    returns an object containing property-value pairs (properties are the CSS
    property names and the values are the values of computed style properties

    ~ NOTE : An element should be connected to the DOM when calling .css() on it.
    ~ If it isn't, jQuery may throw an error.

    . Automatic translation of property name
    You can simply use the CSS property names (eg. background-color), jQuery
    will translate the word for each browser automatically.

    . Variation in return value
    Note that the computed style of an element may not be the same as the
    value specified for that element in a style sheet. For example, :
      - computed styles of dimensions are almost always pixels
      - Different browsers may return different CSS color values but these
        will be logically equal "#FFF", "#ffffff", "rgb(255,255,255)"

    . Accessing shorthand properties
    Retrieval of shorthand CSS properties (e.g., margin, background, border),
    although functional with some browsers, is not guaranteed.

    . Accessing CSS Custom Properties (aka CSS Variables)
    Note that you need to provide the property name as-is, camelCasing won't work:
    .$( "p" ).css( "--custom-property" )

  */
  $('.css div').on({
    mouseover(e) {
      const jQ = $(e.target);
      const tip = jQ.children('.tooltip');

      // Getting only property using string
      if (jQ.hasClass('level3')) {
        const S = jQ.css('background-color');
        tip
          .css({ display: 'block', left: 10, top: 20 })
          .html('background-color : ' + S);
      }

      // Getting multiple properties using an array
      if (jQ.hasClass('level2')) {
        const O = jQ.css(['display', 'gap']);
        const A = [];
        for (let i in O) A.push(`${i} : ${O[i]}`);
        tip.css({ display: 'block', left: 60, top: -15 }).html(A.join('<br>'));
      }
      if (jQ.hasClass('level1')) {
        const O = jQ.css(['display', 'padding', 'gap']);
        const A = [];
        for (let i in O) A.push(`${i} : ${O[i]}`);
        tip.css({ display: 'block', left: 200 }).html(A.join('<br>'));
      }
    },
    mouseout(e) {
      $(e.target).children('.tooltip').css({ display: 'none' });
    }
  });

  //. css(propertyName, propertyValue) and .css(object containing property value pairs)
  /*
    Set one or more CSS properties for the set of matched elements.

    * Arguments
    propertyName : string (supports automatic translation to allow CSS names)
    propertyValue : string / number
    function : receives index(i) and current property value(cpv)

    * Sending number as property value
    When a number is passed as the value, jQuery will convert it to a string and add px
    to the end of that string. If the property requires units other than px, convert the
    value to a string and add the appropriate units before calling the method.

    * Sending empty string as property value
    jQuery modifies the element's inline HTML style attribute by using : 
    . document.getElementById("ele").style.color = "green"
    
    Setting the value of a property to an empty string removes that property from an element
    if it has already been directly applied, whether in the HTML style attribute, through the
    css() method, or through direct DOM manipulation of the style property. As a consequence,
    the element's style for that property will be restored to whatever value was applied. So,
    this method can be used to cancel any style modification you have previously performed.
    It does not, however, remove a style applied in a CSS stylesheet or the <style> element.
    
    Warning: one notable exception is that, for IE 8 and below, removing a shorthand property
    such as border or background will remove that style entirely from the element, regardless
    of what is set in a stylesheet or <style> element.

    * Automatic property name prefixing
    the .css() setter will automatically take care of prefixing the property name. e.g,
    .css( "user-select", "none" ) will be converted to :
      .-webkit-user-select in Chrome/Safari
      .-moz-user-select in Firefox
      .-ms-user-select in IE 10

    * Accepts relative values
    The .css() method accepts relative values similar to .animate(). For example, if an element's
    padding-left was 10px, .css("padding-left", "+=15") would result in a total 25px.

    * Setting CSS variables (CSS custom properties)
    CSS Custom Properties (also called CSS Variables) are supported:
    .$( "p" ).css( "--custom-property", "value" )
    Note that you need to provide the property name as-is, camelCasing it won't work as it does for
    regular CSS properties.

  */

  // .css(function(i, cpv)) => string/number
  {
    let s = '';
    for (let i = 0; i < 256; i++) s += '<div><div class="tooltip"></div></div>';
    s = '<div>' + s + '</div>';
    $(s + s + s).appendTo('.set-css');

    $('.set-css>div>div')
      .css('background-color', function (i, cpv) {
        if (i <= 255) return `rgb(255, ${i}, ${i})`;
        if (i > 255 && i <= 511) return `rgb(${i - 256}, 255, ${i - 256})`;
        return `rgb(${i - 512}, ${i - 512}, 255)`;
      })
      .on({
        mouseenter(e) {
          const jQ = $(e.target);
          const backgroundColor = jQ.css('background-color');
          jQ.children()
            .css({ display: 'block', top: 50, backgroundColor, color: 'black' })
            .html(backgroundColor);
        },
        mouseleave(e) {
          $(e.target).children().css({ display: 'none' });
        }
      });
  }

  // .height(?string / ? number / ?function)
  /*
    Get the current computed height for the first element in the set of matched elements

    .height()
    The difference between .css( "height" ) and .height() is that the latter returns a
    unit-less pixel value (for example, 400) while the former returns a value with units
    intact (for example, 400px). The .height() method is recommended when an element's
    height needs to be used in a mathematical calculation.

    This method is also able to find the height of the window and document.

    Note that .height() will always return the content height, regardless of the value of
    the CSS box-sizing property. This may require retrieving the CSS height plus box-sizing
    property and then subtracting any potential border and padding on each element when the
    element has box-sizing: border-box. To avoid this penalty, use .css( "height" ) rather
    than .height().

    The number returned by dimensions-related APIs, including .height(), may be fractional in
    some cases. Code should not assume it is an integer. Also, dimensions may be incorrect
    when the page is zoomed by the user; browsers do not expose an API to detect this condition.

    The value reported by .height() is not guaranteed to be accurate when the element or its
    parent is hidden. To get an accurate value, ensure the element is visible before using
    height(). jQuery will attempt to temporarily show and then re-hide an element in order to
    measure its dimensions, but this is unreliable and (even when accurate) can significantly
    impact page performance.

    .height(value) -> Set the CSS height of every matched element
    value : string / number (assumed in px)
    string must contain unit (px or % or auto etc). If not provided then px is assumed

    .height(function(i, ch)) => string / number

    for eg. on height see .map()

  */

});
