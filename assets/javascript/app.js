// create a splash page with a start button, once clicked go to first question
// display timer countdown number, question, and all possible answers
// if answer chosen then decide if it was correct or not & increment appropriate right/wrong counter
// if wrong display "You are wrong" and correct answer & pic
// if right display "You are spot on" & pic
// if answer not chosen then display "You zoned out" & correct answer & pic
// After a few seconds, display the next question without user input
// end of game print "All done, here's how you did!" followed by correct, incorrect, & unanswered tallies
// Start Over? click will start the game over again  (without reloading the page)

$(document).ready(function() {
    // global variable declarations
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var timeRemaining = 16;
    var intervalID;
    var indexQandA = 0;
    var answered = false;
    var correct;

    // Initial start of game with picture 
    var start = $("#start").html("Start Game");
    start.on("click", startGame);
    $("#start").append("<p /><img src='assets/images/lawPicTrans-01.png' width='200px' height='150px'>");
    // Final summary page start link
    $("#start-over").on("click", startGame);

    // 8 Question & answer objects
    var triviaQandA = [{
        question:"In which Tennessee city is it illegal to lasso fish?",
        answer:["Nashville","Memphis","Knoxville","Johnson City"],
        correct:"2",
        image: ("assets/images/lassoFish.jpg")
    }, { 
        question:"In Vermont, a woman can't wear what without written permission from their husband?",
        answer:["Shawl","Wig","Hat","False teeth"],
        correct:"3",
        image: ("assets/images/falseTeeth.jpg")
    }, {
        question:"It is illegal in Michigan to put what on your bosses desk?",
        answer:["Skunk","Poop","Rat","Buzzard"],
        correct:"0",
        image: ("assets/images/skunk.jpg")
    }, {
        question:"In Massachusetts, what is it illegal to have in the bathroom",
        answer:["An electrical outlet","A light switch","A john","A heater"],
        correct:"1",
        image: ("assets/images/lightSwitch.jpg")
    }, {
        question:"In Oklahoma City, it's illegal for a prisoner to wear what?",
        answer:["A tank top","A hat","Pink bikini underwear","Grills"],
        correct:"2",
        image: ("assets/images/pinkUndies.jpg")
    }, {
        question:"It is illegal in Alaska to look at what from the window of any aircraft?",
        answer:["Reindeer","Moose","Brown Bear","Bald Eagle"],
        correct:"1",
        image: ("assets/images/moose.jpg")
    }, {
        question:"You must registar with the state of Arizona before becoming what?",
        answer:["Prositute","Hitman","Drug dealer","Brothel operator"],
        correct:"2",
        image: ("assets/images/drugDealer.jpg")
    }, {
        question:"In Asheville NC it's illegal to do what on the streets?",
        answer:["Sneeze","Show your butt crack","Blow your nose","Hiccup"],
        correct:"0",
        image: ("assets/images/sneeze.jpg")
    }];
    
    // Start of game
    function startGame() {
        $(".summary").hide();
        $("#start").hide();
        $(".timeRemaining").show();
        $(".question").show();
        $(".answers").show();
        $("#start-over").hide();
        correctAnswers = 0;
        incorrectAnswers = 0;
        unansweredQuestions = 0;
        loadQandA();
    }
    
    // loading questions & answers
    function loadQandA() {
        answer = [];
        answered = false;
        timeRemaining = 16;
        // starting the timer
        timer();
        intervalID = setInterval(timer, 1000);
        //  setting up the Q & A's and appending  
        correct = triviaQandA[indexQandA].correct;
        var question = triviaQandA[indexQandA].question;
        $(".question").html(question);
        for (var i = 0; i < 4; i++) {
            var answer = triviaQandA[indexQandA].answer[i];
            $(".answers").append("<h4 class = answersAll id =" + i + ">" + answer + "</h4>");
        }
        
        // determining if the answer they click on is correct or not
        $("h4").click(function() {
            var id = $(this).attr("id");
            if (id === correct) {
                answered = true;
                $(".question").text("The answer is: " + triviaQandA[indexQandA].answer[correct]);
                correctAnswer();
            } else {
                answered = true;
                $(".question").text("You chose: " + triviaQandA[indexQandA].answer[id] + " - " + " the correct answer is: " + triviaQandA[indexQandA].answer[correct]);
                incorrectAnswer();
            }
            console.log(correct);
        });
    }

    // timer function
    function timer() {
        // time is up & they didn't choose an answer
        if (timeRemaining === 0) {
            answered = false;
            $(".question").text("The correct answer is: " + triviaQandA[indexQandA].answer[correct]);
            unAnswered();
        // time is up & they did choose an answer
        } else if (answered === true) {
        // else keep decreasing timer
        } else {
            timeRemaining--;
            $(".timeRemaining").text("You have " + timeRemaining + " seconds left");
        }
    }
    
    // increments the counters for correct, incorrect, and unanswered answers and prints the appropriate text
    function correctAnswer() {
        correctAnswers++;
        $(".timeRemaining").text("You are spot on!!!");
        reset();
    }
    
    function incorrectAnswer() {
        incorrectAnswers++;
        $(".timeRemaining").text("You are sooo wrong...");
        reset();
    }
    
    function unAnswered() {
        unansweredQuestions++;
        $(".timeRemaining").text("You didn't choose anything...");
        reset();
    }
    // ------------------------------------------------------------------------------------------------------- 
    // game reset   
    function reset() {
        clearInterval(intervalID);
        $(".answersAll").remove();
        // appends images after each Q & A & increases the indexQandA
        $(".answers").append("<img class=answerImage width='150' height='150' src='" + triviaQandA[indexQandA].image + "'>");
        indexQandA++;
        // if the indexQandA is less than the length of questions it goes back to the loadQandA function
        if (indexQandA < triviaQandA.length) {
            setTimeout(function () {
                loadQandA();
                $(".answerImage").remove();
            }, 4000);
        // if no more questions it goes to the summary page
        } else {
            setTimeout(function() {
                $(".summary").show();
                $(".question").hide();
                $(".timeRemaining").hide();
                $(".answers").hide();
                $("#start-over").show();
                $(".answerImage").remove();
                $(".summary").append("<h4 class = answersAll end>Correct answers: " + correctAnswers + "</h4>");
                $(".summary").append("<h4 class = answersAll end>Wrong answers: " + incorrectAnswers + "</h4>");
                $(".summary").append("<h4 class = answersAll end>Unanswered questions: " + unansweredQuestions + "</h4>");
                correctAnswers = 0;
                incorrectAnswers = 0;
                unansweredQuestions = 0;
                indexQandA=0;        
                $("#start-over").html("Start Game");
                start.on("click", startGame);
            }, 2000);
        }
    };
    
        
    });
    


