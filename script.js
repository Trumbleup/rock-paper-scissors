function computerPlay() { // computer's choice
		const choices = ['rock', 'paper', 'scissors'];
		const randomNumber = Math.floor(Math.random() * 3);
		const randomChoice = choices[randomNumber];
		return randomChoice;
	}

function playRound(playerSelection, computerSelection) { // selections of player and computerPlay()
	const newplayerSelection = playerSelection.toLowerCase();
	const newcomputerSelection = computerSelection.toLowerCase();
	if (newplayerSelection == newcomputerSelection) {
		return `T`
	}
	if (newplayerSelection == 'rock') {
		if (newcomputerSelection == 'paper') {
			return "L"
		} else {
			return "W"
		}
	} else if (newplayerSelection == 'scissors') {
		if (newcomputerSelection == 'paper') {
			return "L"
		} else {
			return "W"
		}
	} else if (newplayerSelection == 'paper') {
		if (newcomputerSelection == 'rock') {
			return "W"
		} else {
			return "L"
		}
	}
}

function game() {
	let player = 0;
	let computer = 0;
	const playerSelection = window.prompt('Select rock, paper, or scissors!', '');
	const computerSelection = computerPlay();
	const result = playRound(playerSelection, computerSelection);
	console.log(result);
	if (result == 'W') {
		player += 1;
	} else if (result == 'L') {
		computer += 1;
	}
	if (player > computer) {
		return `Player: ${player}, Computer: ${computer}, The winner is player!`
	}
	if (player < computer) {
		return `Player: ${player}, Computer: ${computer}, 'The winner is the computer!`
	}
	if (player == computer) {
		return `Player: ${player}, Computer: ${computer}, Tie!`
	}
};

function getPlayerChoice(e) {
	console.log(e.target.value) 
}

function handleGame() {

}

const btns = document.querySelectorAll('.choice');
btns.forEach(button => {
	button.addEventListener('click', event => {
		const computerChoice = computerPlay();
		const resultTag = document.querySelector('#result');
		const playerScoreTag = document.querySelector('#playerScore');
		const computerScoreTag = document.querySelector('#computerScore');
		const winner = document.querySelector('#winner');
		let playerFinal = (parseInt(playerScoreTag.textContent));
		let computerFinal = (parseInt(computerScoreTag.textContent));
		let result;
		if (event.target.value == 'rock') {
			result = playRound('rock', computerChoice);
		} else if (event.target.value == 'scissors') {
			result = playRound('scissors', computerChoice)
		} else if (event.target.value == 'paper') {
			result = playRound('paper', computerChoice)
		}
		if (result == 'W') {
			playerFinal = playerFinal + 1;
			playerScoreTag.textContent = playerFinal;
		} else {
			computerFinal = computerFinal + 1;
			computerScoreTag.textContent = computerFinal;
		}
		if (playerFinal == 5) {
			winner.textContent = 'You win!';
		} else if (computerFinal == 5) {
			winner.textContent = 'Computer wins!';
		}
		resultTag.textContent = result;
	});
});




