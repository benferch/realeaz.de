<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>ben.</title>
    <link rel="icon" type="image/png" href="./assets/img/logo.png">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="./assets/css/nav.css">
    <link rel="stylesheet" type="text/css" href="./assets/fonts/fonts.min.css">
    <link rel="stylesheet" type="text/css" href="./assets/css/portfolio.css">
    <link rel="stylesheet" type="text/css" href="./assets/css/form.css">
    <script type="text/javascript" src="./assets/js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="./assets/js/smooth-scroll.js"></script>
    <script type="text/javascript" src="./assets/js/nav.js"></script>
    <script type="text/javascript" src="./assets/js/index.js"></script>
    <script type="text/javascript" src="./assets/js/matomo.js"></script>
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
            <a href="#content"><i class="fa fa-arrow-down fa-3x"></i></a>
        </div>
    </div>
    <div id="content">
        <div class="about" id="about">
            <h1>Über mich</h1>
            <p>Hey, ich bin Ben, 15 Jahre alt und wohne auf Rügen. <br>
            Einen Großteil meine Freizeit verbringe ich damit, Webseiten zu erstellen. Außerdem engagiere ich mich seit etwa 9 Jahren bei der Jugendfeuerwehr. <br>
            Falls Du mich kontaktieren möchtest, nutze gern das <a href="./contact">Kontaktformular</a>, oder schreibe mir eine <a href="mailto:hello@realeaz.de">E-Mail</a>.</p>
        </div>
        <div class="portfolio" id="portfolio">
                <h1>Portfolio</h1>
                <p>Hier sind einige Projekte, an denen ich bisher gearbeitet habe, oder mitgewirkt habe.</p>
            <div class="work">
                <a href="https://github.com/realeaz/www">
                        <div class="item">
                            <h1>Meine Webseite</h1>
                            <img class="preview" src="./assets/img/project1.png">
                        </div>
                </a>
                <a href="https://github.com/realeaz/rgb-generator">
                    <div class="item">
                        <h1>RGB-Generator</h1>
                        <img class="preview" src="./assets/img/project3.png">
                    </div>
                </a>
                <a href="https://github.com/Jugendhackt/MetaPeta">
                    <div class="item">
                        <h1>MetaPeta</h1>
                        <img class="preview" src="./assets/img/project4.png">
                    </div>
                </a>
                <div class="item">
                    <h3>Und ich habe noch ein paar weiter Projekte, die meisten Projekte sind auf <span class="underline"><a href="https://github.com/realeaz">Github</a></span> zu finden. </h3>
                </div>
            </div>
        </div>
        <div class="contact" id="contact">
            <h1>Kontakt</h1>
            <form accept-charset="UTF-8" action="https://usebasin.com/f/09871bf8a5ff" enctype="multipart/form-data" method="POST">
                <div class="flex">
                    <input name="name" placeholder="Name" type="text" required>
                    <input id="email" name="email" placeholder="E-Mail" type="email" required>
                </div>
                <textarea name="message" placeholder="Nachricht"></textarea>
                <div class="flex bottom">
                    <input type="checkbox" name="approval" id="approval" value="approval" required>
                    <label for="approval">
                        Ich akzeptiere die <a href="./data.php">Datenschutzbestimmungen</a>.
                    </label>
                    <button name="send" type="submit">Senden</button>
                </div>
            </form>
        </div>
    </div>
    <div class="footer">
        <p>Copyright &copy; 2017&ndash; <?php echo date("Y"); ?> &#124; realeaz.de &#124; <a class="footer-imprint" href="./imprint">Impressum</a> &#124; <a class="footer-imprint" href="./data">Datenschutz</a></p>
    </div>
</body>
</html>