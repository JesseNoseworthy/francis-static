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

var showNavBar = function showNavBar() {
  // Store the navbar in a variable
  var menu = $('.navbar');
  // Now we target the scroll
  $(window).scroll(function () {
    // the window scroll
    var y = $(this).scrollTop();
    // This value is equivalent to -100 of the #about section
    var z = $('#resume').offset().top - 130;
    // If the scroll is greater than or equal to -100 of #about
    if (y >= z) {
      // We will remove the .hide-nav class (which pushes a set amount
      // above the page)
      // Then we will add the .show-nav class
      menu.removeClass('hide-nav').addClass('show-nav');
    } else {
      // If that isn't the case, we will do the opposite and 
      // keep the nav hidden
      menu.removeClass('show-nav').addClass('hide-nav');
    }
  });
};

$(document).ready(function () {
  console.log("ready!");
  smoothScroll();
  showNavBar();
  // heroSlide();
  // flickity();
});