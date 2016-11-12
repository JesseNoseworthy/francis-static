console.log('working');

const heroSlide = function() {
  $('.continue').on('click', function () {
      $(".hero").slideUp(1250);
      $(".content-wrapper").addClass('show');
  })
}

const flickity = function() {
  $('.content-wrapper').flickity({
    carouselCell: 'anchor',
    contain: true
  });

  $(".dot").each(function() {
    $('.dot:first-child').html('about');
    $('.dot:nth-child(2)').html('resume');
    $('.dot:last-child').html('projects');
  })

}

const makeContentActive = function() {
  if ($('.sidebar-link-about').hasClass('active')) {
    $('.about').addClass('active');
  } else if ($('.sidebar-link-resume').hasClass('active')) {
    $('.resume').addClass('active');
  } else if ($('.sidebar-link-projects').hasClass('active')) {
    $('.projects').addClass('active');
  }
}

const makeSidebarActive = function() {
  $(".sidebar-link").each(function() {
    $(this).on('click', function () {
      $('.active').removeClass('active');
      $(this).addClass('active');
      makeContentActive();
    });
  })
}

$( document ).ready(function() {
  console.log( "ready!" );
  heroSlide();
  flickity();
  // makeSidebarActive();
});