
$(document).ready(function () {
  var swiper = {
    init: function () {
      new Swiper('.swiper-container', {
        loop: true,
        autoplay: 5000,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction: false
      });
    }
  };
  swiper.init();
});
