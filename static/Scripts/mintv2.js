var number = 1;
img = document.getElementById("QuestionMark")
img2 = document.getElementById("QuestionMark2")
img3 = document.getElementById("QuestionMark3")
function Increment(){
    if (number < 3){
    number += 1
    }
    if (number == 2){
        img.style.visibility = "visible"
        img2.style.visibility = "hidden"
        img3.style.visibility = "visible"
    }
    if (number == 3){
        img3.style.visibility = "visible"
        img2.style.visibility = "visible"
        img.style.visibility = "visible"
    }
    document.getElementById("Amount").innerHTML = number
}

function Decrement(){
    if (number > 1){
    number -= 1
    }
    if (number == 2){
        img.style.visibility = "visible"
        img2.style.visibility = "hidden"
        img3.style.visibility = "visible"
    }
    if (number == 1){
        img.style.visibility = "hidden"
        img2.style.visibility = "visible"
        img3.style.visibility = "hidden"
    }
    document.getElementById("Amount").innerHTML = number
}

function popmintscreen(){
    document.getElementById('MintScreen').style.visibility = 'visible'
    cost = number * 5.5
    document.getElementById('mintCost').innerHTML = `${cost} ADA`
}

function closemintscreen(){
    document.getElementById('MintScreen').style.visibility = 'hidden'
}