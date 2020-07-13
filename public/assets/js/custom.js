$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#navbar').addClass('navbar-nova');
    } else {
      $('#navbar').removeClass('navbar-nova');
    }
    if (window.innerWidth > 767) {
      var scroll = $(window).scrollTop();

      if ((scroll > 40) && (scroll < 800)) {
        $(".td-stage-wrapper").removeClass("scrollhide")
        $('.telemedecine-stage-content').addClass('hide-text');
        $('.td-stage-woman').addClass('scale-img');
        $('.td-stage-notebook').addClass('scale-image-bg');
        $('.td-stage-phone').addClass('slide-up-bg');
      } else if (scroll < 40) {
        $('.telemedecine-stage-content').removeClass('hide-text');
        $('.td-stage-woman').removeClass('scale-img');
        $('.td-stage-notebook').removeClass('scale-image-bg');
        $('.td-stage-phone').removeClass('slide-up-bg');
      }
    }

  });

});