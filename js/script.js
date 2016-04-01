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
    $('.list-sch').perfectScrollbar();
    
    $(document).on('click', '.list-events a, .list-items a', function(e){
        e.preventDefault();
        $('html').addClass('o-hidden');
        $('.modal-art, .modal-mask').addClass('active');
    });
    $(document).on('click', '.modal-art .close, .modal-mask', function(e){
        e.preventDefault();
        $('html').removeClass('o-hidden');
        $('.modal-art, .modal-mask').removeClass('active');
    });

});
