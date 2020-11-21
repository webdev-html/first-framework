//you can change the code or pictures, these pictures are just for placeholders, and you can add a lot more slides to the slideshow or optimize the code
let lasturl = "placeholder pictures/finalframe.png";
let firsturl = "placeholder pictures/menubaricon.png";
function slide_forward() {
    document.getElementById("img").src = "placeholder pictures/x.png";
    document.getElementById("arrowfor").onclick = slide_forward2;
    document.getElementById("arrowback").onclick = slide_backward6;
}
function slide_forward2() {
    document.getElementById("img").src = "placeholder pictures/frame2.png";
    document.getElementById("arrowfor").onclick = slide_forward3;
    document.getElementById("arrowback").onclick = slide_backward5;
}
function slide_forward3() {
    document.getElementById("img").src = "placeholder pictures/frame3.png";
    document.getElementById("arrowfor").onclick = slide_forward4;
    document.getElementById("arrowback").onclick = slide_backward4;
}
function slide_forward4() {
    document.getElementById("img").src = "placeholder pictures/frame4.png";
    document.getElementById("arrowfor").onclick = slide_forward5;
    document.getElementById("arrowback").onclick = slide_backward3;
}
function slide_forward5() {
    document.getElementById("img").src = lasturl;
    document.getElementById("arrowfor").onclick = slide_forward6;
    document.getElementById("arrowback").onclick = slide_backward2;
}
function slide_forward6() {
    document.getElementById("img").src = "placeholder pictures/menubaricon.png";
    document.getElementById("arrowfor").onclick = slide_forward;
    document.getElementById("arrowback").onclick = slide_backward;
}
function slide_backward() {
    document.getElementById("img").src = "/placeholder pictures/finalframe.png";
    document.getElementById("arrowback").onclick = slide_backward2;
}
function slide_backward2() {
    document.getElementById("img").src = "/placeholder pictures/frame4.png";
    document.getElementById("arrowback").onclick = slide_backward3;
}
function slide_backward3() {
    document.getElementById("img").src = "/placeholder pictures/frame3.png";
    document.getElementById("arrowback").onclick = slide_backward4;
}
function slide_backward4() {
    document.getElementById("img").src = "/placeholder pictures/frame2.png";
    document.getElementById("arrowback").onclick = slide_backward5;
}
function slide_backward5() {
    document.getElementById("img").src = "/placeholder pictures/x.png";
    document.getElementById("arrowback").onclick = slide_backward6;
}
function slide_backward6() {
    document.getElementById("img").src = "/placeholder pictures/menubaricon.png";
    document.getElementById("arrowback").onclick = slide_backward;
}
function presentslideshow() {
    document.getElementById("imgbox").style.width = "100%";
    document.getElementById("arrowback").style.width = "250px";
    document.getElementById("arrowfor").style.width = "250px";
    document.getElementById("present").style.backgroundColor = "yellow";
    document.getElementById("present").style.color = "black";
    document.getElementById("present").innerHTML = "stop presentation";
    document.getElementById("present").style.fontSize = "150%";
    document.getElementById("img").style.height = "152%";
    document.getElementById("present").onclick = stopslideshow;
}
function stopslideshow() {
    document.getElementById("imgbox").style.width = "50%";
    document.getElementById("arrowback").style.width = "20%";
    document.getElementById("arrowfor").style.width = "20%";
    document.getElementById("present").style.backgroundColor = "black";
    document.getElementById("present").style.color = "white";
    document.getElementById("present").innerHTML = "present";
    document.getElementById("present").style.fontSize = "200%";
    document.getElementById("img").style.height = "100%";
    document.getElementById("present").onclick = presentslideshow;
}
function lastslide() {
    document.getElementById("img").src = lasturl;
    document.getElementById("arrowback").onclick = slide_backward2;
    document.getElementById("arrowfor").onclick = slide_forward6;
}
function backtostart() {
    document.getElementById("img").src = firsturl;
    document.getElementById("arrowback").onclick = slide_backward;
    document.getElementById("arrowfor").onclick = slide_forward;
}
