function calcAge(dob) {
    var birthday = +new Date(dob);
    return ~~((Date.now() - birthday) / (31557600000));
}

document.getElementById("age").innerHTML = calcAge("08/10/2002");