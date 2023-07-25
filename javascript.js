

/*const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
  alert("Hello WorldROCK");
});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
  alert("Hello WorldPAPER");
});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
  alert("Hello WorldSCISSORS");
});*/


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

function playRound(playerSelection, computerSelection) {

    // validate input
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        console.log("Invalid input!!");
        return;
    }

    // game logic
    if ((playerSelection === "rock" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "scissors")) {
        console.log(`Computer's selection is ${computerSelection}`);
        console.log("Tie!!");
        return (0);
    }
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log(`Computer's selection is ${computerSelection}`);
        console.log("You Lose!!");
        return (1);
    }
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log(`Computer's selection is ${computerSelection}`);
        console.log("You Win!!");
        return (2);
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let gameResult = 0;

    for (let i = 0; i < 5; i++) {
        // get user input
        const input = prompt("What is your selection?");
        console.log(`Your selection is ${input}`);

        gameResult = playRound(input, getComputerChoice());

        if (gameResult === 0) {
            console.log(`Your Score: ${playerScore}, Computer's Score: ${computerScore}`)
        } else if (gameResult === 1) {
            computerScore++;
            console.log(`Your Score: ${playerScore}, Computer's Score: ${computerScore}`)
        } else if (gameResult === 2) {
            playerScore++;
            console.log(`Your Score: ${playerScore}, Computer's Score: ${computerScore}`)
        }
    }

    // determine game winner
    if (playerScore > computerScore) {
        console.log("Congrats, you win!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lose!");
    } else if (playerScore === computerScore) {
        console.log("It's a tie!");
    }
}




game();