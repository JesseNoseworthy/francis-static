'use strict';

console.log('working');

// $(window).load(function() {
//   $(".hero").fadeOut(4000);
// })

$('.continue').on('click', function () {
  $(".hero").slideUp(1250);
});