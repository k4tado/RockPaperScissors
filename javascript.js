
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);

    switch (choice) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if ((playerSelection === "rock" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "scissors")) {
        return("Tie!");
    }

    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        return("You Lose!");
    }

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return("You Win!");
    }
}






/*

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


    const input = prompt("What is your selection?");
    console.log(`Your selection is ${input}`);
*/