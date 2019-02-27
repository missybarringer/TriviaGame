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
        
    var start = $(".start").html("Start Game");
    start.on("click", startGame);
    $(".start-over").on("click", startGame);
        
    var triviaQandA = [{
        question:"What is the fastest animal?",
        answer:["cheetah","turtle","giraffe","elephant"],
        correct:"0",
        image: ("assets/images/circle.png")
    }, { 
        question:"When you are blue you turn?",
        answer:["red","green","blue","yellow"],
        correct:"1",
        image: ("assets/images/dot.jpg")
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
        answer = [];
        answered = false;
        timeRemaining = 16;
        timer();
        intervalID = setInterval(timer, 1000);
        /*if (answered === false) {
            timer();
        }*/
        
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
            //clearInterval(intervalID);
            $(".question").text("The correct answer is: " + triviaQandA[indexQandA].answer[correct]);
            unAnswered();
        } else if (answered === true) {
            //clearInterval(intervalID);
        } else {
            timeRemaining--;
            $(".timeRemaining").text("You have " + timeRemaining);
        }
    }
    
    function correctAnswer() {
        correctAnswers++;
        $(".timeRemaining").text("You are spot on!!!").css({
            "color": "#3d414f"
        });
        reset();
    }
    
    function incorrectAnswer() {
        incorrectAnswers++;
        $(".timeRemaining").text("You are sooo wrong").css({
            "color": "#3d414f"
        });
        reset();
    }
    
    function unAnswered() {
        unansweredQuestions++;
        $(".timeRemaining").text("You didn't choose anything...").css({
            "color": "#3d414f"
        });
        reset();
    }
    
    function reset() {
        clearInterval(intervalID);
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
                indexQandA=0;
                // setTimeout(function() {
                //     location.reload();
                // }, 5000);
        
                $(".start-over").html("Start Game");
                start.on("click", startGame);
            }, 2000);
        }
    };
    
        
    });
    


