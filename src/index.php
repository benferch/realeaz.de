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
                    <a href="#" onclick="closeNav();">Home</a>
                </li>
                <li>
                    <a href="#about" onclick="closeNav();">Über mich</a>
                </li>
                <li>
                    <a href="#portfolio" onclick="closeNav();">Portfolio</a>
                </li>
                <li>
                    <a href="#contact" onclick="closeNav();">Kontakt</a>
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
            <h1>realeaz.de</h1>
        </div>
        <div class="go">
            <a href="#about"><i class="fa fa-arrow-down fa-3x"></i></a>
        </div>
    </div>
    <div id="content">
        <div class="about" id="about">
            <h1>Über mich</h1>
            <p>Hey, ich bin Ben, 15 Jahre alt und wohne auf Rügen. <br>
            Einen Großteil meine Freizeit verbringe ich damit Webseiten zu erstellen. Außerdem engagiere ich mich seit etwa 10 Jahren bei der Jugendfeuerwehr. <br>
            Falls Du mich kontaktieren möchtest, nutze gern das <a href="./contact.php">Kontaktformular</a>, oder schreibe mir eine <a href="mailto:hello@realeaz.de">E-Mail</a>.</p>
        </div>
        <div class="portfolio" id="portfolio">

        </div>
        <div class="contact" id="contact">

        </div>
    </div>
</body>
</html>