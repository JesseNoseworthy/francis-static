console.log('Developed by Jesse Noseworthy. You can find me online at JesseNoseworthy.com');

const flickity = function() {
  $('.image-break').flickity({
    wrapAround: true,
    pageDots: false,
    imagesLoaded: true
  });
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

const videoSize = function() {
  $('#video').css({height: $(window).innerHeight() - 100 + 'px' });

  $('#video').resize(function(){
    $('#video').css({height: $(window).innerHeight() - 100 + 'px' });
  });
};

$( document ).ready(function() {
  console.log( "ready!" );
  smoothScroll();
  showCurrentSection();
  showNavBar();
  flickity();
  videoSize();
});