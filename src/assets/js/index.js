// AGE
function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
}

document.getElementById('age').innerHTML = calculateAge(new Date('8/10/2002'))

// YEAR
document.getElementById('year').innerHTML = new Date().getUTCFullYear()
