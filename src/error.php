<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>ben.</title>
    <link rel="icon" type="image/png" href="./assets/img/logo.png">
    <link href="https://use.fontawesome.com/releases/v5.0.4/css/all.css" rel="stylesheet">
    <link type="text/css" rel="stylesheet" href="./assets/css/style.css">
    <link type="text/css" rel="stylesheet" href="./assets/css/nav.css">
    <link rel="stylesheet" type="text/css" href="./assets/fonts/fonts.min.css" />
    <script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@14/dist/smooth-scroll.polyfills.min.js"></script>
    <script type="text/javascript" src="assets/js/nav.js"></script>
    <script type="text/javascript" src="assets/js/index.js"></script>
    <script type="text/javascript" src="assets/js/matomo.js"></script>
    <script type="text/javascript">
        var scroll = new SmoothScroll('a[href*="#"]');
    </script>

    <!-- Twitter Card-->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@unrealeaz">
    <meta name="twitter:creator" content="@unrealeaz">
    <meta name="twitter:title" content="ben.">
</head>
<body>
    <nav id="nav" class="fullheight fullwidth flex vertical-center horizontal-center" style="transform: translateY(-100vh);">
        <img id="closebtn" onclick="closeNav();" class="icon" src="./assets/img/closenav.png">
        <div class="nav">
            <ul class="menu text center">
                <li>
                    <img src="./assets/img/logo.png" style="height: 50px; width: 50px;">
                </li>
                <li>
                    <a href="/" onclick="closeNav();">Home</a>
                </li>
            </ul>
        </div>
    </nav>
    <aside id="navbar" class="flex fullwidth horizontal-center">
        <a href="/"><img src="./assets/img/logo.png" class="logo"></a>
        <div class="hamburger" onclick="openNav()">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
        </div>
    </aside>
    <div class="landing">
        <div class="background"></div>
        <div class="title">
            <h1>Fehler!</h1>
            <h2 style="color: white;">Irgendwas ist hier schief gelaufen.</h2>
            <h3 style="color: white;">Probiere es nochmal und überprüfe, ob Du auch alles richtig geschrieben hast!</h3>
        </div>
    </div>
</body>
</html>