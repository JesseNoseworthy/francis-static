'use strict';

console.log('Developed by Jesse Noseworthy. You can find me online at JesseNoseworthy.com');

var heroSlide = function heroSlide() {
  $('.continue').on('click', function () {
    $(".hero").slideUp(1250);
    $(".content-wrapper").addClass('show');
  });
};

var flickityDotNames = function flickityDotNames() {
  $(".dot").each(function () {
    $('.dot:first-child').html('Resume');
    $('.dot:nth-child(2)').html('Projects');
    $('.dot:nth-child(3)').html('References');
    $('.dot:nth-child(4)').html('Media');
    $('.dot:last-child').html('Contact');
  });
};

var flickity = function flickity() {
  $('.image-break').flickity({
    prevNextButtons: false,
    wrapAround: true,
    cellAlign: 'left',
    percentPosition: false
  });
  // flickityDotNames();
};

var smoothScroll = function smoothScroll() {
  $('a[href*=#]').click(function () {
    var target = $(this.hash);
    $('html,body').animate({
      scrollTop: target.offset().top - 100
    }, 1000);
    return false;
  });
};

var showCurrentSection = function showCurrentSection() {
  var sections = $('.section'),
      links = $('.scroll-link');
  $(window).scroll(function () {
    "use strict";

    var currentPosition = $(this).scrollTop();
    links.removeClass('selected');
    sections.each(function () {
      var top = $(this).offset().top - 120,
          bottom = top + $(this).height();
      if (currentPosition >= top && currentPosition <= bottom) {
        $('a[href="#' + this.id + '"]').addClass('selected');
      }
    });
  });
};

var showNavBar = function showNavBar() {
  var menu = $('.navbar');
  $(window).scroll(function () {
    // the window scroll
    var y = $(this).scrollTop();
    var z = $('#resume').offset().top - 130;
    if (y >= z) {
      menu.removeClass('hide-nav').addClass('show-nav');
    } else {
      menu.removeClass('show-nav').addClass('hide-nav');
    }
  });
};

$(document).ready(function () {
  console.log("ready!");
  smoothScroll();
  showCurrentSection();
  showNavBar();
  // heroSlide();
  flickity();
});