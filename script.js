function btn_press (exp) {
    if (exp == "ce") {
        document.getElementById("input_text").value = "";
        document.getElementById("input_text").placeholder = "0";
    }
    else if (exp == "del") {
        var str = document.getElementById("input_text").value;
        str = str.substring(0, str.length - 1);
        document.getElementById("input_text").value = str;
    }
    else if (exp == "=") {
        calculate(document.getElementById("input_text").value);
    }
    else {
        document.getElementById("input_text").value += exp;
    }
}
function calculate (exp) {
    try {
        document.getElementById("input_text").value = eval(exp);
        if (document.getElementById("input_text").value == "undefined" ||
            document.getElementById("input_text").value == "Infinity" ||
            document.getElementById("input_text").value == "NaN") {
                document.getElementById("input_text").placeholder = document.getElementById("input_text").value;
                document.getElementById("input_text").value = "";
        }
    }
    catch (err) {
        document.getElementById("input_text").value = "";
        document.getElementById("input_text").placeholder = "Error";
        console.error(err);
    }
}
for (element of document.getElementsByClassName("btnCalc")) {
    element.style.backgroundColor = colorNow;
    element.style.filter = "grayscale(50%)";
}
document.getElementById("btn_eql").style.backgroundColor = colorNow;
document.getElementById("input_text").value = "";
document.getElementById("input_text").readOnly = true;
document.getElementById("footer").innerHTML = "Version 2023.06.02.19.35";
