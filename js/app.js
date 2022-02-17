
const holesdiv = document.querySelector(".holes");
const score = document.querySelector(".score");
const time = document.querySelector(".time");
const startbutton=document.querySelector(".model button");
const highscore = document.querySelector(".highscore")
const gameover=document.queryCommandIndeterm(".display h2");
const shoe=document.querySelector(".shoe");
const model = document.querySelector(".model")


let timeRem;
let pscore=0;
let maxscore=0;


for(let i=1; i<= 15; i++) {
	let hole = document.createElement("div"); 
	hole.classList.add("hole");
	holesdiv.appendChild(hole);
	let pile=document.createElement("img");
	pile.classList.add("pile");
	pile.src="./images/hill.png";
	hole.appendChild(pile);
	let redAnt=document.createElement("img");
	redAnt.classList.add("redAnt");
	redAnt.src="./images/redAnt.png";
	redAnt.setAttribute("name","redAnt");
	hole.appendChild(redAnt);
}

/*window.addEventListener("mousemove", (e) => {
	shoe.style.left = e.pageX + "px";
	shoe.style.top=(e.pageY - 60) +"px";
});*/

window.addEventListener("click", (e)=>{
	if (e.target.name==="redAnt")
	{
	setTimeout(()=>{
		document.body.classList.toggle("flash")
	},20)
		document.body.classList.toggle("flash");
		pscore=pscore+1
		score.textContent=pscore;
	}
});

startbutton.addEventListener("click", () => {
	 model.classList.add("modelclose");
	 timeRem=20;
	 pscore=0;
	 score.textContent= pscore
	 time.textContent= timeRem

	 let timer = setInterval(() => {
		 time.textContent = timeRem;
		 if (timeRem === 0){
			 gameover.style.visibility("visible")
			 model.classList.remove("modelclose")
		 if(pscore>maxscore)
			 {
				 maxscore=pscore
				 highscore.textContent = maxscore
			 } else {
				 highscore.textContent = maxscore
			 }
				
			 clearInterval(timer);
		 } else { 
		 timeRem--;
		 time.textContent=timeRem < 20 ? "0" + timeRem : timeRem;
		 const redAnt=document.querySelectorAll(".redAnt")
		 let chooseAnt = Math.floor(Math.random() * redAnt.length);
		 redAnt[chooseAnt].style.pointerEvents = "all";
		 redAnt[chooseAnt].style.animation = "antup 1.7s ease";
		 redAnt[chooseAnt].addEventListener("animationend", () => {
			redAnt[chooseAnt].style.pointerEvents="all";
			redAnt[chooseAnt].style.animation = "antdown 0.7s ease";
			redAnt[chooseAnt].addEventListener("animationend", () => {
				redAnt[chooseAnt].style.pointerEvents = "none";
			});
		});
		}
	 }, 1000);
	})

	
	
	
	/*------------------------------- Constants --------------------------------*
const choices = ["sq0", "sq1", "sq2", "sq3" ,"sq4" ,"sq5"]
const scores = []
/*---------------------------- Variables (state) ----------------------------
let playerChoice, comChoice, msg

/*------------------------ Cached Element References ------------------------
/*playing Board
message/game status

const sq0 = document.querySelector('#sq0')
const sq1 = document.querySelector('#sq1')
const sq2 = document.querySelector('#sq2')
const sq3 = document.querySelector('#sq3')
const sq4 = document.querySelector('#sq4')
const sq5 = document.querySelector('#sq5')
const image = document.createElement('img')
image.src = 'https://imgur.com/lGGPUp8'

const scoreContainer= document.querySelector('#score')
/*----------------------------- Event Listeners -----------------------------

playAgainButton.addEventListener("click", () => {
	console.log("pressed")
})
sq0.addEventListener("click", play)
sq1.addEventListener("click", play)
sq2.addEventListener("click", play)
sq3.addEventListener("click", play)
sq4.addEventListener("click", play)
sq5.addEventListener("click", play)


/*-------------------------------- Functions --------------------------------

function getPlayerChoice(event) {
  playerChoice = event.target.id
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length)
  compChoice = choices[randomIndex]
}

function compare() {
		if (playerChoice == compChoice) {
			msg = 'You guessed right!'
		}else {
			msg = 'Wrong guess!'
		}
	}

	function displayCompChoice() {
		if (compChoice === "sq0")
		document.querySelector('#sq0').appendChild(image)
	} 

	function render() {
		scoreContainer.innerText = `You chose ${playerChoice} and the computer chose ${compChoice}. ${msg}`
	}
	
	function play(event) {
		getPlayerChoice(event)
		getComputerChoice()
		compare()
		render()
		displayCompChoice()
	}
	*/
