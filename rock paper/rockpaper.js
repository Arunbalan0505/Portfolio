

timer = document.querySelector(".timer");
playbtn = document.querySelector("#playbtn");
play = document.querySelector("#play");
moves = document.querySelector("#moves")
opt = document.querySelector("#opt")
user = document.querySelector('#user')
computer = document.querySelector('.computer')
rock = document.querySelector('#rock')
paper = document.querySelector('#paper')
scissor = document.querySelector('#scissor')
rounds = document.querySelector('.rounds')
round = document.querySelector('#round')
combtn = document.querySelectorAll('#combtn')
btn = document.querySelectorAll('.btn')
round = document.querySelector('#round')
guide = document.querySelector(".guide")
bttn = document.getElementsByClassName("bttn")


playerScore = 0;
computerScore = 0;
computers = undefined;
timer.innerText = 4
users = undefined;
user.innerText = playerScore;
computer.innerText = computerScore;






function start() {

    if (opt.value === '') {
        timer.classList.remove('visually-hidden')
        timer.innerText = "Select no. of rounds"
        return;
    }
    playbtn.classList.add('visually-hidden')
    moves.classList.add('visually-hidden')
    opt.classList.add('visually-hidden')
    rounds.classList.remove('visually-hidden')
    timer.classList.remove('visually-hidden')
    timer.innerText = +timer.innerText - 1;

    if (timer.innerText >= 1) {
        setTimeout((() => {
            timer.classList.remove('visually-hidden')
            start();
        }), 1000)
    } else {
        timer.classList.remove('visually-hidden')
        timer.innerText = "Lets Go!!!";
        
            btn[0].classList.remove('disabled')
            btn[1].classList.remove('disabled')
            btn[2].classList.remove('disabled')
        
        userInput();
    }
}

function userInput(users) {
    
    if (users) {
        
        computers = Math.floor(Math.random() * 3) + 1;
        console.log({ computers, users });
        if (users === computers) {
            timer.innerText = "Draw"
        } else if (users == 1 && computers == 3 || users == 2 && computers == 1 || users == 3 && computers == 2) {
            timer.innerText = "User Wins"
            user.innerText = +user.innerText + 1;
        } else {
            timer.innerText = "Computer Wins"
            computer.innerText = +computer.innerText + 1;
        }
        play.classList.remove('visually-hidden')

    }

}

function playagain() {

    if (opt.value === round.innerText) {
        timer.innerText = 'Game Over'
        play.classList.add('visually-hidden')
        if (user.innerText > computer.innerText) {
            round.innerText = 'User Wins'
        } else if (user.innerText < computer.innerText) {
            round.innerText = 'Computer Wins'
        } else {
            round.innerText = 'Match Draw'
        }

    } else {
        round.innerText = +round.innerText + 1;
        play.classList.add('visually-hidden')
        timer.innerText = 4;
        start()
    }
}



function reset() {
    playbtn.classList.remove('visually-hidden')
    moves.classList.remove('visually-hidden')
    opt.classList.remove('visually-hidden')
    rounds.classList.add('visually-hidden')
    timer.innerText = '3'
    
}


function helps(){   
    guide.classList.remove("visually-hidden")
   

}
