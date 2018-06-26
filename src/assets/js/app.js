// nav stuff by https://github.com/floooooooooo/www/blob/master/assets/js/nav.js

function openNav() {
  document.getElementById('nav').style.transform = 'translateY(0%)'
}

function closeNav() {
  document.getElementById('nav').style.transform = 'translateY(-100%)'
}

$(window).scroll(function() {
    $(".fa-arrow-down").css("opacity", 1 - $(window).scrollTop() / 250);
})
    

