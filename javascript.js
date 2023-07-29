
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
        console.log(`Computer's selection is: ${computerSelection}`);
        console.log("This round is a tie.");
        return (0);
    }
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log(`Computer's selection is: ${computerSelection}`);
        console.log("You lose the round.");
        return (1);
    }
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log(`Computer's selection is: ${computerSelection}`);
        console.log("You win the round.");
        return (2);
    }
}

//calls playRound and begins score tracking
function playRound(choice) {
    let computerScore = 0;
    let playerScore = 0;
    let gameResult = 0;

    //for (let i = 0; i < 5; i++) {
        // get user input
        //const input = prompt("What is your selection?");
        //console.log(`Your selection is ${input}`);

        gameResult = game(choice, getComputerChoice());

        if (gameResult === 0) {
            console.log(`Your Score: ${playerScore}, Computer's Score: ${computerScore}`)
        } else if (gameResult === 1) {
            computerScore++;
            console.log(`Your Score: ${playerScore}, Computer's Score: ${computerScore}`)
        } else if (gameResult === 2) {
            playerScore++;
            console.log(`Your Score: ${playerScore}, Computer's Score: ${computerScore}`)
        }
    //}

    // determine game winner
    if (playerScore > computerScore) {
        console.log("Congrats, you win!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lose!");
    } else if (playerScore === computerScore) {
        console.log("It's a tie!");
    }
}