var scroll = new SmoothScroll('a[href*="#"]');

window.sr = ScrollReveal({
    scale: 1,
    delay: 50,
    duration: 1200,
});
sr.reveal('.reveal');

new Typed('#typing-me', {
    strings: ["Schüler", "Webentwickler", "Student", "Webdeveloper"],
    typeSpeed: 90,
    loop: true,
    backDelay: 800,
    smartBackspace: true,
    shuffle: true,
});

new Typed('#typing', {
    strings: ["git pull a day keeps the conflicts away", "git: Comitted for life", "A commit a day keeps the mobs away", "May the --force be with you", "In case of fire: git commit, git push, leave the building"],
    typeSpeed: 110,
    loop: true,
    backDelay: 600,
    smartBackspace: true,
    shuffle: true,
});

function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}