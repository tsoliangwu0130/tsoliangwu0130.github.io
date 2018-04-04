$(document).on('click', '.scrolly', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
});
