/*First Slider*/
// $(".slider-one").not(".slick-intialized")
//     .slick({
//     autoplay:true,
//     autoplaySpeed:3000,
//     dots:true,
//     prevArrow:".site-slider .slider-btn .prev",
//     nextArrow:".site-slider .slider-btn .next",
// });


$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});

