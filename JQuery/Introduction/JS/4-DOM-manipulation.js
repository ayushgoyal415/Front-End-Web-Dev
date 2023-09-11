$(function () {
  $('#manipulation-container').on('click', function (e) {
    if (e.target.id === 'text') $('#manipulation-box p').text('Hello');

    if (e.target.id === 'value') $('#manipulation-box input').val('Hello');

    if (e.target.id === 'html')
      $('#manipulation-box p').html(`New Manipulation Box`);

    if (e.target.id === 'addClass') $('#manipulation-box').addClass('red');

    if (e.target.id === 'removeClass') {
      $('#manipulation-box').removeClass('red');
    }

    if (e.target.id === 'toggleClass') {
      $('#manipulation-box').toggleClass('red');
    }

    if (e.target.id === 'css') {
      $('#manipulation-box').css({
        backgroundColor: 'lightPink',
        border: '2px solid black',
        borderBottom: 'none',
        fontWeight: 'bold',
        color: 'black'
      });
    }

    if (e.target.id === 'remove') $('#manipulation-box p').remove();

    if (e.target.id === 'empty') $('#manipulation-box').empty();
  });
});
