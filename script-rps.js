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
    console.log(`${roundResult} PLAYER SCORE: ${playerScore} COMPUTER SCORE: ${computerScore}`);

    if (playerScore > 4){
        console.log("You Win! Congratulations, you are better than a computer");
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore > 4){
        console.log("You Lose! Humanity was no match against Machine!");
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

function playRound(e) {

    selection = e.target.id.toUpperCase()
    computerSelection = getComputerChoice();
    
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