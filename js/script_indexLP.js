const backflip = new Swiper('.swiper-screenshots', {
   loop: true,   
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {

      1200: {
        slidesPerView: 2,
        spaceBetween: 370
      }
}

});