$(document).ready(function(){
    $(".new-arrives__slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive : [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            },
        ]
    });
  });