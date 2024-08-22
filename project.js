let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateScores(winner) {
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');
    const resultButton = document.getElementById('result-button');

    if (winner === 'player') {
        playerScore++;
        playerScoreElement.innerHTML = `You: ${playerScore}`;
        resultButton.innerHTML = 'You Win';
        resultButton.style.backgroundColor = 'green';
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreElement.innerHTML = `Computer: ${computerScore}`;
        resultButton.innerHTML = 'You Lose';
        resultButton.style.backgroundColor = 'red';
    } else {
        resultButton.innerHTML = 'Draw';
        resultButton.style.backgroundColor = 'gray';
    }
}

function updateChoicesDisplay(playerChoice, computerChoice) {
    const playerChoiceDisplay = document.getElementById('player-choice-display');
    const computerChoiceDisplay = document.getElementById('computer-choice-display');
    playerChoiceDisplay.innerHTML = `Player chose: ${playerChoice}`;
    computerChoiceDisplay.innerHTML = `Computer chose: ${computerChoice}`;
}

function playerChoice(choice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(choice, computerChoice);
    updateChoicesDisplay(choice, computerChoice);
    updateScores(winner);
}
