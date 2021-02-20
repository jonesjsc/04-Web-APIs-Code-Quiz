var startBtn = document.querySelector(".start-button");
// var startPage = document.querySelector("#start-page");
var startPage = document.getElementById("start-page");
var gamePage = document.getElementById("game-page");
var questionsPage = document.getElementById("questions-page");
// var buttonAnswerEl = document.getElementById("answer-button");
var buttonDiv = document.getElementById("button-ol");
startBtn.addEventListener("click", function () {
  startPage.style.display = "none";
  questionCard.style.display = "flex";
  // document.getElementById("start-page").style.display = "none";
});

var QuizTable = [];
var IndividualQuestion = [];
var questionIndex = 0;
var questionCard = document.querySelector("#question-card");
var btnCreate = document.createElement("button");
var buttonolEl = document.querySelector("#button-ol");



var questions =
  [
    {
      question: "Question 1",
      choices: ["Answer 1.1", "Answer 1.2", "Answer 1.3", "Answer 1.4"],
      correctAnswer: "Answer 1.3"
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

// for (var i = 0; i < questions.length; i++) {
// }
for (var j = 0; j < questions[questionIndex].choices.length; j++) {
  
  // console.log (questions[questionIndex].choices[j]);
  var buttonAnswerEl = (`<button class='button answer-btn'>${questions[questionIndex].choices[j]}</button>`);
  console.log(buttonAnswerEl);
  document.body.appendChild(buttonAnswerEl);
  
  // var myBtn = document.createElement("button");
  // myBtn.textContent = "here";
  // myBtn.document.createElement("button");
  // var buttonAnswerEl = (`<button class='button answer-btn'></button>`);
  // buttonAnswerEl.onclick = someFunctionName;
  // buttonDiv.append(buttonAnswerEl);
}


function render(questionNumber) {

  // Clears existing data 
  
  questionCard.innerHTML = "";
  btnCreate.innerHTML = "";
  
  // For loops to loop through all info in array
  
  for (var i = 0; i < questions.length; i++) {
      // Appends question title only
      var userQuestion = questions[questionIndex].question;
      var allAvailableChoices = questions[questionIndex].choices;
      questionCard.textContent = userQuestion;
  }
  
  // New for each for question choices
  
  allAvailableChoices.forEach(function (newItem) {
      var listItem = document.createElement("button");
      listItem.textContent = newItem;
      questionCard.appendChild(btnCreate);
      btnCreate.appendChild(listItem);
      // listItem.addEventListener("click", (compare));
  })

}

// render(0);

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


// for (var i in questions) {
//   currentquestion = questions[i].question;
//   console.log("The question is " + questions[i].question);
//   console.log("the correct answer is " + questions[i].correctAnswer);
//   for (var j in questions[i].choices) {
//     console.log("Option number " + j + " is " + questions[i].choices[j]);
//   }
// }

// for (var i = 0; i < questions.length; i++) {
//   currentquestion = questions[i].question;
//   for (var j = 0; j < questions[i].choices.length; j++); {
//     currentchoice = questions[i].choices[j];
//     console.log ("q is "+currentquestion+" a  is "+currentchoice);
//   }
// }