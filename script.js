//user input
    const rockChoice = document.getElementById("rock-button");
    const paperChoice = document.getElementById("papet-button");
    const scissorsChoice = document.getElementById("scissors-button");

//rockButtonChoice, paperButtonChoice, scissorsButtonChoice all triggered from index
function rockButtonChoice(event) {
    alert("Rock. A little stone age but I guess it works")
    return userInput = "rock";
};

function paperButtonChoice() {
    alert("Call this controversial but no one has ever won a war with paper")
    return userInput = "paper";
};

function scissorsButtonChoice() {
    alert("Scissors, definitley a potential murder weapon")
    return userInput = "scissors";
};

function getUserChoice() {
    if (userInput === "rock" || userInput === "paper" || userInput ===  "scissors") {
        return userInput;
    } else {
    console.log("invalid input choice");
}};

//computer input
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() *3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return console.log("Error with getComputerChoice");
    };
}

//determine winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "We got a tie!";
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        return "The computer won because you brought paper to a scissors fight!";
    } else if (userChoice === "paper" && computerChoice === "rock") {
        return "You won... with paper... wow.";
    } else if (userChoice === "rock" && computerChoice === "paper") {
        return "The computer won... with paper... you lost to something we wrap presents for babies in because babies beat it every time… well done!";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        return "You won!";
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        return "The computer won!";
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        return "You won!"; 
    }};

//playing the game
function playGame() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    alert("you threw " + userChoice);
    alert("The computer threw " + computerChoice);
    alert(determineWinner(userChoice, computerChoice));
};