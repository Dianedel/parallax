// Effet de parallaxe

$(window).scroll(function (e) {
    parallax();
});
function parallax() {

    var scrolled = $(window).scrollTop();

    $('#logo').css('top', -(scrolled * 0.9) + 'px');
}