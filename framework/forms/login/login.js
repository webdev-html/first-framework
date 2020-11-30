let index = 0;
let checknum = /[1,2,3,4,5,6,7,8,9,0]/i;
let checkchar = /[a,q,s,w,d,e,f,r,g,t,h,y,j,u,k,i,l,o,p,m,n,b,v,c,x,z]/i;
//this feature does not store data, if you want to store data, 
//use a database or a file-saver liberary, 
//this feature only is for the ui and getting data, not storing it.
let allaccounts = [];
function createaccount() {
    let passv = document.getElementById("password").value;
    let userv = document.getElementById("username").value;
    let id = Math.random();
    index++;
    let account = [passv, userv, id, index];
    allaccounts.push(account);
    /*loose verification(delete the code above if you are using this loose verification, also, the code below is optinal to use)
    let checkernum = checknum.test(passv);
    let checkerchar = checkchar.test(passv);
    if (checkernum === false) {
        alert("add a number to your password");
    }
    else {
        let userv = document.getElementById("username").value;
        let id = Math.random();
        index++;
        let account = [passv, userv, id, index];
        allaccounts.push(account);
    }
    if (checkerchar === false) {
        alert("add a character to your password");
    }
    else {
        let userv = document.getElementById("username").value;
        let id = Math.random();
        index++;
        let account = [passv, userv, id, index];
        allaccounts.push(account);
        */
    }

