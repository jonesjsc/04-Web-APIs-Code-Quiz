var startBtn = document.querySelector(".start-button");
// var startPage = document.querySelector("#start-page");
var startPage = document.getElementById("start-page");
var gamePage = document.getElementById("game-page");
var questionsPage = document.getElementById("questions-page");
// var buttonAnswerEl = document.getElementById("answer-button");
var questionsText = document.getElementById("questions-text");
var scoreCard = document.getElementById("score-card");

var buttonDiv = document.getElementById("button-ol");
var counterEl = document.getElementById("counter");
var finalScore = document.getElementById("finalScore");
var QuizTable = [];
var correctAnswer = "";
var IndividualQuestion = [];
var questionIndex = 0;
var questionCard = document.querySelector("#question-card");
var btnCreate = document.createElement("button");
var buttonolEl = document.querySelector("#button-ol");
var secondsLeft = 99;
var quizOn = false;
var penalty = 10;
var timerInterval;
var lastScore = 0;

scoreCard.style.display = "none";

var questions =
  [
    {
      question: "Question 1",
      choices: ["Answer 1.1", "Answer 1.2", "Answer 1.3", "Answer 1.4"],
      correctAnswer: "Answer 1.3"
    },

    {
      question: "Question 2",
      choices: ["Answer 2.1", "Answer 2.2", "Answer 2.3"],
      correctAnswer: "Answer 2.3"
    },

    {
      question: "Question 3",
      choices: ["Answer 3.1", "Answer 3.2", "Answer 3.3", "Answer 3.4"],
      correctAnswer: "Answer 3.2"
    },

    {
      question: "Question 4",
      choices: ["Answer 4.1", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
      correctAnswer: "Answer 4.1"
    },

    {
      question: "Question 5",
      choices: ["Answer 5.1", "Answer 5.2", "Answer 5.3", "Answer 5.4"],
      correctAnswer: "Answer 5.4"
    }
  ];


startBtn.addEventListener("click", initGame); 

function initGame () {
  startPage.style.display = "none";
  questionCard.style.display = "flex";
  quizOn = true;
  countdownTimer();
  questionIndex = 0;
  showQuestion (questions[questionIndex]); 
}

function playOn () {
}

function showQuestion (lquestion) {
quizOn=false;
 displayQuestion=false; // need to hold up until we get the click action
 questionsText.textContent = lquestion.question;  // push out the text of the question
 correctAnswer = lquestion.correctAnswer; // lets pull the correctAnswer out and hold it here
 console.log ("correntAnswer is "+correctAnswer);
  for (var j = 0; j < lquestion.choices.length; j++) {  //let loop through number of answers

    var buttonAnswerEl = `<button class='button answer-btn'>${lquestion.choices[j]}</button>`; //build the HTML to render buttons
    buttonolEl.innerHTML += buttonAnswerEl;
  }
buttonolEl.onclick = answerCheck; // drop a click listener on that whole thing and call the answerCheck function when clicked
}

function countdownTimer() {
  // quizOn = false;
  // Sets interval in variable
   timerInterval = setInterval(function() {
    secondsLeft--;

    if(secondsLeft < 0) {
      secondsLeft = 0;
      clearInterval(timerInterval);
      counterEl.textContent = secondsLeft;  // update counter here in case counter is negative
    }
    counterEl.textContent = secondsLeft;  // update counter

  }, 1000);

}
function answerCheck (event) {
  
  // the click listener is applied to the whole DIV - so it's possible to receive clicks in the DIV but
  // not on the button.  Fortunately, we can pull tagName from event.target and do stuff only if a 
  // button was clicked.

  if (event.target.tagName !== "BUTTON") {
    return;  // we heard a click, but it wasn't on a BUTTON, so, peace out.
  }
  
  // event.target.textContent has the text of the answer.  Previously we set a glocal variable to correctAnswer
  // so lets check them now and fire the approppriate steps.
  
  if (correctAnswer == event.target.textContent) {
    console.log("correct answer");

    } else {
    
    if ((secondsLeft -= penalty) < 0) {  // we could easily deduct more time than is left on the clock so lets not do that
      secondsLeft === 0;  
    }
    console.log("incorrect answer");
    
  }
  questionIndex++; // progress to the next question
  if (questionIndex < questions.length) {
    console.log ("play on");
    buttonolEl.innerHTML = "";
    showQuestion (questions[questionIndex]);
  
    quizOn=true;
  
  } else {

    lastScore = secondsLeft;
    console.log ("your final score is "+lastScore);
    clearInterval(timerInterval);
    counterEl.textContent = secondsLeft;
    displayScorePage ();

  }
  
}

function displayScorePage () {
  console.log("displayScorePage "+lastScore);
  questionCard.style.display = "none";
  scoreCard.style.display = "flex";
  finalScore.textContent = lastScore;

}
var initialFormEl = $('#initials-form');
var winnersList = [];
// create function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  console.log ("entered handleFormSubmit");

  // select form element by its `name` attribute and get its value
  var winnerInitials = $('input[name="initials-input"]').val();

  // if there's nothing in the form entered, don't print to the page
  if (!winnerInitials) {
    console.log('clicked submit but didnt enter initials');
    return;
  }

  // local.storage array time
  
  console.log (winnerInitials);
  console.log (lastScore);

  // clear the form input element
  $('input[name="initials-input"]').val('');

}

// Create a submit event listener on the form element
initialFormEl.on('submit', handleFormSubmit);
