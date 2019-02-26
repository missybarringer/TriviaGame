// create a splash page with a start button, once clicked go to first question
// display timer countdown number, question, and all possible answers
// if answer chosen then decide if it was correct or not & increment appropriate right/wrong counter
// if wrong display "Nope" and correct answer & pic
// if right display "Yuppers" & pic
// if answer not chosen then display "You zoned out" & correct answer & pic
// After a few seconds, display the next question without user input
// end of game print "All done, here's how you did!" followed by correct, incorrect, & unanswered tallies
// Start Over? click will start the game over again  (without reloading the page)


var startScreen;
var gameHTML;
var counter = 15;
var questionCounter = 0;
var selectorAnswer;
var theClock;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var indexQandA = 0;

var questionArray = ["What is the fastest animal?", "When you are blue you turn?"];
var answerArray = [["cheetah","turtle","giraffe", "elephant"],["red", "green", "blue", "yellow"]];
var correctAnswers = ["A. cheetah", "C. blue"];

var triviaGame = [{
    question:"What is the fastest animal?",
    answer:["cheetah","turtle","giraffe","elephant"],
    correct:"0",
    image: ("assets/images/circle.png")
}, { 
    question:"When you are upset you turn?",
    answer:["red","green","blue","yello"],
    correct:"1",
    image: ("assets/images/dot.jpg")
}];

$(document).ready(function() {
function initialScreen() {
    startScreen = "<p class='text-center main-button-container'><a class='btn btn-warning btn-lg btn-block start-button' href='#' role='button'>Start Quizz</a></p>";
    $(".content").html(startScreen);
}
initialScreen();
  
$(".start-button").on("click", function() {
    generateHTML();
    timerWrapper();
});

// $(".answer").on("click", function() {
$("body").on("click", ".answer", function() {
    selectedAnswer = $(this).text();
    if(selectedAnswer === correctAnswers[questionCounter]) {
        clearInterval(theClock);
        generateWin();
    } else {
        clearInterval(theClock);
        generateLoss();
    }
});

// $(".reset-button").on("click", function() {
    $("body").on("click", ".reset-button", function() {
    resetGame();
});

});

function generateLossDueToTimeOut() {
    unanswered++;
    gameHTML = "<p class='text-center timer-p'>Time remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text center'>Times UP! The answer is: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/circle.png'>";
    $(".content").html(gameHTML);
    setTimeout(wait, 1000);
}
function generateWin() {
    correct++;
    gameHTML = "<p class='text-center timer-p'>Time remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text center'>Righty roo! The answer is: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/dot.jpg'>";
    $(".content").html(gameHTML);
    setTimeout(wait, 1000);
}
function generateLoss() {
    incorrect++;
    gameHTML = "<p class='text-center timer-p'>Time remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text center'>Nooo! The answer is: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/circle.png'>";
    $(".content").html(gameHTML);
    setTimeout(wait, 1000);
}
function generateHTML() {
    gameHTML = "<p class='text-center timer-p'>Time remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text center'>"+ questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'B. " + answerArray[questionCounter][1] + "</p><p class='answer'>C. " + answerArray[questionCounter][2] + "</p><p class='answer'>D. " + answerArray[questionCounter][3] + "</p>";
    $(".content").html(gameHTML);
    
}
function wait() {
    if (questionCounter < 1) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
    } else {
        finalScreen();
    }
}
function timerWrapper() {
    theClock = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
        if (counter === 0) {
            clearInterval(theClock);
            generateLossDueToTimeOut();
        }
        if (counter > 0) {
            counter--;
        }
        $(".timer").html(counter);
    }
}

function finalScreen() {
    gameHTML = "<p class='text-center timer-p'>Time remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Let's see how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correct + "</p>" + "<p>Wrong Answers: " + incorrect + "</p>" + "<p>Unanswered: " + unanswered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-danger btn-lg btn-block reset-button' href='#' role='button'>Reset the quiz</a></p>";
    $(".content").html(gameHTML);
}

function resetGame() {
    questionCounter = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    counter = 30;
    generateHTML();
    timerWrapper();
}