// create a splash page with a start button, once clicked go to first question
// display timer countdown number, question, and all possible answers
// if answer chosen then decide if it was correct or not & increment appropriate right/wrong counter
// if wrong display "Nope" and correct answer & pic
// if right display "Yuppers" & pic
// if answer not chosen then display "You zoned out" & correct answer & pic
// After a few seconds, display the next question without user input
// end of game print "All done, here's how you did!" followed by correct, incorrect, & unanswered tallies
// Start Over? click will start the game over again  (without reloading the page)

$(document).ready(function() {

var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var timeRemaining = 16;
var intervalID;
var indexQandA = 0;
var answered = false;
var correct;
    
    var start = $(".start").html("<p class='btn btn-warning btn-md btn-block'>Start Game</p>");
    start.on("click", startGame);
    
var triviaQandA = [{
    question:"In New York it is illegal to shoot rabbits from a what?",
    answer:["Cab","Apartment window","Trolley","Horse"],
    correct:"2",
    image: ("assets/images/trolleyCar.jpg")
}, { 
    question:"In Vermont, a woman can't wear what without written permission from their husband?",
    answer:["Shawl","Wig","False teeth","Hat"],
    correct:"2",
    image: ("assets/images/falseTeeth.jpg")
}];

function startGame() {
    $(".summary").hide();
    $(".start").hide();
    $(".timeRemaining").show();
    $(".question").show();
    $(".answers").show();
    $(".start-over").hide();
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = 0;
    loadQandA();
}

function loadQandA() {
    answered = false;
    timeRemaining = 16;
    intervalID = setInterval(timer, 1000);
    if (answered === false) {
        timer();
    }
    
    correct = triviaQandA[indexQandA].correct;
    var question = triviaQandA[indexQandA].question;
    $(".question").html(question);
    for (var i = 0; i < 4; i++) {
        var answer = triviaQandA[indexQandA].answer[i];
        $(".answers").append("<h4 class = answersAll id =" + i + ">" + answer + "</h4>");
    }

    $("h4").click(function() {
        var id = $(this).attr("id");
        if (id === correct) {
            answered = true;
            $(".question").text("The answer is: " + triviaQandA[indexQandA].answer[correct]);
            correctAnswer();
        } else {
            answered = true;
            $(".question").text("You chose: " + triviaQandA[indexQandA].answer[id] + "    the correct answer is: " + triviaQandA[indexQandA].answer[correct]);
            incorrectAnswer();
        }
        console.log(correct);
    });
}

function timer() {
    if (timeRemaining === 0) {
        answered = true;
        clearInterval(intervalID);
        $(".question").text("The correct answer is: " + triviaQandA[indexQandA].answer[correct]);
        unAnswered();
    } else if (answered === true) {
        clearInterval(intervalID);
    } else {
        timeRemaining--;
        $(".timeRemaining").text("You have " + timeRemaining);
    }
}

function correctAnswer() {
    correctAnswers++;
    $(".timeRemaining").text("You are spot on!!!");
    reset();
}

function incorrectAnswer() {
    incorrectAnswers++;
    $(".timeRemaining").text("You are sooo wrong");
    reset();
}

function unAnswered() {
    unansweredQuestions++;
    $(".timeRemaining").text("You didn't choose anything...");
    reset();
}

function reset() {
    $(".answersAll").remove();
    $(".answers").append("<img class=answerImage width='150' height='150' src='" + triviaQandA[indexQandA].image + "'>");
    indexQandA++;
    if (indexQandA < triviaQandA.length) {
        setTimeout(function () {
            loadQandA();
            $(".answerImage").remove();
        }, 2000);
    } else {
        setTimeout(function() {
            $(".summary").show();
            $(".question").hide();
            $(".timeRemaining").hide();
            $(".answers").hide();
            $(".start-over").show();
            $(".answerImage").remove();
            $(".summary").append("<h4 class = answersAll end>Correct answers: " + correctAnswers + "</h4>");
            $(".summary").append("<h4 class = answersAll end>Wrong answers: " + incorrectAnswers + "</h4>");
            $(".summary").append("<h4 class = answersAll end>Unanswered questions: " + unansweredQuestions + "</h4>");
            correctAnswers = 0;
            incorrectAnswers = 0;
            unansweredQuestions = 0;
            indexQandA = 0;
            // setTimeout(function() {
            //     location.reload();
            // }, 5000);
    
            var start = $(".start-over").html("<p class='btn btn-danger btn-md btn-block'>Restart Game?</p>");
            start.on("click", startGame);
        }, 2000);
    }
};

    
});


