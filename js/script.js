$(document).ready(function () {
  /* SLIDER */
  $(document).ready(function () {
    $('.single-item').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000
    });
  });

  /* SCROLL TOP */
  $('.gotop').click(function (e) {
    e.preventDefault();
    $('html').animate({
      scrollTop: 0
    }, 800)
  });
});