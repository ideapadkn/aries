$(function () {
		// burger menu
    $('.burger').click(function () {
        $('.list').toggleClass('show-menu')
    });
		// slider
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/slider-arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/slider-arrow-rigth.svg" alt=""></button>',
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });
});


let btnScroll = document.getElementById('header-scroll');
let blockScroll = document.getElementById('program');

btnScroll.addEventListener('click', () => {
	blockScroll.scrollIntoView({
		block: 'start',
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




















