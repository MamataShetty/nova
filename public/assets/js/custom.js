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
		    if ($(this).scrollTop() > 100) {
		       $('#navbar').addClass('navbar-nova');
		    } else {
		       $('#navbar').removeClass('navbar-nova');
		    }
		});

});