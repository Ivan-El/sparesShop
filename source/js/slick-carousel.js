"use strict"

if (window.$) {
  let $ = window.$;

  let slickCarousel = $(".slick-carousel");
  slickCarousel.slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: false,
    responsive: [{
      breakpoint: 1232,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
}
