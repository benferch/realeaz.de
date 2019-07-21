function openNav() {
    document.getElementById('nav').style.transform = 'translateY(0%)';
    document.getElementById('nav').style.zIndex = '1';
    document.getElementById('content').style.zIndex = '0';
}

function closeNav() {
    document.getElementById('nav').style.transform = 'translateY(-100%)';
    document.getElementById('nav').style.zIndex = '0';
    document.getElementById('content').style.zIndex = '0';
}
