$(function () {
  /*

    * Params of the following functions :
    . Duration in milliseconds. Can also use 'slow' and 'fast'
    . All methods also take other optional parameter(s)
    . One of these optional params is a callback function

  */

  $('#animation-container').on('click', function (e) {
    if (e.target.id === 'hide') $('#animation-box').hide(1000);

    if (e.target.id === 'show') $('#animation-box').show(1000);

    if (e.target.id === 'fade_out') $('#animation-box').fadeOut(1000);

    if (e.target.id === 'fade_in') $('#animation-box').fadeIn(1000);

    if (e.target.id === 'fade_to_0.5') $('#animation-box').fadeTo(1000, 0.5);

    if (e.target.id === 'fade_to_1.0') $('#animation-box').fadeTo(1000, 1);

    if (e.target.id === 'slide_up') $('#animation-box').slideUp(1000);

    if (e.target.id === 'slide_down') $('#animation-box').slideDown(1000);

    //. Toggling
    if (e.target.id === 'toggle') $('#animation-box').toggle(1000);

    if (e.target.id === 'fade_toggle') $('#animation-box').fadeToggle(1000);

    if (e.target.id === 'slide_toggle') $('#animation-box').slideToggle(1000);

    //. Making queue of animations
    if (e.target.id === 'animate') {
      /*
      * Custom animation
      
      ~ Only numeric values can be animated (like "margin:30px").
      ~ String values cannot be animated (like "background-color:red"),
      ~ except for the strings "show", "hide" and "toggle".

      + Tip: Use "+=" or "-=" for relative animations

      Properties that can be animated :
      
      . borderWidth, borderBottomWidth AND Top, Right, Left
      . margin, marginBottom AND Top, Left, Right
      . padding, paddingBottom AND Top, Left, Right
      . bottom AND top, left, right
      . maxHeight AND Width
      . minHeight AND Width
      . backgroundPositionX AND Y
      
      . borderSpacing
      . opacity
      . outlineWidth
      . height
      . width
      . fontSize
      . letterSpacing
      . wordSpacing
      . lineHeight
      . textIndent
      
    */
      $('#animation-box')
        .animate({ opacity: 0.5, fontSize: '+=10' }, 5000)
        .animate({ opacity: 1, fontSize: '-=10' }, 5000);
    }

    //. Stopping current Animation
    if (e.target.id === 'stop_current') $('#animation-box').stop();

    //. Stopping entire Animation queue
    if (e.target.id === 'stop_queue') $('#animation-box').stop(true);

    //. Keep Animating -> using recursion
    if (e.target.id === 'keep_animating') {
      (function animate() {
        $('#animation-box').slideToggle(2000, animate);
      })();
    }

    //. Disabling animating effects
    if (e.target.id === 'toggle_effects') {
      /*

      . $.fx.off

      This is a property of global jQuery Object. When this property is set to true, all animation
      methods will immediately set elements to their final state when called, rather than displaying
      an effect. This may be desirable for a couple reasons:
        - jQuery is being used on a low-resource device.
        - Users are encountering accessibility problems with the animations.

      Animation effects can be turned back on by setting the property to false.

    */

      $.fx.off = !$.fx.off; //. Brilliant way of changing from true to false and vice-versa
    }
  });
});
