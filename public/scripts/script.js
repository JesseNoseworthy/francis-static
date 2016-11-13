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
  $('.content-wrapper').flickity({
    prevNextButtons: false,
    cellAlign: 'left',
    percentPosition: false
  });
  flickityDotNames();
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
  // Storing each class in a variable
  var sections = $('.section'),
      links = $('.scroll-link');
  // Now we target the window
  $(window).scroll(function () {
    "use strict";
    // Where we are on the screen

    var currentPosition = $(this).scrollTop();
    // Failsafe
    links.removeClass('selected');
    // Loop through
    sections.each(function () {
      // Accounting for the fixed header
      var top = $(this).offset().top - 120,

      // Height of the sfreen
      bottom = top + $(this).height();
      // If the current position is greater or equal to the top and 
      // is less than or eqaul to the bottom
      if (currentPosition >= top && currentPosition <= bottom) {
        // The current item we're on will take on the class of 
        // '.selected', which will change the color
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
  // flickity();
});