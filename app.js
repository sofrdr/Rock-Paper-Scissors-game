// GETTING ELEMENTS

const choiceList = document.querySelectorAll('.choice-btn')
const choiceContainer = document.querySelector('.choice-container')
const gameContainer = document.querySelector('.game-container')



// CREATING ELEMENTS

const resultContainer = document.createElement('div');
resultContainer.classList.add('result-container')

const userChoiceContainer = document.createElement('div');
userChoiceContainer.classList.add('user-choice-container');
const userChoiceText = document.createElement('p');
userChoiceText.textContent = "You picked"
const userChoiceBtn = document.createElement('div');
userChoiceContainer.appendChild(userChoiceText);
userChoiceContainer.appendChild(userChoiceBtn)

resultContainer.appendChild(userChoiceContainer)

const gameResult = document.createElement('div');
gameResult.classList.add('game-result');
const resultText = document.createElement('p')
resultText.classList.add('result');
gameResult.appendChild(resultText)

const resultBtn = document.createElement('button')
resultBtn.classList.add('result-btn');
resultBtn.innerText = 'Play again'
gameResult.appendChild(resultBtn)
resultContainer.appendChild(gameResult)

const computerChoiceContainer = document.createElement('div');
computerChoiceContainer.classList.add('computer-choice-container');
const computerChoiceBtn = document.createElement('div');
computerChoiceContainer.innerHTML = '<p>The house picked</p>';
computerChoiceContainer.appendChild(computerChoiceBtn);
const computerChoiceIcon = document.createElement('img');
computerChoiceBtn.appendChild(computerChoiceIcon);
resultContainer.appendChild(computerChoiceContainer)



// FUNCTIONS

/* Defining the result and the score of the game */

let scoreNumber = document.querySelector('.score-number');
scoreNumber.textContent = 0
let score = 0
let result;

function displayResult() {

    switch (computerChoice) {
        case "scissors":
            if (userChoice === "rock") {
                result = "You win";
                score += 1

            } else if (userChoice === "paper") {
                result = "You lose";
            } else {
                result = "Equality";
            }
            break;
        case "paper":
            if (userChoice === "scissors") {
                result = "You win";
                score += 1
            } else if (userChoice === "rock") {
                result = "You lose";
            } else {
                result = "Equality";
            }
            break;
        case "rock":
            if (userChoice === "paper") {
                result = "You win";
                score += 1
            } else if (userChoice === "scissors") {
                result = "You lose";
            } else {
                result = "Equality";
            }
            break;
    }


    scoreNumber.textContent = score

}


// EVENTS LISTENERS

let userChoice = "";
let computerChoice = ""

for (let choice of choiceList) {
    choice.addEventListener('click', (e) => {

        // Defining user's choice
        userChoiceClicked = e.currentTarget
        userChoice = e.currentTarget.id;
        
        /* Defining the computer's choice. */
        let computer = Math.random()


        if (computer <= 1 / 3) {
            computerChoice = "scissors";
        } else if (computer <= 2 / 3) {
            computerChoice = "rock";
        } else {
            computerChoice = "paper";
        }

        displayResult()

        gameContainer.removeChild(choiceContainer)
        gameContainer.appendChild(resultContainer)
        userChoiceBtn.classList.add('user-choice', 'choice-btn', userChoice)
        userChoiceBtn.innerHTML = userChoiceClicked.innerHTML;

        computerChoiceBtn.classList.add('computer-choice', 'choice-btn', computerChoice)
        computerChoiceIcon.setAttribute('src', './images/icon-' + computerChoice + '.svg')

        document.querySelector('.result').innerText = result
    })
}


// Restarting the game

resultBtn.addEventListener('click', () => {
    gameContainer.removeChild(resultContainer);
    gameContainer.appendChild(choiceContainer);
    userChoiceBtn.classList.remove(userChoice)
    computerChoiceBtn.classList.remove(computerChoice)
})