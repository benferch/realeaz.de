$(window).scroll(function() {
    $(".fa-arrow-down").css("opacity", 1 - $(window).scrollTop() / 250);
})
