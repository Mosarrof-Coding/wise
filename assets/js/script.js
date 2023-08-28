// hero videoplayer-------
let videolayer = document.querySelector('.videolayer');
let Uplay = document.querySelector('#Uplay');
videolayer.addEventListener('click', ()=>{
  setTimeout(() => {
    videolayer.classList.add('anim');
    setTimeout(() => {
      videolayer.style.display = 'none';
    }, 2000);
  }, 1000);
  Uplay.src += '?autoplay=1';
});

// themechange-----------
let themebar = document.querySelector('.themebar');
let body = document.querySelector('body');
let logo = document.querySelector('.navbar-brand img');
let logoF = document.querySelector('.f-inner img');

themebar.addEventListener('click', ()=>{
    body.classList.toggle('whitetheme');
    logo.style.backgroundColor = 'black';
    logoF.style.backgroundColor = 'black';
})

// audit togler----------
// let primeBtn = Array.from(document.querySelectorAll('.audit-inner'));
// let auditRef = Array.from(document.querySelectorAll('.audit-ref'));
// let calandly = document.querySelector('.audit-calandly');
// let aduit_back = document.querySelector('.aduit_back');

// primeBtn.map((item, index)=>{
//     item.addEventListener('click', ()=>{
//         auditRef.map((e)=>{
//             e.classList.add('view');
//             calandly.classList.add('none');
//             function back(){
//                 aduit_back.addEventListener('click', ()=>{
//                     e.classList.remove('view');
//                     calandly.classList.remove('none');
//                 })
//             }
//             back();
//         })
//     })
// });

// calender--------------
// $(function(){
//     $('.month-slider').slick({
//         arrows:true,
//         prevArrow:'.cal-btn',
//         nextArrow:'.chevR',
//         asNavFor:'.numslider',
//     });
//     $('.numslider').slick({
//         arrows:false,
//         asNavFor:'.month-slider',
//     });
// });

// our work--------
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swipBtn',
        prevEl: '.swipBtn2',
    },
    breakpoints: {
        420: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
    },
});

// testimonial------------
var swiper = new Swiper('.mySwiper1', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
    breakpoints: {
        420: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
    },
});

// framer-slider---
$('.meWrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});