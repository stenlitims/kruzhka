function headerH() {
    var h = $(window).height();
    $('.home .header').css('height', h + 'px');
}

function getScrollBarWidth() {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";
    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;
    document.body.removeChild(outer);
    return (w1 - w2);
};


$(document).ready(function () {
    if ($('a[href="#"]').length > 0) {
        $(document).on('click', 'a[href="#"]', function (e) {
            e.preventDefault();
        })
    }
    if ($('.js-menu-nav').length > 0) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                $('.js-menu-nav').addClass('fix');
            } else {
                $('.js-menu-nav').removeClass('fix');
            }
        });
    }



    $('form').validate();

    $('.carousel').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>']
    });
    if ($(window).width() > 992) {
        var acCarusel = $('.list-actions');
        acCarusel.owlCarousel({
            loop: false,
            margin: 0,
            // items: 2,
            autoHeight: true,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1600: {
                    items: 2
                }
            }
        });
        $(document).on('click', '.list-actions .owl-item', function (e) {
            if ($(this).prev().hasClass('center')) {
                acCarusel.trigger('next.owl.carousel');
            }
            if ($(this).next().hasClass('center')) {
                acCarusel.trigger('prev.owl.carousel');
            }
        });
    }
    if ($(window).width() < 768 && $('#map').length > 0) {
        var he = $(window).height();
        $('#map').height(he - 50 + 'px');
    }

    $('.list-sch').perfectScrollbar();
    $('.list-adress').perfectScrollbar();


    if ($('.metro').length > 0) {
        $('#metro1').draggable({
                drag: function (event, ui) {
                    var tempWi = $(event.target).width() - $('.metro').width(),
                        tempHe = $(event.target).height() - $('.metro').height();
                    if (ui.position.left < -tempWi) ui.position.left = -tempWi;
                    if (ui.position.left > 60) ui.position.left = 60;
                    if (ui.position.top < -tempHe) ui.position.top = -tempHe;
                    if (ui.position.top > 120) ui.position.top = 120;
                }
            }
        );

        $('.tools a').on('click', function () {
            var wi = $('#metro1').width();
            // console.log(wi);
            if ($(this).hasClass('plus')) {
                if (wi < 1600) {
                    $('#metro1').width(wi + 100);
                    $('.tools .minus').removeClass('disabled');
                } else {
                    $('.tools .plus').addClass('disabled');
                }
            }
            if ($(this).hasClass('minus')) {
                if (wi > 700) {
                    $('#metro1').width(wi - 100);
                    $('.tools .plus').removeClass('disabled');
                } else {
                    $('.tools .minus').addClass('disabled');
                }
            }
        });
        $('#metro1 .ico-map').on('click', function () {
            $('#metro1 .metka').removeClass('active');
            $(this).parent().addClass('active');
        });
        $('#metro1 .metka .cl').on('click', function () {
            $('#metro1 .metka').removeClass('active');
        });
    }

    $('.js-tabs-map a').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        $('.js-tabs-map a').removeClass('active');
        $(this).addClass('active');
        $('.tab-map-item').hide();
        $(id).show();
    });


    $(document).on('click', '.list-events a, .list-items a, .open-modal', function (e) {
        e.preventDefault();
        $('html').addClass('o-hidden').css('paddingRight', getScrollBarWidth() + 'px');
        $('.modal-art, .modal-mask').addClass('active');
    });
    $(document).on('click', '.modal-art .close, .modal-mask', function (e) {
        e.preventDefault();
        $('html').removeClass('o-hidden').removeAttr('style');
        $('.modal-art, .modal-mask').removeClass('active');
    });

    $('.list-jobs .title span').on('click', function () {
        $(this).parent().next().slideToggle(200);
        $(this).toggleClass('active');
    });


    if ($('.home').length > 0) {
        headerH();
        $(window).resize(function () {
            headerH();
        });
    }
    $('.navbar-toggle').on('click', function () {
        $(this).toggleClass('active');
        $('.header .top-line').toggleClass('active');
        $('.main-nav').toggleClass('show-t');
    });

    $(document).on('click', '.form-group .add-more a', function () {
        var data = $(this).parent().prev().clone();
        data.insertBefore($(this).parent());
    });

    $('.interer .list a').on('click', function (e) {
        e.preventDefault();
        var data = $(this).attr('href');
        if (data == '') return;
        if (data != $('.big-img img').attr('src')) {
            $('.big-img img').attr('src', data);
        }
        $('.big-img').fadeIn(200);
    });
    $('.big-img .to-back .btn').on('click', function () {
        $('.big-img').fadeOut(200);
    });



});
