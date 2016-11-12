'use strict';

console.log('working');

// $(window).load(function() {
//   $(".hero").fadeOut(4000);
// })

$('.continue').on('click', function () {
  $(".hero").slideUp(1250);
});

$(".sidebar-link").each(function (index) {
  $(this).on('click', function () {
    $('.active').removeClass('active');
    $(this).addClass('active');
  });
});

// $('.sidebar-link-about').on('click', function () {
//   $(this).addClass('active');
//   if ($(this).hasClass('active')) {
//     console.log('acti');
//     $(".about").toggleClass('active');
//   }
// });

// $('.sidebar-link-resume').on('click', function () {
//   $(this).addClass('active');
//   if ($(this).hasClass('active')) {
//     console.log('acti');
//     $(".resume").toggleClass('active');
//   }
// });