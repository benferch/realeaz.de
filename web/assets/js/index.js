// Scroll to top on refresh / page load
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Shorthands
var byId = function (id) {
    return document.getElementById(id);
};

// Theme switch
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

// Scripts for index page
$(function () {
    if ($("body").is("#index-page")) {
        // Age calculator
        function calcAge(dob) {
            var birthday = new Date(dob);
            return ~~((Date.now() - birthday) / (31557600000));
        }

        byId("age").innerHTML = calcAge("08/10/2002");

        // Get Github Project description
        // MetaPeta
        fetch("https://api.github.com/repos/jugendhackt/MetaPeta")
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                var metapetaDescription = json.description;
                byId("metapetaDescription").innerHTML = metapetaDescription;
            });

        // PacTrac
        fetch("https://api.github.com/repos/jugendhackt/PacTrac")
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                var pactracDescription = json.description;
                byId("pactracDescription").innerHTML = pactracDescription;
            });

        // benferch.de
        fetch("https://api.github.com/repos/benferch/benferch.de")
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                var benferchDescription = json.description;
                byId("benferchDescription").innerHTML = benferchDescription;
            });
    }
});

// get Current Year
function getYear() {
    var today = new Date();
    return today.getFullYear()
}

byId("currentYear").innerHTML = getYear();