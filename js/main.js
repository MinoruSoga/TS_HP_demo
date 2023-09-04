// Side Menu
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {
  edge: 'right',
});

// // carousel 
// var carousel = document.querySelectorAll('.carousel');
// M.Carousel.init(carousel, {
//   // fullWidth: true,
//   padding: 100,
// });
var windowWidth = $(window).width();
var windowSm = 640;
if (windowWidth <= windowSm) {
  //横幅640px以下のとき（つまりスマホ時）に行う処理を書く


  //  fade in---
  function scrollChk() {
    var scroll = $(window).scrollTop();
    // var scroll = $(window).scrollBottom();
    var windowHeight = $(window).height();

    // $('.scroll-animation').not('.active').each(function () {
    $('.fadein-bottom').not('.active').each(function () {
      var pos = $(this).offset().top;

      if (scroll > pos - windowHeight * 0.7) {
        $(this).addClass("active");
      }
    });
  }
  $(window).scroll(function () {
    scrollChk();
  });
  $('body').on('touchmove', function () {
    scrollChk();
  });

  // Slider 
  var slider = document.querySelectorAll('.slider');
  M.Slider.init(slider, {
    indicators: false,
  });


  // materialboxed
  var materialboxed = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(materialboxed, {});

} else {
  //横幅640px超のとき（タブレット、PC）に行う処理を書く


  //  fade in---
  function scrollChk() {
    var scroll = $(window).scrollTop();
    // var scroll = $(window).scrollBottom();
    var windowHeight = $(window).height();

    // $('.scroll-animation').not('.active').each(function () {
    $('.fadein-bottom').not('.active').each(function () {
      var pos = $(this).offset().top;

      if (scroll > pos - windowHeight * 0.7) {
        $(this).addClass("active");
      }
    });
  }
  $(window).scroll(function () {
    scrollChk();
  });
  $('body').on('touchmove', function () {
    scrollChk();
  });

  // Slider 
  var slider = document.querySelectorAll('.slider');
  M.Slider.init(slider, {
    indicators: false,
    height: 800,
  });


  // materialboxed
  var materialboxed = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(materialboxed, {});

}
