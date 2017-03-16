$(document).ready(function () {

    if( $(window).width() < 992){
        $('.philosophy').appendTo($('.more .dropdown-menu'));
        $('.status-know').appendTo($('.more .dropdown-menu'));

    }

    $(window).resize(function () {
        if ($(window).width() < 992) {
            $('.philosophy').appendTo($('.more .dropdown-menu'));
            $('.status-know').appendTo($('.more .dropdown-menu'));

        }
    });
    //
    //     else {
    //         $('.philosophy').before($('.common-menu__item .more'));
    //         console.log('more');
    //     }
    // });



//*****************main slider************************//
    var slidesNumber = 0;

    $('.slider').slick({
        arrows: false,
        dots: true,
        customPaging : function(slider, i) {
            slidesNumber = slidesNumber+1;
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<a  class="slick-dots__link"> '+thumb+'  </a>';
        },
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: true,
                    nextArrow:'<i class="fa fa-long-arrow-right"></i>',
                    prevArrow: '<i class="fa fa-long-arrow-left"></i>',

                    customPaging: function( ) {
                         return '<a  class="slick-dots__circle"> </a>';
                    }
                }
            }
        ]
    });

    $('.slick-dots__link').parent().css("width", 100/slidesNumber+'%');


    $('.door-slider').slick({
        arrows:true,
        dots:false,
        nextArrow:'<div class="prev"></div>',
        prevArrow: '<div class="next"></div>',
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: "unslick"
            }
        ]
    });

    $('.more-information__link').click(function () {
        $(this).toggleClass('open');
        $('.door-materials').slideToggle();

    });


    // $('.card').mouseenter(function(){
    //     $(this).find('.hidden-block').slideDown();
    // });
    // $('.card').mouseleave(function(){
    //     $(this).find('.hidden-block').slideUp();
    // });
});