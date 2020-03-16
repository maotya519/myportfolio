$(function () {
    var $body = $('body');
    $('#js__sideMenuBtn').on('click', function () {
      $body.toggleClass('side-open');
      $('#js__overlay').on('click', function () {
        $body.removeClass('side-open');

      });
    });
  });
  $(function() {
    let flag = true;
    $('.side-menu-btn').click(function() {
        if ( flag === true ) {
            console.log('true');
            $('.side-menu').css('display', 'block');
            flag = false;
        } else {
            console.log('false');
            $('.side-menu').css('display', 'none');
            flag = true;
        }
    });
  });
