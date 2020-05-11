// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/sunrise.jpg", 
	 		 "images/clouds.jpg",
			 "images/lake.jpg",
			 "images/bridge.jpg"
	 			], 	{duration: 4200, fade: 1300});
		});
})