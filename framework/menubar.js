//since this a template, you can change anything you want, from the code to the dummy pictures
let imglink = 0

function frame1() {
    document.getElementById("menubaricon").src = "/placeholder pictures/frame2.png"
}
function frame2() {
    document.getElementById("menubaricon").src = "/placeholder pictures/frame3.png"
}
function frame3() {
    document.getElementById("menubaricon").src = "/placeholder pictures/frame4.png"
}

function finalframe() {
    document.getElementById("menubaricon").src = "/placeholder pictures/finalframe.png"
}
//this is the function that runs when you click the dummy menubar picture(or your own menubar picture)
function menubar_run() {
    //this is just a basic template, since i don't know what you want to add, you will need to add it on you'r own
    if (imglink === 1) {
        document.getElementById("imglink").href = ""
        imglink = 0
    }

    if (imglink === 0) {
        imglink = 1
    }
    setTimeout(frame1, 35)
    setTimeout(frame2, 70)
    setTimeout(frame3, 105)
    setTimeout(finalframe, 140)
}

function xframe() {
    if(imglink === 1){
    document.getElementById("menubaricon").src = "/placeholder pictures/x.png"
    }
}

function nonx() {
    if(imglink === 1){
    document.getElementById("menubaricon").src = "/placeholder pictures/finalframe.png"
    }
}