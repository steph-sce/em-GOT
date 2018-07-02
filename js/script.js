$(document).ready(function () {


  /* SCROLL TOP */
  $('.gotop').click(function (e) {
    e.preventDefault();
    $('html').animate({
      scrollTop: 0
    }, 800)
  });

  /* TRI PERSONNAGES */

  /* ALL */
  $('.all').click(function () {
    $('.targaryen').show();
    $('.baratheon').show();
    $('.stark').show();
    $('.snow').show();
    $('.lannister').show();
  });

  /* LANNISTER*/
  $('.les-lannister').click(function () {
    $('.targaryen').hide();
    $('.baratheon').hide();
    $('.stark').hide();
    $('.snow').hide();
  });

  /* TARGARYEN */
  $('.les-targaryen').click(function () {
    $('.lannister').hide();
    $('.baratheon').hide();
    $('.stark').hide();
    $('.snow').hide();
  });

  /* BARATHEON */
  $('.les-baratheon').click(function () {
    $('.lannister').hide();
    $('.targaryen').hide();
    $('.stark').hide();
    $('.snow').hide();
  });

  /* STARK */
  $('.les-stark').click(function () {
    $('.lannister').hide();
    $('.targaryen').hide();
    $('.baratheon').hide();
    $('.snow').hide();
  });
});