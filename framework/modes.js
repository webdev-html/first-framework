let body = document.getElementById("body");
function darkmode() {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    document.getElementById("modes").onclick = lightmode;
    document.getElementById("modes").innerHTML = "turn on light mode";
    document.getElementById("modes").style.backgroundColor = "white";
    document.getElementById("modes").style.color = "black";
}
function lightmode() {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    document.getElementById("modes").onclick = darkmode;
    document.getElementById("modes").innerHTML = "turn on dark mode";
    document.getElementById("modes").style.backgroundColor = "black";
    document.getElementById("modes").style.color = "white";
}
