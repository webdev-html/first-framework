//you can change the code or pictures, these pictures are just for placeholders, and you can add a lot more slides to the slideshow or optimize the code
function slide_forward1() {
   document.getElementById("img").src = "placeholder pictures/x.png"
   document.getElementById("arrowfor").onclick = slide_forward2
   document.getElementById("arrowback").onclick= slide_backward6
}

function slide_forward2() {
    document.getElementById("img").src = "placeholder pictures/frame2.png"
    document.getElementById("arrowfor").onclick = slide_forward3
    document.getElementById("arrowback").onclick= slide_backward5
}

function slide_forward3() {
    document.getElementById("img").src = "placeholder pictures/frame3.png"
    document.getElementById("arrowfor").onclick = slide_forward4
    document.getElementById("arrowback").onclick= slide_backward4
}

function slide_forward4() {
    document.getElementById("img").src = "placeholder pictures/frame4.png"
    document.getElementById("arrowfor").onclick = slide_forward5
    document.getElementById("arrowback").onclick= slide_backward3
}

function slide_forward5() {
    document.getElementById("img").src = "placeholder pictures/finalframe.png"
    document.getElementById("arrowfor").onclick = slide_forward6
    document.getElementById("arrowback").onclick= slide_backward2
    
}

function slide_forward6() {
    document.getElementById("img").src = "placeholder pictures/menubaricon.png"
    document.getElementById("arrowfor").onclick = slide_forward1
    document.getElementById("arrowback").onclick= slide_backward1
}

function slide_backward1() {
    document.getElementById("img").src = "/placeholder pictures/finalframe.png"
    document.getElementById("arrowback").onclick = slide_backward2
}

function slide_backward2() {
    document.getElementById("img").src = "/placeholder pictures/frame4.png"
    document.getElementById("arrowback").onclick = slide_backward3
}
function slide_backward3() {
    document.getElementById("img").src = "/placeholder pictures/frame3.png"
    document.getElementById("arrowback").onclick = slide_backward4
}

function slide_backward4() {
    document.getElementById("img").src = "/placeholder pictures/frame2.png"
    document.getElementById("arrowback").onclick = slide_backward5
}

function slide_backward5() {
    document.getElementById("img").src = "/placeholder pictures/x.png"
    document.getElementById("arrowback").onclick = slide_backward6
}

function slide_backward6() {
    document.getElementById("img").src = "/placeholder pictures/menubaricon.png"
    document.getElementById("arrowback").onclick = slide_backward1
}