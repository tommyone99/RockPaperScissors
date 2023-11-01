const announcements = document.querySelector("#announcements");
const roundDecision = document.querySelector("#roundDecision");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let playerScore = 0;
let computerScore = 0;
let roundResult = "";

rock.addEventListener("click", getTally);
paper.addEventListener("click", getTally);
scissors.addEventListener("click", getTally);

function getTally(e) {
    roundResult = playRound(e);
    if (roundResult === "WIN"){
        playerScore++;
    }
    else if (roundResult === "LOSS"){
        computerScore++;
    }
    announcements.textContent = `${roundResult} PLAYER SCORE: ${playerScore} COMPUTER SCORE: ${computerScore}`;

    if (playerScore > 4){
        announcements.textContent = "You Win! Congratulations, you are better than a computer";
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore > 4){
        announcements.textContent = "You Lose! Humanity was no match against Machine!";
        playerScore = 0;
        computerScore = 0;
    };
}

function getComputerChoice() {
    let rngValue = Math.floor(((Math.random() * 2 + .05)/2) * 100);
    let move = "";

    if (rngValue <= 33) {
        move = "ROCK"
    }
    else if(rngValue <= 66 && rngValue > 33){
        move = "PAPER"
    }
    else {
        move = "SCISSORS"
    }

    return move;
}

function announceDecision(selection, computerSelection) {
    roundDecision.textContent = `Your move: ${selection} "Computer's move: ${computerSelection}`;

};

function playRound(e) {

    selection = e.target.id.toUpperCase()
    computerSelection = getComputerChoice();

    if (selection === "ROCK"){
        if (computerSelection === "ROCK"){
            announceDecision(selection, computerSelection);
            return "DRAW";
        }
        else if (computerSelection === "PAPER"){
            announceDecision(selection, computerSelection);
            return "LOSS";
        }
        else{
            announceDecision(selection, computerSelection);
            return "WIN";
        }
    }  
    else if (selection === "PAPER"){
        if (computerSelection === "ROCK"){
            announceDecision(selection, computerSelection);
            return "WIN";
        }
        else if (computerSelection === "PAPER"){
            announceDecision(selection, computerSelection);
            return "DRAW";
        }
        else {
            announceDecision(selection, computerSelection);
            return "LOSS";
        }
    }
    else {
        if (computerSelection === "ROCK"){
            announceDecision(selection, computerSelection);
            return "LOSS";
        }
        else if (computerSelection === "PAPER"){
            announceDecision(selection, computerSelection);
            return "WIN";
        }
        else {
            announceDecision(selection, computerSelection);
            return "DRAW";
        }
    }
}