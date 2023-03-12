$(function () {
		// burger menu
    $('.menu-burger, .menu-items').on('click', function() {
			$('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
			$('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
		});
		// slider
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/slider-arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/slider-arrow-rigth.svg" alt=""></button>',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});


let btnScroll = document.getElementById('header-scroll');
let blockScroll = document.getElementById('program');
let topScroll = document.getElementById('scroll');

btnScroll.addEventListener('click', () => {
	window.scrollBy({
		top: 950,
		behavior: 'smooth',
	})
})
topScroll.addEventListener('click', () => {
	window.scrollBy({
		top: -10000,
		behavior: 'smooth',
	})
})

//this is where we apply opacity to the arrow
$(window).scroll( function(){

    //get scroll position
    var topWindow = $(window).scrollTop();
    //multipl by 1.5 so the arrow will become transparent half-way up the page
    var topWindow = topWindow * 1.5;
    
    //get height of window
    var windowHeight = $(window).height();
        
    //set position as percentage of how far the user has scrolled 
    var position = topWindow / windowHeight;
    //invert the percentage
    position = 1 - position;
  
    //define arrow opacity as based on how far up the page the user has scrolled
    //no scrolling = 1, half-way up the page = 0
    $('.header-scroll').css('opacity', position);
  
	});




















