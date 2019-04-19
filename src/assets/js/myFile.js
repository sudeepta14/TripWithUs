function gridChange() {

    $('.cat .active').removeClass('active');
    $(this).addClass('active');
    var selector = $(this).attr('data-filter');
    $container.isotope({
        filter: selector,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    return false;
};
$('.portfolio-item a').nivoLightbox({
    effect: 'slideDown',
    keyboardNav: true,
});