/*function addPoint0(evt) {
	const isSquare = evt.target.id === "sq0"
	const newScore = {
		text: isSquare ? 'point scored' : 'no point scored'
	}
	scores.push(newScore)
	render()
}*/

/*
function render() {
	scoreContainer.innertext = `Score = ${addPoint0}`
  // quotes is an array of quote objects
  scores.forEach((point) => {
    // quote is an object with the shape of:
    // { artist: "artist name", text: "quote" }
    appendScore(point)
  }) 
}


function appendScore(point) {`
	let scoreCard = document.createElement("div")
	scoreCard.innerHTML = 
	`<div class="card-body">
	<blockquote class="blockquote mb-0">
		<p>${point}</p>
		<footer class="blockquote-footer text-end artist-name">
			${point}
		</footer>
	</blockquote>
	</div>`
	scoreContainer.getAttribute(scoreCard);*/


/*const scoreBoard = document.createElement("newScore");
newScore = function(score) {
	return score + 1
}
scoreBoard.appendChild([newScore]);

addPoint = function(evt) {
	//is either true or false
	if (evt.target.id === "sq1") {
	score.push('point')}
	else {
		score.push('no point')
	}
	console.log(score);
	}*/


/*1) Define the required variables used to track the state of the game:

2) Store cached element references on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant:

3) Upon loading, the app should:
	3.1) Call an initialize function to initialize the state variables
	3.2) Render those values to the page
	3.3) Wait for the user to click a square

4) Define the required constants

5) Handle a player clicking a square

6) Handle a player clicking the replay button */
// 1) Define the required variables used to track the state of the game:

/*- **Render a game in the browser**. You may not use Canvas.
- **Include win/loss logic and render win/loss messages in HTML.**
- Include separate HTML, CSS & JavaScript files.
- Have **properly indented HTML, CSS & JavaScript**. Additionally, vertical whitespace needs to be consistent.
- Display a favicon.
- Use CSS Flexbox or Grid (or grid functionality as provided by a CSS Framework).
- The game looks and feels similar to apps we use on a daily basis - it has a consistent and polished user interface and offers a positive user experience.
- No remaining **dead or commented out code**.
- Have functions and variables that are named sensibly.
- **Display that you are making consistent code choices**. For example, choose between your preference for function declarations vs. function expressions.
- **Be deployed online** so that the rest of the world can play your game!
- Include functionality specific to your game as specified in the Recommended Games section below, or as discussed with your instructor if building a game not on the Recommended Games list.*/
  // None of these variables will need to hold a value when they are defined

	// 1.1) Use an array to represent the squares on the board.    

	// 1.2) Use a turn variable to track whose turn it is.

	// 1.3) Use a winner variable to represent three different game states:
	  // a player that won
	  // a tie has occured
	  // or a game that is still in play.


// 2) Store cached element references on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant:
	
	// 2.1) Store the 9 elements that represent the squares on the page.
	  // You may want to give each square a class name in your HTML to make this easier!

	// 2.2) Store the element that displays the game status on the page.


