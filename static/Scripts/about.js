var a;
var b;
var c;
var d;
var par;
function extend(){
    if (a == 1){
        par = "How Many Drogs?"
        document.getElementById("HowMany").innerHTML = par
        document.getElementById("HowMany").style.backgroundColor = 'transparent'
        document.getElementById("HowMany").style.color = 'rgba(221,241,195,1)'

        return a = 0
    }
    else{
        par = "3333 drogs will be available"
        document.getElementById("HowMany").innerHTML = par
        document.getElementById("HowMany").style.backgroundColor = 'rgba(221,241,195,1)'
        document.getElementById("HowMany").style.color = 'black'
        return a = 1
    }
}
function extend1(){
    if (b == 1){
        par = "Mint price?"
        document.getElementById("MintPrice").innerHTML = par
        document.getElementById("MintPrice").style.padding = '30px'
        document.getElementById("MintPrice").style.backgroundColor = 'transparent'
        document.getElementById("MintPrice").style.color = 'rgba(221,241,195,1)'
        return b = 0
    }
    else{
        par = "8 ada per Drog <br> Max 3 drogs per transaction"
        document.getElementById("MintPrice").innerHTML = par
        document.getElementById("MintPrice").style.padding = '4.5px'
        document.getElementById("MintPrice").style.backgroundColor = 'rgba(221,241,195,1)'
        document.getElementById("MintPrice").style.color = 'black'
        return b = 1
    }
}
function extend2(){
    if (c == 1){
        par = "Royalties?"
        document.getElementById("Royalties").innerHTML = par
        document.getElementById("Royalties").style.padding = '30px'
        document.getElementById("Royalties").style.backgroundColor = 'transparent'
        document.getElementById("Royalties").style.color = 'rgba(221,241,195,1)'

        return c = 0
    }
    else{
        par = "Drogs have a 10% royalty fee <br>Applied to sales on secondary markets "
        document.getElementById("Royalties").innerHTML = par
        document.getElementById("Royalties").style.padding = '4.5px'
        document.getElementById("Royalties").style.backgroundColor = 'rgba(221,241,195,1)'
        document.getElementById("Royalties").style.color = 'black'
        return c = 1
    }
}
function extend3(){
    if (d == 1){
        par = "Policy ID?"
        document.getElementById("PolicyId").innerHTML = par
        document.getElementById("PolicyId").style.backgroundColor = 'transparent'
        document.getElementById("PolicyId").style.color = 'rgba(221,241,195,1)'
        return d = 0
    }
    else{
        par = "update with policy id"
        document.getElementById("PolicyId").innerHTML = par
        document.getElementById("PolicyId").style.backgroundColor = 'rgba(221,241,195,1)'
        document.getElementById("PolicyId").style.color = 'black'
        return d = 1
    }
}