const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("scissors");

rock.addEventListener("click", playRound("ROCK", getComputerChoice));
paper.addEventListener("click", playRound("PAPPER", getComputerChoice));
scissors.addEventListener("click", playRound("SCISSORS", getComputerChoice));


game();

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

function playRound(selection, computerSelection) {

    if (selection === "ROCK"){
        if (computerSelection === "ROCK"){
            console.log("Draw! What a rocky resolution");
            return "DRAW";
        }
        else if (computerSelection === "PAPER"){
            console.log("You Lose! Paper beats Rock");
            return "LOSS";
        }
        else{
            console.log("You Win! Rock beats Scissors");
            return "WIN";
        }
    }  
    else if (selection === "PAPER"){
        if (computerSelection === "ROCK"){
            console.log("You Win! Paper beats Rock");
            return "WIN";
        }
        else if (computerSelection === "PAPER"){
            console.log("Draw! What a waste of Paper...");
            return "DRAW";
        }
        else {
            console.log("You Lose! Scissors beat Paper");
            return "LOSS";
        }
    }
    else {
        if (computerSelection === "ROCK"){
            console.log("You Lose! Rock beats Scissors");
            return "LOSS";
        }
        else if (computerSelection === "PAPER"){
            console.log("You Win! Scissors beats Paper");
            return "WIN";
        }
        else {
            console.log("Draw! 'snip snip' - Edward Scissorhands");
            return "DRAW";
        }
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerInput = window.prompt("Rock, Paper, Scissors...");
        const playerSelection = playerInput.toUpperCase();
        const computerSelection = getComputerChoice();

        if (playerSelection != "ROCK" && playerSelection != "PAPER" && playerSelection != "SCISSORS"){
            console.log("Please Enter a Valid Selection");
        }
        else {
            let roundResult = playRound(playerSelection, computerSelection);
            if (roundResult === "WIN"){
                playerScore++;
            }
            else if (roundResult === "LOSS"){
                computerScore++;
            }
        }
    }

    if (playerScore > computerScore){
        console.log("You Win! Congratulations, you are better than a computer");
    }
    else if (playerScore < computerScore){
        console.log("You Lose! Humanity was no match against Machine!");
    }
}