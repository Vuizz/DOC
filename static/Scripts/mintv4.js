var number = 1;
img = document.getElementById("QuestionMark").style.visibility
img2 = document.getElementById("QuestionMark2").style.visibility
img3 = document.getElementById("QuestionMark3").style.visibility
amnt = document.getElementById("Amount").innerHTML
srcn = document.getElementById('MintScreen').style.visibility
prce = document.getElementById('mintCost').innerHTML
function Increment(){
    if (number < 3){
    number += 1
    }
    if (number == 2){
        img = "visible"
        img2 = "hidden"
        img3 = "visible"
    }
    if (number == 3){
        img3 = "visible"
        img2 = "visible"
        img = "visible"
    }
    amnt = number
}

function Decrement(){
    if (number > 1){
    number -= 1
    }
    if (number == 2){
        img = "visible"
        img2 = "hidden"
        img3 = "visible"
    }
    if (number == 1){
        img = "hidden"
        img2 = "visible"
        img3 = "hidden"
    }
    amnt = number
}

function popmintscreen(){
    srcn = 'visible'
    cost = number * 53
    prce = `${cost} ADA`
}

function closemintscreen(){
    srcn = 'hidden'
}