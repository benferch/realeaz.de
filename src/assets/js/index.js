// AGE

var birth = new Date('2002,08, 10')
var now = new Date;
var diff = now - birth;
// Dates are set from 1970, so remove that to get the year
var age = new Date(diff).getFullYear() - 1970

var span = document.getElementById('age');
span.innerHTML = age;

// YEAR

var year = new Date().getFullYear();
var footer = document.getElementById('year');
footer.innerHTML = year;