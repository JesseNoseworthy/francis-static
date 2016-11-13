console.log('Developed by Jesse Noseworthy. You can find me online at JesseNoseworthy.com');

const heroSlide = function() {
  $('.continue').on('click', function () {
      $(".hero").slideUp(1250);
      $(".content-wrapper").addClass('show');
  })
};

const flickityDotNames = function() {
  $(".dot").each(function() {
    $('.dot:first-child').html('Resume');
    $('.dot:nth-child(2)').html('Projects');
    $('.dot:nth-child(3)').html('References');
    $('.dot:nth-child(4)').html('Media');
    $('.dot:last-child').html('Contact');
  })
};

const flickity = function() {
  $('.image-break').flickity({
    prevNextButtons: false,
    wrapAround: true,
    cellAlign: 'left',
    percentPosition: false,
  });
  // flickityDotNames();
};

const smoothScroll = function() {
  $('a[href*=#]').click(function() {
    const target = $(this.hash);
      $('html,body').animate({
        scrollTop: target.offset().top - 100
      }, 1000);
      return false;
  });
}

const showCurrentSection = function() {
  const sections = $('.section'), links = $('.scroll-link');
  $(window).scroll(function() {
    "use strict";
    const currentPosition = $(this).scrollTop();
    links.removeClass('selected');
    sections.each(function() {
      const top = $(this).offset().top - 120, bottom = top + $(this).height(); 
      if (currentPosition >= top && currentPosition <= bottom) {
        $('a[href="#' + this.id + '"]').addClass('selected');
      }
    }); 
  });
}

const showNavBar = function() {
  const menu = $('.navbar');
  $(window).scroll(function () {
    // the window scroll
    const y = $(this).scrollTop();
    const z = $('#resume').offset().top - 130;
    if (y >= z) { 
      menu.removeClass('hide-nav').addClass('show-nav');
    } else { 
      menu.removeClass('show-nav').addClass('hide-nav'); 
    }
  });
};

$( document ).ready(function() {
  console.log( "ready!" );
  smoothScroll();
  showCurrentSection();
  showNavBar();
  // heroSlide();
  flickity();
});