let photoSwiper = new Swiper(".swiper.is-card", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  keyboard: true,
});

$(".slider-faq_component").each(function (index) {
  const swiper = new Swiper($(this).find(".swiper")[0], {
    slidesPerView: 1,
    keyboard: true,
    mousewheel: {
      forceToAxis: true,
    },
    slideToClickedSlide: true,
    followFinger: true,
    spaceBetween: "5%",
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 1,
        spaceBetween: "4%",
      },
      // tablet
      768: {
        slidesPerView: 2,
        spaceBetween: "4%",
      },
      // desktop
      992: {
        slidesPerView: 3,
        spaceBetween: "2%",
      },
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is-disabled",
    },
  });
});

$(".swiper_testimonial").each(function (index) {
  const testimonialSwiper = new Swiper($(this).find(".swiper")[0], {
    slidesPerView: 1,
    keyboard: true,
    mousewheel: {
      forceToAxis: true,
    },
    followFinger: true,
    pagination: {
      el: $(this).find(".swiper-bullet-wrapper")[0],
      bulletActiveClass: "is-active",
      bulletClass: "swiper-bullet",
      bulletElement: "button",
      clickable: true
    },
  });
});
