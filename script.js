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

function getHumanChoice() {
    let choice = prompt("Type in your play.");
    return choice.toLowerCase; 
}
   
function playRound(humanChoice, computerChoice) {
   if (humanChoice === "rock") { 
        if (computerChoice === "paper") {
            return -1
        } else if (computerChoice === "scissors") {
            return 1 
        }
   } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            return -1
        } else if (computerChoice === "rock") {
            return 1 
        }
   } else {
        if (computerChoice === "rock") {
            return -1
        } else if (computerChoice === "paper") {
            return 1 
        }
   }
   return 0;
}

function playGame() {
    let humanScore = 0; 
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice(); 
        let computerChoice = getComputerChoice(); 
        let result = playRound(humanChoice, computerChoice);
        switch (result) {
            case 1: 
                humanScore++;
                break;
            case -1: 
                computerScore++; 
                break;
            default:     
        }        
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
    if (humanScore > computerScore) {
        console.log("Human won.");
    } else if (humanScore == computerScore) {
        console.log("Draw.");
    } else {
        console.log("Computer won.");
    }
}

playGame();
