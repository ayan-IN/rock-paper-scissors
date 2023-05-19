// Function where computer returns a random response from the choices Rock, Paper & Scissor
function getComputerChoice() {
  const moves = ['Rock', 'Paper', 'Scissor']
  const randomNumber = Math.floor(Math.random() * 3)
  return moves[randomNumber]
}

// Function where the decision is made by comparing playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
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
  // Variable Initialization
  let playerPoints = 0,
    computerPoints = 0
  // Game Loop
  for (let i = 0; i < 5; i++) {
    let playerSelection = 'Choose'
    const computerSelection = getComputerChoice().toLowerCase()
    //Input Validation
    while (
      playerSelection !== 'rock' &&
      playerSelection !== 'paper' &&
      playerSelection !== 'scissor'
    ) {
      playerSelection = prompt(
        'Enter Your choice [Rock, Paper, Scissor] : '
      ).toLowerCase()
      if (
        playerSelection !== 'rock' &&
        playerSelection !== 'paper' &&
        playerSelection !== 'scissor'
      )
        console.log('Wrong Input')
    }

    const gameResult = playRound(playerSelection, computerSelection)
    // Points Calculation
    if (gameResult === 'player') playerPoints++
    else if (gameResult === 'computer') computerPoints++
    console.log(
      `Round ${
        i + 1
      } : Player Move : ${playerSelection.toUpperCase()} | Points : ${playerPoints} || Computer Move : ${computerSelection.toUpperCase()} | Points : ${computerPoints}`
    )
  }
  // Results Checking
  if (computerPoints === playerPoints) console.log('RESULTS : DRAWWWWW')
  else if (playerPoints > computerPoints)
    console.log('RESULTS: CONGRATULATIONS!!! YOU WIN!')
  else console.log('RESULTS: YOU LOOSE! BETTER LUCK NEXT TIME!')
}

// Main Function Call
game()
