let a
let b
let c
let d

function expandA(){
    if (a == 1){
        document.getElementById("FAQ1").innerHTML = "What is the game?"
        document.getElementById('FAQ1').style.fontSize = '1.5rem'
        document.getElementById("Faq1").style.backgroundColor = 'red'
        document.getElementById("FAQ1").style.color = 'rgba(221,241,195,1)'
        return a = 0
    }
    else {
        document.getElementById("FAQ1").innerHTML = "22 clues are hidden across drogsoffchain metadata <br> A prize pool of ada is awarded to the winner"
        document.getElementById('FAQ1').style.fontSize = '15.5px'
        document.getElementById("Faq1").style.backgroundColor = 'rgba(221,241,195,1)'
        document.getElementById("FAQ1").style.color = 'black'
        return a = 1
    }
}

function expandB(){
    if (b == 1){
        document.getElementById("FAQ2").innerHTML = "How to play?"
        document.getElementById('FAQ2').style.fontSize = '1.5rem'
        document.getElementById("Faq2").style.backgroundColor = 'blue'
        document.getElementById("FAQ2").style.color = 'rgba(221,241,195,1)'

        return b = 0
    }
    else {
        document.getElementById("FAQ2").innerHTML = "Each holder gets 1 guess per clue for each drogsoffchain nft they hold in their wallet"
        document.getElementById('FAQ2').style.fontSize = '15.5px'
        document.getElementById("Faq2").style.backgroundColor = 'rgba(221,241,195,1)'
        document.getElementById("FAQ2").style.color = 'black'
        return b = 1
    }
}

function expandC(){
    if (c == 1){
        document.getElementById("FAQ3").innerHTML = "When game?"
        document.getElementById('FAQ3').style.fontSize = '1.5rem'
        document.getElementById("Faq3").style.backgroundColor = 'green'
        document.getElementById("FAQ3").style.color = 'rgba(221,241,195,1)'

        return c = 0
    }
    else {
        document.getElementById("FAQ3").innerHTML = "The game starts once all nft have been minted and ends once all clues have been discovered"
        document.getElementById('FAQ3').style.fontSize = '15.5px'
        document.getElementById("Faq3").style.backgroundColor = 'rgba(221,241,195,1)'
        document.getElementById("FAQ3").style.color = 'black'

        return c = 1
    }
}

function expandD(){
    if (d == 1){
        document.getElementById("FAQ4").innerHTML = "How to win?"
        document.getElementById('FAQ4').style.fontSize = '1.5rem'
        document.getElementById("Faq4").style.backgroundColor = 'purple'
        document.getElementById("FAQ4").style.color = 'rgba(221,241,195,1)'

        return d = 0
    }
    else {
        document.getElementById("FAQ4").innerHTML = "Once the game ends the holder who guessed the most clues will be awarded the ada prize pool"
        document.getElementById('FAQ4').style.fontSize = '15.5px'
        document.getElementById("Faq4").style.backgroundColor = 'rgba(221,241,195,1)'
        document.getElementById("FAQ4").style.color = 'black'

        return d = 1
    }
}