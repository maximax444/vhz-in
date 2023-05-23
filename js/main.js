(function ($) {
    $(function () {

        $('.facts__tabs').on('click', 'a:not(.active)', function (e) {
            e.preventDefault();
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.facts').find('.facts__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
(function ($) {
    $(function () {

        $('.ab-team .swiper-wrapper').on('click', '.swiper-slide:not(.active)', function (e) {
            e.preventDefault();
            $(this)
                .addClass('clicked').siblings().removeClass('clicked')
                .closest('.ab-team').find('.ab-team__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
function noWw(event) {
    if ("1234567890+\(\)\- ".indexOf(event.key) != -1) {

    } else {
        event.preventDefault();
    }

}
const swiper9 = new Swiper('.resch-lab__slider', {
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 700,
    loop: true,
    navigation: {
        nextEl: '.resch-lab__next',
        prevEl: '.resch-lab__prev',
    },
    effect: "fade"
});
const swiper2 = new Swiper('.his__slider', {

    slidesPerView: 3,
    spaceBetween: 42,
    loop: false,
    slidesPerGroup: 2,
    // Navigation arrows
    navigation: {
        nextEl: '.his__next',
        prevEl: '.his__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        601: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 14
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 42
        }
    }
});
const swiper3 = new Swiper('.ab-sert__slider', {

    slidesPerView: 3,
    spaceBetween: 42,
    loop: false,
    // Navigation arrows
    navigation: {
        nextEl: '.abt2__next',
        prevEl: '.abt2__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        769: {
            slidesPerView: 2,
            spaceBetween: 14
        },
        // when window width is >= 640px
        993: {
            slidesPerView: 3,
            spaceBetween: 42
        }
    }
});
const swiper4 = new Swiper('.ab-team__slider', {
    slidesPerView: 4,
    spaceBetween: 42,
    loop: false,
    // Navigation arrows
    navigation: {
        nextEl: '.abt1__next',
        prevEl: '.abt1__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        769: {
            slidesPerView: 2,
            spaceBetween: 14
        },
        // when window width is >= 640px
        993: {
            slidesPerView: 3,
            spaceBetween: 42
        },
        // when window width is >= 640px
        1201: {
            slidesPerView: 4,
            spaceBetween: 42
        }
    }
});
(function ($) {
    $(function () {

        $('.his .swiper-wrapper').on('click', '.swiper-slide:not(.active)', function (e) {
            e.preventDefault();
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.his').find('.his__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
$('.ab-team__block').on('click', function () {
    $(this).toggleClass('active');
    $(this).next('.ab-team__cont-block').toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).find('.ab-team__link').html('СКРЫТЬ');

    } else {
        $(this).find('.ab-team__link').html('ПОДРОБНЕЕ');

    }
});