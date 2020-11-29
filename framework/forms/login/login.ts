

//this feature does not store data, if you want to store data, 
//use a database or a file-saver liberary, 
//this feature only is for the ui and taking data, not storing it.

let allaccounts = []

function createaccount() {
    let passv = document.getElementById("password").value
    let userv = document.getElementById("username").value
    let id = Math.random()
    let account = [passv,userv,id]
    allaccounts.push(account)
    


}