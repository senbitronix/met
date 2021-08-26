const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    
    bulletClass: 'swiper-pagination-bullet swiper-pagination-bullet_def',
    bulletActiveClass: 'swiper-pagination-bullet-active swiper-pagination-bullet_act',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
   delay: 2000,
  },
  speed: 800,

});
