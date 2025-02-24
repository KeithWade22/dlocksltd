
/*==============================
    zoom js
==============================*/
function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

/*==============================
    popup js
==============================*/
$(window).on('load',function(){
    var popup = localStorage.getItem('popup_value');
    if(popup != 1){
        $('#news-letter-modal').modal('show');
    }

    /*==============================
        pre-loader js
    ==============================*/

    $('.preloader').delay(100).fadeOut('fast');
});

(function($) {
    "use strict";
    /*==============================
        sticky header js
    ==============================*/
    var lastScrollTop = 0;
    $(document).on("scroll",function() {
        var scroll = $(this).scrollTop();
        if (scroll > lastScrollTop) {
            $('.header-area').addClass('sticky-down');
            $('.header-area').removeClass('sticky-up');
        } 
        else {
            if (lastScrollTop <= 100) {
                $('.header-area').removeClass('sticky');
                $('.header-area').removeClass('sticky-down');
                $('.header-area').removeClass('sticky-up');
            } 
            else {
                $('.header-area').addClass('sticky');
                $('.header-area').removeClass('sticky-down');
                $('.header-area').addClass('sticky-up');
            }
        }
        lastScrollTop = scroll;
    });

    /*==============================
        currency js
    ==============================*/
    $('.local-currency a.currency-title-lg').on('click', function () {
        if($('#menu-currency').hasClass('active')) {
            $('#menu-currency').removeClass("active");
            $(this).removeClass("active");
        }
        else {
            $('#menu-currency').addClass("active");
            $(this).addClass("active");
        }
    });

    /*==============================
        menu js
    ==============================*/
    $('button.toggler-button').on('click', function () {
        $('#menu-toggle').addClass("active");
        $('.screen-bg').addClass("active");
    });
    $('button.close-menu').on('click', function () {
        $('#menu-toggle').removeClass("active");
        $('.screen-bg').removeClass("active");
    });

    /*==============================
        filter js
    ==============================*/
    $('button.filter-button').on('click', function () {
        $('.filter-sidebar').addClass("active");
        $('.screen-bg').addClass("active");
    });
    $('button.close-filter-sidebar').on('click', function () {
        $('.filter-sidebar').removeClass("active");
        $('.screen-bg').removeClass("active");
    });

    /*==============================
        cart js
    ==============================*/
    $('a.cart-count').on('click', function () {
        $('.mini-cart').addClass("active");
        $('body').addClass("hidden");
        $('.screen-bg').addClass("active");
    });
    $('button.cart-close').on('click', function () {
        $('.mini-cart').removeClass("active");
        $('body').removeClass("hidden");
        $('.screen-bg').removeClass("active");
    });
    $('.add-to-cart').on('click', function () { 
        $('.mini-cart').addClass("active");
        $('.screen-bg').addClass("active");
    });

    /*==============================
        screen-bg js
    ==============================*/
    $('.screen-bg').on('click', function () {
        $('#menu-toggle').removeClass("active");
        $('.filter-sidebar').removeClass("active");
        $('.mini-cart').removeClass("active");
        $(this).removeClass("active");
        $('body').removeClass("hidden");
    });

    /*==============================
        read-agree js
    ==============================*/
    $('label.box-area, .read-agree').on('click', function () {
        if($('.cust-checkbox, .create-checkbox').is(':checked')) {
            $('.checkout, .create').removeClass('disabled');
        }
        else {
            $('.checkout, .create').addClass('disabled');
        }
    });

    /*==============================
        home-slider js
    ==============================*/
    $('#home-slider').owlCarousel({
        loop: false,
        items: 1,
        rewind: true,
        fade: true,
        nav: false,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: false,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            479: {
                items: 1,
                nav: false,
                dots: true
            },
            540: {
                items: 1,
                nav: false,
                dots: true
            },
            768: {
                items: 1
            },
            979: {
                items: 1
            },
            1199: {
                items: 1
            }
        }
    });

    /*==============================
        slick slider js
    ==============================*/
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        infinite: true,
        asNavFor: '.slider-nav',
        adaptiveHeight: true,
        responsive:[
        {
            breakpoint: 600,
            settings: {
                arrows: false
            }
        }
        ]
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }
        ]
    });

    // product-style-1 js
    $('.slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.slider-small',
        adaptiveHeight: true,
    });
    $('.slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.slider-big',
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    // product-style-2 js
    $('.style2-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.style2-slider-small',
        adaptiveHeight: true,
    });
    $('.style2-slider-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.style2-slider-big',
        vertical: true,
        verticalSwiping: true,
        responsive: [
        {
            breakpoint: 480,
            settings: {
                vertical: false,
                verticalSwiping: false
            }
        }
        ]
    });

    // product-style-3 js
    $('.style3-slider-small').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-arrow-left-short"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-arrow-right-short"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: 'calc(33.33% - 30px)',
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 1199,
            settings: {
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                centerMode: true,
                centerPadding: '0px',
            }
        }
        ]
    });

    // product-style-4 js
    $('.style4-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.style4-slider-small',
        adaptiveHeight: true,
    });
    $('.style4-slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.style4-slider-big',
        vertical: true,
        verticalSwiping: true,
        responsive: [
        {
            breakpoint: 480,
            settings: {
                vertical: false,
                verticalSwiping: false
            }
        }
        ]
    });

    // product-style-5 js
    $('.style5-slider-small').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: true,
        focusOnSelect: true,
    });

    // product-style-6 js
    $('.slider-big-6').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.slider-small-6',
        adaptiveHeight: true,
    });
    $('.slider-small-6').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.slider-big-6',
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    // product-style7 js
    $('.slider-big-7').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.slider-small-7',
        adaptiveHeight: true,
    });
    $('.slider-small-7').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: '<button class="slick-prev"><i class="bi bi-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="bi bi-chevron-right"></i></button>',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.slider-big-7',
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    // magnificPopup
    $('.full-view').on('click', function () {
        $(this).next().magnificPopup('open');
    });
    $('.slider-big, .style2-slider-big, .style4-slider-big, .slider-big-6, .slider-big-7').magnificPopup({
        delegate: 'a',
        type: 'image',
        showCloseBtn: true,
        closeBtnInside: false,
        midClick: true,
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
    
    /*==============================
        product js
    ==============================*/
    var swiper = new Swiper('.swiper#pro-template', {
        rewind: true,
        slidesPerView: 4,
        spaceBetween: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
        blog-slider js
    ==============================*/
    var swiper = new Swiper('.swiper#blog-template', {
        slidesPerView: 2,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        loop: true,navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });
    
    /*==============================
        insta-slider js
    ==============================*/
    var owl = $('#insta-slider'); 
    owl.owlCarousel({
        loop: false,
        items: 5,
        rewind: true,
        margin: 30,
        nav: false,
        navText: ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: false,
        responsive:{
            0:{
                items: 2,
                margin: 12
            },
            479:{
                items: 3,
                margin: 12
            },
            768:{
                items: 3,
                margin: 12
            },
            979:{
                items: 4
            },
            1199: {
                items: 5
            }
        }
    });

    /*==============================
        deal-product js
    ==============================*/
    var swiper = new Swiper('#deal-product', {
        slidesPerView: 2,
        loop: true,
        grid: {
            rows: 1,
            fill: 'row' | 'column',
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,navigation: {
            nextEl: '.swiper-next-deal-product',
            prevEl: '.swiper-prev-deal-product',
        },
        pagination: {
            el: ".swiper-pagination-deal-product",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column',
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
        related blog slider js
    ==============================*/
    $('#related-blog-slider').owlCarousel({
        loop: false,
        items: 3,
        margin: 30,
        rewind: true,
        nav: false,
        navText : ['<i class="fas fa-chevron-left">','<i class="fas fa-chevron-right"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                margin: 12
            },
            479: {
                items: 1,
                margin: 12
            },
            768: {
                items: 2
            },
            979: {
                items: 2
            },
            1199: {
                items: 3
            }
        }
    });

    /*==============================
        related-product-tab js
    ==============================*/
    var swiper = new Swiper('.swiper#related-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        rewind: true,
        observer: true,
        observerParents: true,    
        navigation: {
            prevEl: '.new-swiper-prev',
            nextEl: '.new-swiper-next'
        },
        pagination: {
            el: '.swiper-pagination-new',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });
        
    /*==============================
        related-slider5 js
    ==============================*/
    var swiper = new Swiper('.swiper#related-slider5', {
        spaceBetween: 30,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        navigation: {
            prevEl: '.new-swiper-prev',
            nextEl: '.new-swiper-next'
        },
        pagination: {
            el: '.swiper-pagination-new',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
               slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 5,
                grid: { 
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*===================================
        cart-pro-template js
    ===================================*/
    var swiper = new Swiper('.swiper#cart-pro-template', {
        slidesPerView: 4,
        spaceBetween: 30,
        rewind: true,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        observer: true,
        observerParents: true,
        navigation: {
            prevEl: '.new-swiper-prev',
            nextEl: '.new-swiper-next'
        },
        pagination: {
            el: '.swiper-pagination-new',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
       Deal-timer js
    ==============================*/
    // var deadline1 = new Date("december 30, 2024 23:59:59").getTime();
    // var x = setInterval(function() {
    //     var currentTime = new Date().getTime();
    //     var t = deadline1 - currentTime;
    //     var days = Math.floor(t / (1000 * 60 * 60 * 24));
    //     var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    //     var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    //     var seconds = Math.floor((t % (1000 * 60)) / 1000);
    //     document.getElementById("day1").innerHTML = days ;
    //     document.getElementById("hrs1").innerHTML = hours;
    //     document.getElementById("min1").innerHTML = minutes;
    //     document.getElementById("sec1").innerHTML = seconds;
    //     if (t < 0) {
    //         clearInterval(x);
    //         document.getElementById("day1").innerHTML = '0';
    //         document.getElementById("hrs1").innerHTML = '0';
    //         document.getElementById("min1").innerHTML = '0' ;
    //         document.getElementById("sec1").innerHTML = '0';
    //     }
    // }, 1000);

    /*===================================
        product-grid js
    ===================================*/
    $('.list-change-view').on("click",function () {
        event.preventDefault();
        var data_grid = $(this).attr('data-grid-view');
        if ($('.shop-product-wrap').hasClass('grid-1') || 
            $('.shop-product-wrap').hasClass('grid-2') || 
            $('.shop-product-wrap').hasClass('grid-3') || 
            $('.shop-product-wrap').hasClass('grid-4')) 
        {
            $('.shop-product-wrap').removeClass('grid-1');
            $('.shop-product-wrap').removeClass('grid-2');
            $('.shop-product-wrap').removeClass('grid-3');
            $('.shop-product-wrap').removeClass('grid-4');
            $('.shop-product-wrap').addClass('grid-'+data_grid);
        }
        else {
            $('.shop-product-wrap').addClass('grid-'+data_grid);
        }
    });
    $('.list-change-view').on("click",function () {
        $('.list-change-view').removeClass('active');
        $(this).addClass('active');
    });

    /*========================================== 
        Minus and Plus Btn js
    ==========================================*/
    $('.dec').on("click",function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    
    $('.inc').on("click",function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    /*===================================
        product-short js
    ===================================*/
    $('.product-short a.short-title-lg').on('click', function () {
        if ($('#select-wrap').hasClass('active')) {
            $('#select-wrap').removeClass('active');
            $(this).removeClass('active');
        }
        else {
            $('#select-wrap').addClass('active');
            $(this).addClass('active');
        }
    });

    /*============================== 
        quickview js
    ==============================*/
    var galleryThumbs = new Swiper(".gallery-thumbs", {
        loop: true,
        spaceBetween: 15,
        slidesPerView: 3,
        thumbs: {
            swiper: galleryTop,
        },
    });
    var galleryTop = new Swiper(".gallery-top", {
        loop: true,
        spaceBetween: 15,
        navigation: {
            nextEl: ".quick-next",
            prevEl: ".quick-prev",
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });

    /*==============================
       video popup js
    ==============================*/
    $('.play-button').magnificPopup ({
        type: 'iframe',
        tClose: 'Close (Esc)',
        mainClass: 'mfp-fade',
        removalDelay: 160
    });

    /*==============================
        counter js
    ==============================*/
    $('.count-number').counterUp({
        delay: 10,
        time: 1000
    });

    /*==============================
        back-to-top js
    ==============================*/
    $(window).on("scroll",function() {
        if ($(this).scrollTop() > 600) {
            $('#top').addClass('show');
        } 
        else {
            $('#top').removeClass('show');
        }
    });
    $('#top').on("click",function() {
        $("html, body").animate({ scrollTop: 0 }, 0);
        return false;
    }); 

    /*==============================
        range slider js
    ==============================*/
    if ($('.price-input-range').length) {
        const parent = document.querySelector('.price-input-range');
        if (!parent) {
            return;
        }
        const rangeS = parent.querySelectorAll('input[type="range"]'),
              numberS = parent.querySelectorAll('input[type="number"]');
        rangeS.forEach((el) => {
            el.oninput = () => {
                let slide1 = parseFloat(rangeS[0].value),
                    slide2 = parseFloat(rangeS[1].value);
                if (slide1 > slide2) {
                    [slide1, slide2] = [slide2, slide1];
                }
                numberS[0].value = slide1;
                numberS[1].value = slide2;
            }
        });
        numberS.forEach((el) => {
            el.oninput = () => {
                let number1 = parseFloat(numberS[0].value),
                    number2 = parseFloat(numberS[1].value);
                if (number1 > number2) {
                    let tmp = number1;
                    numberS[0].value = number2;
                    numberS[1].value = tmp;
                }
                rangeS[0].value = number1;
                rangeS[1].value = number2;
            }
        });
    }
})(jQuery);