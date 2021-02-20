var startBtn = document.querySelector(".start-button");
// var startPage = document.querySelector("#start-page");
var startPage = document.getElementById("start-page");
var gamePage = document.getElementById("game-page");
var questionsPage = document.getElementById("questions-page");
var buttonAnswerEl = document.getElementById("answer-button");


startBtn.addEventListener("click", function () {
    startPage.style.display = "none";
    questionsPage.style.display = "flex";
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
              
        // {
        //   question: "Question 2",
        //   choices: ["Answer 2.1", "Answer 2.2", "Answer 2.3"],
        //   correctAnswer: 3
        // },

        // {
        //   question: "Question 3",
        //   choices: ["Answer 3.1", "Answer 3.2", "Answer 3.3", "Answer 3.4"],
        //   correctAnswer: 2
        // },

        // {
        //   question: "Question 4",
        //   choices: ["Answer 4.1", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
        //   correctAnswer: 2
        // },

        // {
        //   question: "Question 5",
        //   choices: ["Answer 5.1", "Answer 5.2", "Answer 5.3", "Answer 5.4"],
        //   correctAnswer: 2
        // }
      ];

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

    for (var i = 0; i < questions.length; i++) {
      for (var j = 0; j < questions[i].choices.length; j++) {
        // Create button
        // var buttonAnswerEl = $('<button>');
        // Assign style to the button
        buttonAnswerEl.addClass('button answer-btn');
        // Assign the letter to the data-letter attribute
        buttonAnswerEl.attr('data-answer', questions[i].choices[j]);
        // Display the letter
        buttonAnswerEl.text(questions[i].choices[j]);
        // Attach the letter element
        buttonAnswerEl.append(buttonAnswerEl);
  }
}

// while (quanswers.lquestions[i].choices[j] {
// // console.log ("there are "+questions.length+" elements in the questions array");
// var chosenQuestionNum = Math.floor(Math.random() * questions.length);
// // console.log ("i pick question number " + chosenQuestionNum);
// // console.log ("there are "+ questions.length + " questions - now lets remove question number "+chosenQuestionNum);
// var currentQuestion = questions[chosenQuestionNum];
// // console.log ("current question is " + typeof (currentQuestion));
// console.log ("current question is " + currentQuestion.question.toString());
// questions.splice (chosenQuestionNum,1);
// // console.log ("after removing index " + chosenQuestionNum + " we have " + questions.length + " questions left");
// };

// for (var i = 0; i < questions.length; i++) {
for ( var i in questions ) {
  currentquestion = questions[i].question;
  console.log ("The question is "+questions[i].question);
  console.log ("the correct answer is "+questions[i].correctAnswer);
    for (var j in questions[i].choices) {
      console.log ("Option number "+j+" is "+questions[i].choices[j]);
    }
}

// for (var i = 0; i < questions.length; i++) {
//   currentquestion = questions[i].question;
//   for (var j = 0; j < questions[i].choices.length; j++); {
//     currentchoice = questions[i].choices[j];
//     console.log ("q is "+currentquestion+" a  is "+currentchoice);
//   }
// }