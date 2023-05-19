// Function where computer returns a random response from the choices Rock, Paper & Scissor
function getComputerChoice() {
  const moves = ['Rock', 'Paper', 'Scissor']
  const randomNumber = Math.floor(Math.random() * 3)
  return moves[randomNumber]
}

// Function where the decision is made by comparing playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
  console.log('Computer Choice : ', computerSelection)
  if (playerSelection === computerSelection) return 'draww'
  else if (playerSelection === 'rock' && computerSelection === 'scissor')
    return 'player'
  else if (playerSelection === 'rock' && computerSelection === 'paper')
    return 'computer'
  else if (playerSelection === 'paper' && computerSelection === 'scissor')
    return 'computer'
  else if (playerSelection === 'paper' && computerSelection === 'rock')
    return 'player'
  else if (playerSelection === 'scissor' && computerSelection === 'paper')
    return 'player'
  else if (playerSelection === 'scissor' && computerSelection === 'rock')
    return 'computer'
}

// Game Play Function
function game() {
  let playerPoints = 0,
    computerPoints = 0
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice().toLowerCase()
    const playerSelection = prompt(
      'Enter Your choice [Rock, Paper, Scissor] : '
    ).toLowerCase()
    const gameResult = playRound(playerSelection, computerSelection)
    if (gameResult === 'player') playerPoints++
    else if (gameResult === 'computer') computerPoints++
    console.log(
      `Round ${
        i + 1
      } : Player Move ${playerSelection}| Points : ${playerPoints} || Computer Move ${computerSelection} | Points : ${computerPoints}`
    )
  }
  if (computerPoints === playerPoints) console.log('RESULTS : DRAWWWWW')
  else if (playerPoints > computerPoints)
    console.log('RESULTS: CONGRATULATIONS!!! YOU WIN!')
  else console.log('RESULTS: YOU LOOSE! BETTER LUCK NEXT TIME!')
}

// Game Calling
game()
