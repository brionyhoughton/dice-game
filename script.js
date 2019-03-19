


let points = 0;
let points2 = 0;
let player1 = true;
let player2 = false;

function roll() {
    if (player1 == true && player2 == false) {
        roll1()
    }
    else if (player2 == true && player1 == false) {
        roll2()
    } else {
        alert("error")
    }

}



let dice = document.getElementById('placeholder')
//button.addEventListener('click', () => {
function roll1() {
    let randomNumber = Math.floor(Math.random() * 6 + 1)




    if (randomNumber == 1) {
        dice.src = "img/dice1.png"
        points = 0;
        document.getElementById('points').innerHTML = "You Lost!";
        player1 = false;
        player2 = true;

    }


    else if (randomNumber == 2) {
        dice.src = "img/dice2.png"
        points += 2;
        document.getElementById('points').innerHTML = points;
        player1 = false;
        player2 = true;



    }

    else if (randomNumber == 3) {
        dice.src = "img/dice3.png"
        points += 3;
        document.getElementById('points').innerHTML = points;
        player1 = false;
        player2 = true;


    }

    else if (randomNumber == 4) {
        dice.src = "img/dice4.png"
        points += 4;
        document.getElementById('points').innerHTML = points;
        player1 = false;
        player2 = true;


    }

    else if (randomNumber == 5) {
        dice.src = "img/dice5.png"
        points += 5;
        document.getElementById('points').innerHTML = points;
        player1 = false;
        player2 = true;


    }

    else if (randomNumber == 6) {
        dice.src = "img/dice6.png"
        points += 6;
        document.getElementById('points').innerHTML = points;
        player1 = false;
        player2 = true;

    }

    if (points < 19) {
    } else {

        document.getElementById("points").innerHTML = "You Won!"
        player1 = false;
        player2 = true;
        points = 0
        points2 = 0;

    }

}


let dice2 = document.getElementById('placeholder2')

// button2.addEventListener('click', () => {
function roll2() {
    let randomNumber2 = Math.floor(Math.random() * 6 + 1)



    if (randomNumber2 == 1) {
        dice2.src = "img/dice1.png"
        document.getElementById('points2').innerHTML = "You Lost!";
        player2 = false;
        player1 = true;
        points2 = 0;


    }
    else if (randomNumber2 == 2) {
        dice2.src = "img/dice2.png"
        points2 += 2;
        document.getElementById('points2').innerHTML = points2;
        player2 = false;
        player1 = true;

    }

    else if (randomNumber2 == 3) {
        dice2.src = "img/dice3.png"
        points2 += 3;
        document.getElementById('points2').innerHTML = points2;
        player2 = false;
        player1 = true;

    }

    else if (randomNumber2 == 4) {
        dice2.src = "img/dice4.png"
        points2 += 4;
        document.getElementById('points2').innerHTML = points2;
        player2 = false;
        player1 = true;

    }

    else if (randomNumber2 == 5) {
        dice2.src = "img/dice5.png"
        points2 += 5;
        document.getElementById('points2').innerHTML = points2;
        player2 = false;
        player1 = true;


    }

    else if (randomNumber2 == 6) {
        dice2.src = "img/dice6.png"
        points2 += 6;
        document.getElementById('points2').innerHTML = points2;
        player2 = false;
        player1 = true;


    }

    if (points2 < 19) {

    } else {


        document.getElementById("points2").innerHTML = "You Won!"
        player2 = false;
        player1 = true;
        points2 = 0;
        points = 0;

    }

}


