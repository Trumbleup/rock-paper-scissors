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

	

	function game(rounds) {
		let player = 0;
		let computer = 0;
		for (let x = 1; x <= rounds; x++) {
			const playerSelection = window.prompt('Select rock, paper, or scissors!', '');
			const computerSelection = computerPlay();
			const result = playRound(playerSelection, computerSelection);
			console.log(result);
			if (result == 'W') {
				player += 1;
			} else if (result == 'L') {
				computer += 1;
			}
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
	console.log(game(5));