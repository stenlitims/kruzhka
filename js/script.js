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
                    items: 3
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

    $('.list-sch').perfectScrollbar();
    $('.list-adress').perfectScrollbar();

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