// 3) Upon loading, the app should:

	// 3.1) Call an initialize function

	// 3.2) That initialize function should initialize the state variables:
	  // 3.2.1) Initialize the board array to 9 nulls to represent empty squares. 
	    // The 9 elements will "map" to each square.
	    // Index 0 represents the top-left square.
	    // Index 1 represents the top-middle square.
			// So on, continuing through the entire board until...
	    // Index 8 maps to the bottom-right square.
	  // 3.2.2) Initialize whose turn it is to 1 (player 'X'). 
	    // Player 'O' will be represented by -1.
	  // 3.2.3) Initialize the winner variable to null.
	    // This represents that there is no winner or tie yet. 
	    // The winner variable will hold the player value (1 or -1) if there's a winner. 
	    // The winner will hold a 'T' if there's a tie.
	  // 3.2.4) Render those state variables to the page by calling a render function.

	// 3.3) The render function should:
	  // 3.3.1) Loop over the board array (which represents the squares on the page), and for each iteration:
		  // 3.3.1.1) Use the index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array
		  // 3.3.1.2) Style that square however you wish dependant on the value contained in the current cell being iterated over (-1, 1, or null)
	  // 3.3.2) Render a message reflecting the currrent game state:
	    // 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
	      // Hint: Maybe use a ternary inside of a template literal here?
	    // 3.3.2.2) If winner is equal to 'T' (tie), render a tie message.
	    // 3.3.2.3) Otherwise, render a congratulatory message to which player has won.
	      // Hint (again): Maybe use a ternary inside a template literal here

		// 3.4) After completing this step, you should be able to manually change the values held in the board array in the initialization function and see the style of the corresponding square change on your page.


// 4) Define the required constants:

	// 4.1) Define the 8 possible winning combinations as an array of arrays.
	  // Each array will contain three indexes of the board that make a winner if they hold the same player value. 
		// If you are having trouble with this step, feel free to check out the winningCombos array in the solution code. 


// 5) Next, the app should wait for the user to click a square and call a handleClick function
  // the handleClick function will...

	// 5.1) Obtain the index of the square that was clicked by:
	  // 5.1.1) "Extracting" the index from an id assigned to the element in the HTML 
		// Hint: Each id seems to correspond with an index in our board array. How could these be used if
		// we cleaned them up a bit?

	// 5.2) If the board has a value at the index, immediately return because that square is already taken.

	// 5.3) If winner is not null, immediately return because the game is over.

	// 5.4) Update the board array at the index with the value of turn.

	// 5.5) Change the turn by multiplying turn by -1 (this flips a 1 to -1, and vice-versa).

	// 5.6) Set the winner variable if there's a winner by calling a new function: getWinner.
	  // The getWinner function will...

	  // 5.6.1) There are a couple methods you can use to find out if there is a winner.
	   // This is the first, more elegant way that takes advantage of the winningCombos array you wrote above in step 4.
	   // The 5.6.2 step is a little simpler to comprehend, but you'll need to write a lot more code.
	   // The 5.6.2 step also won't take advantage of the winningCombos array, but using it as a reference will help you build a solution.
	   // Choose only one path.
		  // 5.6.1.1) Loop through the each of the winning combination arrays defined.
		  // 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
		  // 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
		  // 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.2) This solution is less elegant, but might be easier to write on your own if you're struggling with the 5.6.1.X pseudocode.
		  // 5.6.2.1) For each one of the winning combinations you wrote in step 4, find the total of each winning combination.
		  // 5.6.2.2) Convert the total to an absolute value (convert any negative total to positive)
		  // 5.6.2.3) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.3) Next, If there's no winner, check if there's a tie:

		// 5.6.4) Set the winner varible to "T" if there are no more nulls in the board array by returning the string "T".
	  
		// 5.6.5) Otherwise return null.

// 5.7) All state has been updated, so render the state to the page (step 3.3).


// 6) Handle a player clicking the replay button:

	// 6.1) Add a replay button to the HTML document

	// 6.2) Store the new replay button element

	// 6.3) Do steps 4.1 (initialize the state variables) and 4.2 (render)