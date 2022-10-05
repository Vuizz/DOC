let a
let b
let c
let d

function expandA(){
    if (a == 1){
        document.getElementById("FAQ1").innerHTML = "What is the game?"
        document.getElementById('FAQ1').style.fontSize = '1.5rem'
        document.getElementById("Faq1").style.backgroundColor = '#a76571'
        document.getElementById("FAQ1").style.color = 'black'
        return a = 0
    }
    else {
        document.getElementById("FAQ1").innerHTML = "22 clues are available for each game <br> A prize pool of ada is awarded to the winner"
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
        document.getElementById("Faq2").style.backgroundColor = '#565676'
        document.getElementById("FAQ2").style.color = 'black'

        return b = 0
    }
    else {
        document.getElementById("FAQ2").innerHTML = "The game will be played in the discord channel. Each holder gets 1 guess per clue for each drogsoffchain nft they hold in their wallet"
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
        document.getElementById("Faq3").style.backgroundColor = '#88d498'
        document.getElementById("FAQ3").style.color = 'black'

        return c = 0
    }
    else {
        document.getElementById("FAQ3").innerHTML = "The game starts once all the nfts have been minted and ends once all clues have been discovered"
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
        document.getElementById("Faq4").style.backgroundColor = '#e2de84'
        document.getElementById("FAQ4").style.color = 'black'

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