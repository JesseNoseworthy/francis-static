'use strict';

console.log('Developed by Jesse Noseworthy. You can find me online at JesseNoseworthy.com');

var flickity = function flickity() {
  $('.image-break').flickity({
    wrapAround: true,
    pageDots: false,
    imagesLoaded: true
  });
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

var videoSize = function videoSize() {
  $('#video').css({ height: $(window).innerHeight() - 100 + 'px' });

  $('#video').resize(function () {
    $('#video').css({ height: $(window).innerHeight() - 100 + 'px' });
  });
};

$(document).ready(function () {
  console.log("ready!");
  smoothScroll();
  showCurrentSection();
  showNavBar();
  flickity();
  videoSize();
});