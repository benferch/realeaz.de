// Scroll to top on refresh / page load
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Shorthands
var byId = function (id) {
    return document.getElementById(id);
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

// get Current Year
function getYear() {
    var today = new Date();
    return today.getFullYear()
}

byId("currentYear").innerHTML = getYear();