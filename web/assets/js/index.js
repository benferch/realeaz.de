// Age calculator
function calcAge(dob) {
    var birthday = new Date(dob);
    return ~~((Date.now() - birthday) / (31557600000));
}

document.getElementById("age").innerHTML = calcAge("08/10/2002");

// get Current Year

document.getElementById("currentYear").innerHTML = new Date().getFullYear();


// Scroll to top on refresh / page load
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Smooth scroll for
function scrollDownIndex() {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
}

function scrollDownImprint() {
    document.getElementById("imprint").scrollIntoView({behavior: "smooth"});
}

function scrollDownPrivacy() {
    document.getElementById("privacy").scrollIntoView({behavior: "smooth"});
}

// Fade out when scroll down
$(document).ready(function () {
    $("#scroll-down").waypoint(function (direction) {
        if (direction === 'down') {
            $("#scroll-down").fadeOut();
        } else if (direction === 'up') {
            $("#scroll-down").fadeIn();
        }
    })
});

// Get Github Project description
// MetaPeta
fetch("https://api.github.com/repos/jugendhackt/MetaPeta")
    .then(function (response) {
        return response.json();
    }).then(function (json) {
    var metapetaDescription = json.description;
    document.getElementById("metapetaDescription").innerHTML = metapetaDescription;
});

// PacTrac
fetch("https://api.github.com/repos/jugendhackt/PacTrac")
    .then(function (response) {
        return response.json();
    }).then(function (json) {
    var pactracDescription = json.description;
    document.getElementById("pactracDescription").innerHTML = pactracDescription;
});

// benferch.de
fetch("https://api.github.com/repos/benferch/benferch.de")
    .then(function (response) {
        return response.json();
    }).then(function (json) {
    var benferchDescription = json.description;
    document.getElementById("benferchDescription").innerHTML = benferchDescription;
});