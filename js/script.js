var startButton = document.querySelector("#start-button");

var timeEl = document.querySelector("#timer");
var startingTime = 30;
var questionIndex = 0;
var quizQuestion = document.querySelector('#question');
var playerScore = document.querySelector('#score');
var score = 0;

var questionList = [
{
questionLine: "Is a zebera black with white strips or white with black white strips?",
answerLine:["white on black", "black on white", "yes"],
response: "zebras make great pets",
correct: 3,
},

{
questionLine: "How many Lowe's would Rob Lowe rob if Rob Lowe could rob Lowe's",
answerLine:[ "4", "0", "Rob Lowe would rob all the Lowe's Rob Lowe could rob if Rob Lowe could rob Lowe's"],
response: "Rob Lowe would NEVER rob Lowe's",
correct: 2, 
},

{
questionLine: "Who is the greatest captain to ever captain the starship 'Enterprise'?",
answerLine:[ "James T. Kirk", "Jean-Luc Picard", "Gonzo"],
response: "Gonzo would have made a terrific starship Captain",
correct: 2,
}
]

function startTimer() {
  var timerInterval = setInterval(function() {
    startingTime--;
    timeEl.textContent = "Remaining Seconds:" + startingTime;

    if(startingTime === 0) {
      clearInterval(timerInterval);
      endWorld();
    }

  }, 1000);


}

function endWorld(){
  starterPage.style.display = 'none';
  questionPage.style.display = 'none';
  endTimes.style.display = 'flex'

}

function startGame() {
    console.log(questionIndex);
    starterPage.style.display = 'none';
    questionPage.style.display = 'flex';
    playerScore.textContent = score;
    quizQuestion.textContent = questionList[questionIndex].questionLine;

startTimer();
  }

startButton.addEventListener("click", startGame);  