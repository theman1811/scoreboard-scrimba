let homeScreen= document.getElementById("home-screen")
let guestScreen= document.getElementById("guest-screen")
let scoreHome= 0
let scoreGuest= 0
homeScreen.textContent= scoreHome
guestScreen.textContent= scoreGuest


function add1home(){
    scoreHome+= 1
    homeScreen.textContent= scoreHome
}

function add2home(){
    scoreHome+= 2
    homeScreen.textContent= scoreHome
}

function add3home(){
    scoreHome+= 3
    homeScreen.textContent= scoreHome
}

function add1guest(){
    scoreGuest+= 1
    guestScreen.textContent= scoreGuest
}

function add2guest(){
    scoreGuest+= 2
    guestScreen.textContent= scoreGuest
}

function add3guest(){
    scoreGuest+= 3
    guestScreen.textContent= scoreGuest
}

function restart(){
    scoreHome= 0
    scoreGuest= 0
    homeScreen.textContent= scoreHome
    guestScreen.textContent= scoreGuest
}