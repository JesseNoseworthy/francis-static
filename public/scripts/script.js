'use strict';

console.log('working');

var heroSlide = function heroSlide() {
  $('.continue').on('click', function () {
    $(".hero").slideUp(1250);
    $(".content-wrapper").addClass('show');
  });
};

var flickityDotNames = function flickityDotNames() {
  $(".dot").each(function () {
    $('.dot:first-child').html('about');
    $('.dot:nth-child(2)').html('resume');
    $('.dot:last-child').html('projects');
  });
};

var flickity = function flickity() {
  $('.content-wrapper').flickity({
    carouselCell: 'anchor',
    contain: true
  });
  flickityDotNames();
};

$(document).ready(function () {
  console.log("ready!");
  heroSlide();
  flickity();
});