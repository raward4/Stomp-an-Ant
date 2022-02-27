/*-------------------------------- Constants --------------------------------*/
const holesdiv = document.querySelector(".holes");
const score = document.querySelector(".score");
const time = document.querySelector(".time");
const startbutton=document.querySelector(".modal button");
const highscore = document.querySelector(".highscore")
const gameover=document.querySelector(".display h2");
const shoe=document.querySelector(".shoe");
const modal = document.querySelector(".modal");


/*---------------------------- Variables (state) ----------------------------*/
let timeRem;
let pscore=0;
let maxscore=0;

/*--------------Cached Element References / Event Listeners / Functions-----------*/
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

window.addEventListener("mousemove", (e) => {
	shoe.style.left = e.pageX + "px";
	shoe.style.top=(e.pageY - 60) +"px";
});

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
	 modal.classList.add("modalclose");
	 timeRem=20;
	 pscore=0;
	 score.textContent= pscore
	 time.textContent= timeRem

	 let timer = setInterval(() => {
		 time.textContent = timeRem;
		 if (timeRem === 0) {
			 modal.classList.remove("modalclose");
			 button.textContent = "Play again?";
			 alert("Time is up! Great job, now try and beat your score!")
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