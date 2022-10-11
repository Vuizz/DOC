var a = 0
function onhover(){
    if (document.getElementById("demo").innerHTML != 'Mint is live !'){
        if(a == 0){
            document.getElementById("mntbtn").style.transition = "margin-left 0.15s"
            document.getElementById("mntbtn").style.marginLeft = "200px"

            a = 1
        }
        else {
            document.getElementById("mntbtn").style.marginLeft = "-200px"
            a = 0
        }
    }
    else{
        document.getElementById("mntbtn").style.marginLeft = "0px"
    }
}

function outhover(){
    // document.getElementById("mntbtn").style.marginLeft = "0px"
}