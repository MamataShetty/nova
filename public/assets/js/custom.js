$(document).ready(function() {
    //do jQuery stuff when DOM is ready
    new TypeIt(".typed-text", {
		  speed: 60,
		  waitUntilVisible: true,
		  loop: true,
		  cursorChar: ' ',
		})
		  .type("Hi, I’m <br>Klara Assistant.")
		  .pause(1000)
		  .delete()
		  .type("I collected <strong>109</strong><br>insurance cards today.")
		  .pause(1000)
			.delete()
		  .type("I sent <strong>59</strong> pre-visit <br>instructions today.")
		  .pause(1000)
			.delete()
		  .type("I rescheduled <strong>27</strong><br>no-shows today.")
		  .pause(1000)
			.delete()
		  .type("I followed up with <br><strong>165</strong> patients today.")
		  .pause(1000)
			.delete()
		  .type("I collected <strong>19</strong> new <br>online reviews today.")
		  .pause(1000)
			.delete()

		  .go();

		$(window).scroll(function(){
	    if ($(this).scrollTop() > 500) {
	       $('#navbar').addClass('navbar-nova');
	    } else {
	       $('#navbar').removeClass('navbar-nova');
	    }
	    var scroll = $(window).scrollTop();

		  if((scroll > 40)&&(scroll < 800)){
		  	$('.telemedecine-stage-content').addClass('hide-text');
		    $('.td-stage-woman').addClass('scale-img');
		    $('.td-stage-notebook').addClass('scale-image-bg');
		    $('.td-stage-phone').addClass('slide-up-bg');
		  }
		  else if(scroll < 40){

		  	$('.telemedecine-stage-content').removeClass('hide-text');
		    $('.td-stage-woman').removeClass('scale-img');
		    $('.td-stage-notebook').removeClass ('scale-image-bg');
		     $('.td-stage-phone').removeClass('slide-up-bg');
		  }

		});
});