"use strict"

if (window.$) {
  let $ = window.$;
  let slickCarousel = $(".slick-carousel");

  slickCarousel.on("init reInit", function(e, slick) {
    if (slick.slideCount <= slick.options.slidesToShow) {
      slick.slickAdd(slick.$slides.clone())
    }
  });

  slickCarousel.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    mobileFirst: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1170,
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }]
  });
}
