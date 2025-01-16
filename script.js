function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    switch(i) {
        case 0: 
            return "rock";
        case 1: 
            return "paper";
        case 2: 
            return "scissors";
        default: 
            console.log("Bound Error: Chance outside of possible options.")
            return;    
    }
}

const rock_btn  = document.querySelector("#rock-button");
const scissors_btn = document.querySelector("#scissors-button");
const paper_btn = document.querySelector("#paper-button");


const player_counter = document.querySelector("#playerscore");
const computer_counter = document.querySelector("#computerscore");
const result_element = document.querySelector("#result");

let playerScore = 0
let computerScore = 0
let roundsPlayed = 0

rock_btn.addEventListener("click", () => playRound("rock", getComputerChoice()))
scissors_btn.addEventListener("click", () => playRound("scissors", getComputerChoice()))
paper_btn.addEventListener("click", () => playRound("paper", getComputerChoice()))

function playRound(humanChoice, computerChoice) {
    console.log(`playerChoice: ${humanChoice}`);
    console.log(`computerChoice: ${computerChoice}`);
    console.log(`rounds played: ${roundsPlayed}`);
    if (roundsPlayed < 5) {
        if (humanChoice === "rock") { 
            if (computerChoice === "paper") {
                computerScore++;
            } else if (computerChoice === "scissors") {
                playerScore++; 
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                computerScore++;
            } else if (computerChoice === "rock") {
                playerScore++; 
            }
        } else {
            if (computerChoice === "rock") {
                computerScore++;
            } else if (computerChoice === "paper") {
                playerScore++; 
            }
        }
        player_counter.textContent = `Player Score: ${playerScore}`; 
        computer_counter.textContent = `Computer Score: ${computerScore}`;
        roundsPlayed++;
    } else {
        if (playerScore > computerScore) {
            result_element.textContent = "You won!";
        } else {
            result_element.textContent = "Computer won!";
        }
        const buttons = document.querySelectorAll("button");
        buttons.forEach((btn) => btn.disabled = true);
    }
}



