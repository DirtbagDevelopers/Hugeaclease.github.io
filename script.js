//user input
    const rockChoice = document.getElementById("rock-button");
    const paperChoice = document.getElementById("papet-button");
    const sciccorsChoice = document.getElementById("sciccors-button");

//rockButtonChoice, paperButtonChoice, sciccorsButtonChoice all triggered from index
function rockButtonChoice(event) {
   return userInput = "rock";
};

function paperButtonChoice() {
    return userInput = "paper";
};

function sciccorsButtonChoice() {
    return userInput = "sciccors";
};

function getUserChoice() {
    if (userInput === "rock" || userInput === "paper" || userInput ===  "sciccors") {
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
            return "sciccors";
        default:
            return console.log("Error with getComputerChoice");
    };
}

//determine winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "We got a tie!";
    } else if (userChoice === "paper" && computerChoice === "sciccors") {
        return "The computer won!";
    } else if (userChoice === "paper" && computerChoice === "rock") {
        return "You won!";
    } else if (userChoice === "rock" && computerChoice === "paper") {
        return "The computer won!";
    } else if (userChoice === "rock" && computerChoice === "sciccors") {
        return "You won!";
    } else if (userChoice === "sciccors" && computerChoice === "rock") {
        return "The computer won!";
    } else if (userChoice === "sciccors" && computerChoice === "paper") {
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