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




    $('.more-information__link').click(function () {
        $(this).toggleClass('open');
        $('.door-materials').slideToggle();

    })
});