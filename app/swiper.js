const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // 600: {
        //     slidesPerView: 2,
        //     slidesPerGroup: 2,
        //     loop: false,
        // },
        1600: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
  });
  