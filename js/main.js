$(function () {
    $('.burger').click(function () {
        $('.list').toggleClass('show-menu')
    });
    $('.slider1').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/slider-arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/slider-arrow-rigth.svg" alt=""></button>',
        vertical: false,
    });
});

// $(function(){
//  $('.product__name').slick({
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     focusOnSelect: true,
//     asNavFor: '.product__content',
//     prevArrow: '<button type="button" class="product-prev"><img src="images/Vector.png" alt=""></button>',
//     nextArrow: '<button type="button" class="product-next"><img src="images/Vector1.png" alt=""></button>',
//     vertical:true
//   });
//   $('.product__content').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     asNavFor: '.product__name',
//     fade: true,
//     arrows: false
//   });
// });