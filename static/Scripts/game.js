let a
let b
let c
let d

function expandA(){
    if (a == 1){
        document.getElementById("FAQ1").innerHTML = "What is the game?"
        return a = 0
    }
    else {
        document.getElementById("FAQ1").innerHTML = "22 clues are hidden across drogsoffchain metadata <br> A prize pool of ada is awarded to the winner"
        return a = 1
    }
}

function expandB(){
    if (b == 1){
        document.getElementById("FAQ2").innerHTML = "How to play?"
        return b = 0
    }
    else {
        document.getElementById("FAQ2").innerHTML = "Each holder gets 1 guess per clue for each drogsoffchain nft they hold in their wallet"
        return b = 1
    }
}

function expandC(){
    if (c == 1){
        document.getElementById("FAQ3").innerHTML = "When game?"
        return c = 0
    }
    else {
        document.getElementById("FAQ3").innerHTML = "The game starts once all nft have been minted and ends once all clues have been discorved"
        return c = 1
    }
}

function expandD(){
    if (d == 1){
        document.getElementById("FAQ4").innerHTML = "How to win?"
        return d = 0
    }
    else {
        document.getElementById("FAQ4").innerHTML = "Once the game ends the holder who guessed the most clues will be awarded the ada prize pool"
        return d = 1
    }
}