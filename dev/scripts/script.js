console.log('Developed by Jesse Noseworthy. You can find me online at JesseNoseworthy.com');

const heroSlide = function() {
  $('.continue').on('click', function () {
      $(".hero").slideUp(1250);
      $(".content-wrapper").addClass('show');
  })
};

const flickityDotNames = function() {
  $(".dot").each(function() {
    $('.dot:first-child').html('about');
    $('.dot:nth-child(2)').html('resume');
    $('.dot:last-child').html('projects');
  })
};

const flickity = function() {
  $('.content-wrapper').flickity({
    prevNextButtons: false,
    cellAlign: 'left',
    percentPosition: false,
  });
  flickityDotNames();
};

$( document ).ready(function() {
  console.log( "ready!" );
  heroSlide();
  flickity();
});