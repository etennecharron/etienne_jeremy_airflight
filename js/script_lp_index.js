const backflip = new Swiper('.swiper-screenshots', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {

        1200: {
            slidesPerView: 
            3,

        }
    },
    
});