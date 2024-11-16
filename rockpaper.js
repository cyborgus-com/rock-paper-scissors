
// Extract events from HTML code - 1 button and three `p` elements to push content to
const generator = document.getElementById("generator");
let user_guess = document.getElementById("user_guess");
let comp_guess = document.getElementById("comp_guess");
let result = document.getElementById("result");

// generate an array with three options to choose from
const options = ["Rock", "Paper", "Scissors"];

// create event listener to the button when it's being clicked
generator.addEventListener("click", RespondToClick);

// create a fnction to respond to the click and pass the results 
function RespondToClick() {

    // sample a shape for the user randomly
    let myGuess = options[Math.floor(Math.random() * options.length)];
    // pass it to the `p` element
    user_guess.innerText = "Your shape: " + myGuess;
    
    // sample a shape for the computer randomly
    let compGuess = options[Math.floor(Math.random() * options.length)];
    // pass it to the `p` element
    comp_guess.innerText = "Computer shape: " + compGuess;

    // write a function to decide which of the two shapes is dominant or equal, 
    // with the two shapes passed as the parameters
    function winner(myGuess, compGuess) {
        // create an empty variable to store the result
        let _temp_result;
        // first rule if they are equal, return a tie
        if (myGuess === compGuess) {
            _temp_result = "It's a tie!"
        }
        // remaining six rules for different combinations
        else if (myGuess === "Rock" && compGuess === "Paper") {
            _temp_result = "Computer wins since " + compGuess + " beats " + myGuess;
        }
        else if (myGuess === "Rock" && compGuess === "Scissors") {
            _temp_result = "You win since " + myGuess + " beats " + compGuess;
        }
        else if (myGuess === "Paper" && compGuess === "Rock") {
            _temp_result = "You win since " + myGuess + " beats " + compGuess;
        }
        else if (myGuess === "Paper" && compGuess === "Scissors") {
            _temp_result = "Computer wins since " + compGuess + " beats " + myGuess;
        }
        else if (myGuess === "Scissors" && compGuess === "Rock") {
            _temp_result = "Computer wins since " + compGuess + " beats " + myGuess;
        }
        else if (myGuess === "Scissors" && compGuess === "Paper") {
            _temp_result = "You win since " + myGuess + " beats " + compGuess;
        }
        // return the result
        return _temp_result;
    }
    
    // pass the result to the `p` element containing the final result
    result.innerText = winner(myGuess, compGuess);
}
