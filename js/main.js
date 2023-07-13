//intialization plugins
$(document).ready(function () {
    // navbar-fixed-top
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
    //animation icon toggler of navbar
    $(`.circle-menu`).click(function() {
        $(`.hamburger`).toggleClass(`is-active`);
        $(`.inner-menu`).toggleClass(`nav-active`);

    });
    //Wow intit
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    /*start the loading page */
    jQuery(".loader").fadeOut();
});

$(window).scroll(function() {
    if ($(document).scrollTop() > 5) {
        $(".side-nav").addClass("active");
    } else {
        $(".side-nav").removeClass("active");
    }
});

//Swiper 
var swiper = new Swiper('.projects_inner .projects_swiper', {
    // loop: true,
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 15,
    // autoplay: {
    //     delay: 2500,
    // },
    //In Tabs
    // observer: true,
    // observeParents: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.projects_inner .swiper-pagination',
        clickable: true
    },
});


//Dark Mode 
// if(localStorage.darkMode=="true") {
//     document.body.classList.toggle('dark_mode');
//     document.getElementById("chk").checked=true;
// }
// else {
//     document.body.classList.toggle('light_mode');
// }
// document.getElementById("chk").addEventListener('change', () => {
//     document.body.classList.toggle('dark_mode');
//     document.body.classList.toggle('light_mode');
//     localStorage.darkMode=(localStorage.darkMode=="true")?"false":"true";
// });


// var swiper = new Swiper(' .swiper-container', {
//     // loop: true,
//     speed: 900,
//     slidesPerView: 1,
//     spaceBetween: 15,
//     // autoplay: {
//     //     delay: 2500,
//     // },
//     //In Tabs
//     // observer: true,
//     // observeParents: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//         },
//         1024: {
//             slidesPerView: 5,
//             spaceBetween: 20,
//             // Prevent swiper in lg screens
//             // allowTouchMove: false,
//             // preventClicks: false
//         },
//     }
// });

