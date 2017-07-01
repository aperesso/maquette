/*

*/


$(window).load(function() {
    $(".loader").delay(3000).fadeOut("slow");
});

$(document).ready(function(){


	var tl = new TimelineMax({delay: 3.5});
	var tl_2 = new TimelineMax({repeat:-1, repeatDelay:0});

	$(".menu_button").on({
		mouseenter: function(){
			$(".nav_bar").animate({
				width: '20%',
				opacity: 1},
			1100);
		}
	});
	$(".nav_bar").on({
		mouseleave: function(){
			$(this).animate({
				width: '0%',
				opacity: 0},
			1100);
		}
	});

	$( ".scroll_down").click(function() {
    	$('html, body').animate( { scrollTop: $(".work").offset().top }, 1000 );
    });

    $( ".images").click(function() {
    	$('html, body').animate( { scrollTop: $(".work").offset().top }, 1000 );
    });

    $( ".inspo").click(function() {
    	$('html, body').animate( { scrollTop: $(".about").offset().top }, 1000 );
    });

    $( ".contact").click(function() {
    	$('html, body').animate( { scrollTop: $("footer").offset().top }, 1000 );
    });

	tl.add(TweenMax.staggerFrom(".text span", 1.4, {opacity:0, ease:Back.easeIn}, 0.4));
	tl.add(TweenMax.staggerFrom(".text_bis span", 0.1, {opacity: 0.8, color: '#D5D2C8', ease: Linear}, 0.1));
	tl.add(TweenMax.from(".scroll_down", 0.1, {opacity: 0, rotation: "360", ease: Linear}, 0.4));
	tl.add(TweenMax.from(".scroll_down", 4, {rotation: "1", ease:Linear.easeNone, repeat:-1}));

	TweenMax.set(".slide", {visibility: "hidden"});
	tl_2.staggerTo(".slide", 0, {visibility:"visible", immediateRender:false}, 1.5);
	tl_2.staggerTo(".slide", 0, {visibility:"hidden", immediateRender:false}, 1.5);
});