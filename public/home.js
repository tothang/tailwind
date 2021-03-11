$( document ).ready(function() {
    $(".item-menu").hover(function(){
        $(".sub-menu").removeClass('hidden');
        if ($(this).hasClass('menu-beate')){
            $(".content-sub-beaute").removeClass('hidden');
            $(".content-sub-mode").addClass('hidden');
        }else {
            $(".content-sub-mode").removeClass('hidden');
            $(".content-sub-beaute").addClass('hidden');
        }
    }, function(){
        $(".sub-menu").addClass('hidden');
        $(".content-sub-mode").addClass('hidden');
        $(".content-sub-beaute").addClass('hidden');
    });

    $(".item-egagements").hover(function(){
        $(".sub-engagement").removeClass('hidden');
    }, function(){
        $(".sub-engagement").addClass('hidden');
    });

    $(".show-menu").click(function (){
        $(".mobile-menu").show();
    });

    $(".hide-menu").click(function (){
        $(".mobile-menu").hide();
    });

    $('.slider-content-text').slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        autoplay:true,
        autoplaySpeed:1500,
    });

    $('.slick-first-slider').slick({
        infinite: false,
        speed: 300,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 6.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 1,
                    infinite: true,
                    prevArrow: $('.arrow-left-first-slide'),
                    nextArrow: $('.arrow-right-first-slide'),
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.slick-second-slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 5.5,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    prevArrow: false,
                    nextArrow: $('.arrow-second-right'),
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                }
            }
        ]
    });

    $('.slick-nouveau-slider').slick({
        prevArrow: false,
        nextArrow: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    let header = document.getElementById("menu-desktop");

    let sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("fixed");
            $(".top-menu").hide();
        } else {
            header.classList.remove("fixed");
            $(".top-menu").show();
        }
    }

    $(".search-bar-menu").click(function (){
        $(".content-search-bar").removeClass('hidden');
        $(".search-input").focus();
    })

    $(".mobile-search").click(function (){
        $(".content-search-bar").removeClass('hidden');
        $(".search-input").focus();
    })


    $(document).on('click', function (e) {
        let isHoveredMenu = $(".search-bar-menu").is(":hover");
        let isHoveredMenuMobile = $(".mobile-search").is(":hover");
        let isHovered = $(".content-search-bar").is(":hover");
        if (isHovered !== true && isHoveredMenu !== true && isHoveredMenuMobile !== true) {
            $(".content-search-bar").addClass('hidden');
        }
            // if (!container.is(e.target) && container.has(e.target).length === 0)
            // {
            //     $(".content-search-bar").addClass('hidden');
            // }

    });

    $(".list-icon-menu").hover(function (){
        $(".popup-login").fadeIn('1000');
    });

    $(".list-icon-menu").mouseleave(function (){
        let isHovered = $(".popup-login").is(":hover");
        if (isHovered !== true) {
            $(".popup-login").fadeOut('1000');
        }
    });
    $(".popup-login").mouseleave(function (){
        let isHovered = $(".list-icon-menu").is(":hover");
        if (isHovered !== true) {
            $(".popup-login").fadeOut('1000');
        }
    });
});
