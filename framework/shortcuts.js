let img = document.getElementById("img");
let arrowfor = document.getElementById("arrowfor");
let arrowback = document.getElementById("arrowback");
let present = document.getElementById("present");
let menubaricon = document.getElementById("menubaricon");
let vernav = document.getElementsByClassName("vernavcon");
let mode = document.getElementById("modes");
let slides = {
    slidesize: function (width, height) {
        img.style.width = width;
        img.style.height = height;
        return width;
        return height;
    },
    slidesquare: function (square) {
        img.style.width = square;
        img.style.height = square;
        return square;
    },
    slidearrowforsize: function (width, height) {
        arrowfor.style.width = width;
        arrowfor.style.height = height;
        return height;
        return width;
    },
    slidearrowforsquare: function (square) {
        arrowfor.style.width = square;
        arrowfor.style.height = square;
        return square;
    },
    slidearrowbacksize: function (width, height) {
        arrowback.style.width = width;
        arrowback.style.height = height;
        return height;
        return width;
    },
    slidearrowbacksquare: function (square) {
        arrowback.style.width = square;
        arrowback.style.height = square;
        return square;
    },
    slidepresenttextcolor: function (textcolor) {
        present.style.color = textcolor;
        return textcolor;
    },
    slidepresentbgcolor: function (bgcolor) {
        present.style.backgroundColor = bgcolor;
        return bgcolor;
    },
    slidepresentsize: function (width, height) {
        present.style.width = width;
        present.style.height = height;
        return height;
        return width;
    },
    slidepresentsquare: function (square) {
        present.style.width = square;
        present.style.height = square;
        return square;
    },
};
let menubars = {
    menubariconsize: function (width, height) {
        menubaricon.style.width = width;
        menubaricon.style.height = height;
        return height;
        return width;
    },
    menubariconsquare: function (square) {
        menubaricon.style.height = square;
        menubaricon.style.width = square;
        return square;
    }
};
let modes = {
    colorpalete: function (color, bgcolor) {
        mode.style.color = color;
        mode.style.backgroundColor = bgcolor;
        return bgcolor;
        return color;
    },
};
