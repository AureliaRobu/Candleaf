define([
    'jquery',
    'slick'
], function ($) {
    'use strict';

    $('.testimonials-slider .pagebuilder-column-line').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst:true,
        responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
  ]
    });
});
