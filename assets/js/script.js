var startBtn = document.querySelector(".start-button");
// var startPage = document.querySelector("#start-page");
var startPage = document.getElementById("start-page");

startBtn.addEventListener("click", function () {
    startPage.style.display = "none";
    // document.getElementById("start-page").style.display = "none";
});

var QuizTable = [];
var IndividualQuestion = [];

var questions = 
      [
        {
          question: "Question 1",
          choices: ["Answer 1.1", "Answer 1.2", "Answer 1.3", "Answer 1.4"],
          correctAnswer: 2
        },
        
        {
          question: "Question 2",
          choices: ["Answer 2.1", "Answer 2.2", "Answer 2.3"],
          correctAnswer: 3
        }
      ];

for (var i = 0; i < questions.length; i++) {
    currentquestion = questions[i].question;
    console.log ( currentquestion );
    var options = questions[i].choices;
    console.log (options);
    for ( var opt in options ) {
         console.log (options[opt]);
       }
    }


