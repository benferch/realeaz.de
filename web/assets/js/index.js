// Age calculator
function calcAge(dob) {
    var birthday = +new Date(dob);
    return ~~((Date.now() - birthday) / (31557600000));
}

document.getElementById("age").innerHTML = calcAge("08/10/2002");

// Scroll to top on refresh / page load
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Smooth scroll
function scrollDown() {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
}