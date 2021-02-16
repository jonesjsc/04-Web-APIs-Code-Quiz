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
        },

        {
          question: "Question 3",
          choices: ["Answer 3.1", "Answer 3.2", "Answer 3.3", "Answer 3.4"],
          correctAnswer: 2
        },

        {
          question: "Question 4",
          choices: ["Answer 4.1", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
          correctAnswer: 2
        },

        {
          question: "Question 5",
          choices: ["Answer 5.1", "Answer 5.2", "Answer 5.3", "Answer 5.4"],
          correctAnswer: 2
        },
      ];

// for (var i = 0; i < questions.length; i++) {
//     currentquestion = questions[i].question;
//     console.log ( currentquestion );
//     var options = questions[i].choices;
//     console.log (options);
//     for ( var opt in options ) {
//          console.log (options[opt]);
//        }
//     }
while (questions.length > 0) {
// console.log ("there are "+questions.length+" elements in the questions array");
var chosenQuestionNum = Math.floor(Math.random() * questions.length);
// console.log ("i pick question number " + chosenQuestionNum);
// console.log ("there are "+ questions.length + " questions - now lets remove question number "+chosenQuestionNum);
var currentQuestion = questions[chosenQuestionNum];
// console.log ("current question is " + typeof (currentQuestion));
console.log ("current question is " + currentQuestion.question.toString());
questions.splice (chosenQuestionNum,1);
// console.log ("after removing index " + chosenQuestionNum + " we have " + questions.length + " questions left");
};
