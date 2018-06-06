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
    <script
            src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@14/dist/smooth-scroll.polyfills.min.js"></script>
    <script type="text/javascript" src="./assets/js/app.js"></script>
    <script type="text/javascript">
        var scroll = new SmoothScroll('a[href*="#"]');
    </script>

    <!-- Twitter Card-->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@_realeaz">
    <meta name="twitter:creator" content="@_realeaz">
    <meta name="twitter:title" content="ben.">
</head>
<body>
<nav id="nav" class="fullheight fullwidth flex vertical-center horizontal-center" style="transform: translateY(-100vh);">
    <img id="closebtn" onclick="closeNav();" class="icon" src="./assets/img/closenav.png">
    <div class="nav">
        <ul class="menu">
            <li>
                <a href="./index.php" onclick="closeNav();">Home</a>
            </li>
            <li>
                <a href="./portfolio.php" onclick="closeNav();">Portfolio</a>
            </li>
            <!--- <li>
                <a href="./buy.php" onclick="closeNav();">Kaufen</a>
            </li> -->
            <li>
                <a href="./contact.php" onclick="closeNav();">Kontakt</a>
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
    <h1>Impressum</h1>
    <h2>Angaben gem&auml;&szlig; &sect; 5 TMG:</h2>
    <p>Ben Ferch<br />
        Poggenstra&szlig;e, 4a<br /> 18574 Garz</p>
    <h2>Kontakt:</h2>
    <p>Telefon: 015234223262<br />
        E-Mail: ben@realeaz.de</p>
    <h2>Haftung f&uuml;r Inhalte</h2>
    <p>Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
        verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach
        Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.</p>
    <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
        Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem
        Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
    <h2>Haftung f&uuml;r Links</h2>
    <p>Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte
        wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine
        Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
        oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
        m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum
        Zeitpunkt der Verlinkung nicht erkennbar.</p>
    <p>Eine permanente inhaltliche Kontrolle der verlinkten
        Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
        Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
    <h2>Urheberrecht</h2>
    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
        unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede
        Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen
        Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r
        den privaten, nicht kommerziellen Gebrauch gestattet.</p>
    <p>Soweit die Inhalte auf dieser Seite nicht
        vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
        werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
        werden wir derartige Inhalte umgehend entfernen.</p>
    <p>Quelle: <a href="https://www.erecht24.de">https://www.e-recht24.de</a></p>
</div>
</body>
</html>
