// Scroll to top on refresh / page load
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Theme switch
/*
let toggle = byId("themeSwitch")

if (localStorage.getItem('dark')) {
    byId("html").classList.add('dark');
}

toggle.addEventListener('click', function (e) {
    e.preventDefault();

    if (byId("html").classList.contains('dark')) {
        byId("html").classList.remove('dark');
        localStorage.removeItem('dark');
    } else {
        byId("html").classList.add('dark');
        localStorage.setItem('dark', true);
    }
});
*/