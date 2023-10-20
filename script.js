const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector(".submit-btn");
const userInput = document.querySelector(".input-field");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".last-result");
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".guess-info-wrapper");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;


if(playGame) {
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert("Please enter a valid number")
    } else if(guess < 1) {
        alert("Please enter a number more than 1")
    } else if(guess > 100) {
        alert("Please enter a number less than 100")
    } else {
        prevGuess.push(guess)
        if(numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${randomNumber}`)
            endGame()
        }  else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame();
    } else if(guess < randomNumber) {
        displayMessage(`Number is TOO low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}   `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '' 
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id= "newGame>Start your new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameBtn = document.querySelector("")
    newGameBtn.addEventListener("click", (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - newGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
    })
}