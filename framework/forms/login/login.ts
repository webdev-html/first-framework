let index = 0
let checknum = /[1,2,3,4,5,6,7,8,9,0]/i
let checkspechar = /[!,@,#,$,%,^,&,*,(,),.,<,>,?,/,\,|,:,;,',",{,},[]]/i
//this feature does not store data, if you want to store data, 
//use a database or a file-saver liberary, 
//this feature only is for the ui and getting data, not storing it.

let allaccounts = []

function createaccount() {
    
   
    let passv = document.getElementById("password").value
    let checkernum = checknum.test(passv)
    let checkerspechar = checkspechar.test(passv)
    if (checkernum === false) {
        alert("add a number to your password")
    }
    else {
        let userv = document.getElementById("username").value
        let id = Math.random()
        index++
        let account = [passv, userv, id, index]
        allaccounts.push(account) 
    }
    if (checkerspechar === false) {
        alert("add a special character to your password")
    }
    else {
        let userv = document.getElementById("username").value
        let id = Math.random()
        index++
        let account = [passv, userv, id, index]
        allaccounts.push(account)
    }
    

   

   
   
    


}