
// Extract events from HTML code - 1 button and three `p` elements to push content to
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let user_guess = document.getElementById("user_guess");
let comp_guess = document.getElementById("comp_guess");
let result = document.getElementById("result");

let resultsCounter = document.querySelector('#resultsCounter');
let finalResult = document.querySelector('#finalResult');

// generate an array with three options to choose from
const options = ["Rock", "Paper", "Scissors"];

// create event listener to the button when it's being clicked
rock.addEventListener("click", () => {
    let myChoice = `Rock`;
    RespondToClick(myChoice);
});
paper.addEventListener("click", () => {
    let myChoice = `Paper`;
    RespondToClick(myChoice);
});
scissors.addEventListener("click", () => {
    let myChoice = `Scissors`;
    RespondToClick(myChoice);
});

let myScore = 0;
let compScore = 0;

// create a fnction to respond to the click and pass the results 
function RespondToClick(myChoice) {

    // sample a shape for the user randomly
    // let myGuess = options[Math.floor(Math.random() * options.length)];
    let myGuess = myChoice;
    // pass it to the `p` element
    user_guess.innerText = "Your shape: " + myGuess;
    
    // sample a shape for the computer randomly
    let compGuess = options[Math.floor(Math.random() * options.length)];
    // pass it to the `p` element
    comp_guess.innerText = "Computer shape: " + compGuess;

    // write a function to decide which of the two shapes is dominant or equal, 
    // with the two shapes passed as the parameters
    function winner(myGuess, compGuess) {
        finalResult.innerText = '';
        // create an empty variable to store the result
        let _temp_result;
        // first rule if they are equal, return a tie
        if (myGuess === compGuess) {
            _temp_result = "It's a tie!"
        }
        // remaining six rules for different combinations
        else if (myGuess === "Rock" && compGuess === "Paper") {
            _temp_result = "Computer wins since " + compGuess + " beats " + myGuess;
            compScore+=1;
        }
        else if (myGuess === "Rock" && compGuess === "Scissors") {
            _temp_result = "You win since " + myGuess + " beats " + compGuess;
            myScore+=1;
        }
        else if (myGuess === "Paper" && compGuess === "Rock") {
            _temp_result = "You win since " + myGuess + " beats " + compGuess;
            myScore+=1;
        }
        else if (myGuess === "Paper" && compGuess === "Scissors") {
            _temp_result = "Computer wins since " + compGuess + " beats " + myGuess;
            compScore+=1;
        }
        else if (myGuess === "Scissors" && compGuess === "Rock") {
            _temp_result = "Computer wins since " + compGuess + " beats " + myGuess;
            compScore+=1;
        }
        else if (myGuess === "Scissors" && compGuess === "Paper") {
            _temp_result = "You win since " + myGuess + " beats " + compGuess;
            myScore+=1;
        }
        // return the result
        resultsCounter.innerText = `Your Score: ${myScore}, computer score: ${compScore}`;
        if (myScore===5 || compScore ===5) {
            finalResult.setAttribute("style", "background-color: red; color:white; font-size: 30px;")
            if (myScore===5) finalResult.innerText = 'You win by reaching 5 points!';
            else finalResult.innerText = 'Computer wins by reaching 5 points!';
            myScore=0;
            compScore=0;
        }
        return _temp_result;
    }
    
    // pass the result to the `p` element containing the final result
    result.innerText = winner(myGuess, compGuess);
}
