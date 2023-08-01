
let computerScore = 0;
let playerScore = 0;

// event listener
const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
  playRound("rock");
});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
    playRound("paper");

});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    playRound("scissors");

});

// get computer choice
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

// compares player selection with computer selection and determines a winner
function game(playerSelection, computerSelection) {

    // validate input
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        console.log("Invalid input!!");
        return;
    }

    // Determine win/loss/tie
    if ((playerSelection === "rock" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "scissors")) {

        const result = document.getElementById('result');
        result.innerText = `Computer\'s selection is: ${computerSelection} \n The round ends in a tie.`;
        return (0);
    }
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {

        const result = document.getElementById('result');
        result.innerText = `Computer\'s selection is: ${computerSelection} \n You lose the round.`;
        return (1);
    }
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {

        const result = document.getElementById('result');
        result.innerText = `Computer\'s selection is: ${computerSelection} \n You win the round.`;
        return (2);
    }
}

//calls playRound and begins score tracking
function playRound(choice) {
    gameResult = game(choice, getComputerChoice());

    const score = document.getElementById('score');
    if (gameResult === 1) {
        computerScore++;
    } else if (gameResult === 2) {
        playerScore++;
    }
    score.innerHTML = `Your Score: ${playerScore}, Computer's Score: ${computerScore}`;

    if (computerScore === 5 ) {
        score.innerHTML = `The game is over, the computer wins with a score of ${computerScore}!`;
    } else if (playerScore === 5) {
        score.innerHTML = `The game is over, you win with a score of ${playerScore}!`;
    }
}

/*function endGame(){
    rockBtn.remove();
    paperBtn.remove();
    scissorsBtn.remove();
    result.innerText = '';
    score.innerText = '';

    const prompt = document.createElement('div');
    const playAgainPromot = prompt.innerText = 'Do you want to play again?';
}*/

