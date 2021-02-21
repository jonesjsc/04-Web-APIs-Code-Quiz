var startBtn = document.querySelector(".start-button");
// var startPage = document.querySelector("#start-page");
var startPage = document.getElementById("start-page");
var gamePage = document.getElementById("game-page");
var questionsPage = document.getElementById("questions-page");
// var buttonAnswerEl = document.getElementById("answer-button");
var questionsText = document.getElementById("questions-text");

var buttonDiv = document.getElementById("button-ol");
var counterEl = document.getElementById("counter");
var QuizTable = [];
var correctAnswer = "";
var IndividualQuestion = [];
var questionIndex = 0;
var questionCard = document.querySelector("#question-card");
var btnCreate = document.createElement("button");
var buttonolEl = document.querySelector("#button-ol");
var secondsLeft = 10;
var quizOn = false;
console.log (questionIndex+" "+quizOn);





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


startBtn.addEventListener("click", function () {
  startPage.style.display = "none";
  questionCard.style.display = "flex";
  quizOn = true;
  console.log ("wtf "+" "+quizOn);
  countdownTimer();
  playOn();
  // document.getElementById("start-page").style.display = "none";
});

function playOn () {
  // for (questionIndex = 0; questionIndex < questions.length; questionIndex++) {
  // console.log ("im here "+questionIndex+" "+quizOn);
  //   if (quizOn == true) {
  //     showQuestion (questions[questionIndex]);
  //     console.log ("ive returned from showQuestion");
  //   }
  // }
  showQuestion (questions[0]);
  showQuestion (questions[1]);
}

// showQuestion (questions[1]);


// for (var i = 0; i < questions.length; i++) {
//     currentquestion = questions[i].question;
//     console.log ( currentquestion );
//     var options = questions[i].choices;
//       console.log ("question and choice 1 "+questions[i].choices[0]);
//     console.log (options);
//     for ( var opt in options ) {
//          console.log (options[opt]);
//        }
//     }

// for (var i = 0; i < questions.length; i++) {
// }

// function showQuestion (lquestion) {
//   correctAnswer = questions[questionIndex].correctAnswer;
//    for (var j = 0; j < questions[questionIndex].choices.length; j++) {
 
//      if (questions[questionIndex].choices[j] === questions[questionIndex]) {
//        var answer=true;
//        } else {
//        var answer=false;
//      }
//      var buttonAnswerEl = `<button class='button answer-btn' data-isCorrect=${answer}>${questions[questionIndex].choices[j]}</button>`;
//      buttonolEl.innerHTML += buttonAnswerEl;
//      buttonolEl.onclick = answerCheck; 
//    }
//  }

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
  var timerInterval = setInterval(function() {
    secondsLeft--;
    counterEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      console.log("DONE");
    }

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
    console.log ("CORRECT and quizOn "+quizOn); // waits a second, then advances to the next question
    } else {
    console.log ("INCORRECT and quizOn "+quizOn) // adjust downward the timer, waits a second, advanced to the next question
  }
  setTimeout(() => {  console.log("waiting"); }, 1000); // here's our waiting a second
  quizOn=true;

}
