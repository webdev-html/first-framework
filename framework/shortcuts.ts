let img = document.getElementById("img")
let arrowfor = document.getElementById("arrowfor")
let arrowback = document.getElementById("arrowback")
let present = document.getElementById("present")
let menubaricon = document.getElementById("menubaricon")
let mode = document.getElementById("modes")
let colorbody = document.getElementById("body").style.color
let bgcolorbody = document.getElementById("body").style.backgroundColor

let slides = {
    slidesize:function(width:string,height:string) {
        img.style.width = width
        img.style.height = height
        return width
        return height
        

    },

    slidesquare:function(square:string) {
        img.style.width = square
        img.style.height = square
        return square
    },

    slidearrowforsize:function(width:string,height:string) {
        arrowfor.style.width = width
        arrowfor.style.height = height
        return height
        return width     
    },

    slidearrowforsquare:function(square:string) {
        arrowfor.style.width = square
        arrowfor.style.height = square
        return square
    },

    slidearrowbacksize:function(width:string, height:string) {
        arrowback.style.width = width
        arrowback.style.height = height
        return height
        return width
    },
    slidearrowbacksquare:function(square:string) {
        arrowback.style.width = square
        arrowback.style.height = square
        return square
    },
    slidepresenttextcolor:function(textcolor:string) {
        present.style.color = textcolor
        return textcolor
    },

    slidepresentbgcolor:function(bgcolor:string) {
        present.style.backgroundColor = bgcolor
        return bgcolor
    },
     
    slidepresentsize:function(width:string, height:string) {
        present.style.width = width
        present.style.height = height
        return height
        return width
    },

    slidepresentsquare:function(square:string) {
        present.style.width = square
        present.style.height = square
        return square
    },

}

let menubars = {
    menubariconsize:function(width:string, height:string) {
        menubaricon.style.width = width
        menubaricon.style.height = height
        return height
        return width
    },

    menubariconsquare:function(square:string) {
        menubaricon.style.height = square
        menubaricon.style.width = square
        return square
    }
}

let modes = {
    colorpalete:function(color:string, bgcolor:string) {
        mode.style.color = color
        mode.style.backgroundColor = bgcolor
        return bgcolor
        return color
        
   },

   buttonsize:function(width:string, height:string) {
       mode.style.width = width
       mode.style.height = height
       return width
       return height
   },

   buttonsquare:function(square:string) {
       mode.style.height = square
       mode.style.width = square
       return square
   }
  
    

}

