# TriviaGame

## Contributors
@missybarringer
____________________________________
## Technology
* CSS3, HTML5, Javascript, Bootstrap, jQuery
* [GitHub Repository Link](https://github.com/missybarringer/TriviaGame.git)
* [Website published here](https://missybarringer.github.io/TriviaGame/)
____________________________________
### Overview of the problem

I needed to create a Trivia game using JavaScript for the logic and jQuery to manipulate HTML with HTML and stylish CSS.
* Create a trivia game that shows only one question until the player answers it or their time runs out.
* If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.
* The scenario is similar for wrong answers and time-outs.
  * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
  * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
* On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
____________________________________
### Solution
* create a splash page with a start button, once clicked go to first question
* display timer countdown number, question, and all possible answers
* if answer chosen then decide if it was correct or not & increment appropriate right/wrong counter
* if wrong display "You are sooo wrong" and correct answer & pic
* if right display "You are spot on" & pic
* if answer not chosen then display "You zoned out" & correct answer & pic
* After a few seconds, display the next question without user input
* end of game print "All done, here's how you did!" followed by correct, incorrect, & unanswered tallies
* Start Over? click will start the game over again  (without reloading the page)
____________________________________
### Technical approach
* Set up intial variables
* Set up 8 questions & answers
* Created a function to start the game on click from the splash page
* Created a function to load the Q & A's and determined if the answer is right or not
* Created the timer function
* Created 3 fuctions to determine if the answers were correct, incorrect or unanswered & incremented accordingly
* Created a reset function that loops through the questions to determine if there were any left & if not it went to the summary page
____________________________________
#### Contributors
* Background picture came from dmitrij-paskevic-44124-unsplash
* Questions came from: [Trivia Country](https://www.triviacountry.com/336-legal-trivia-questions.htm)
* and [BuzzNigeria](https://buzznigeria.com/fun-trivia-questions-answers/)
____________________________________
## License
*This product is licensed under the MIT License (MIT).
____________________________________
## Contributing Guidelines
All contributions and suggestions are welcome!
For direct contributions, please fork the repository and file a pull request.
____________________________________
## Contact
* e-mail: barringer.margaret@gmail.com
* Twitter: @goatfeatherfarm
* Facebook: @goatfeatherfarm
* Instagram: @goatfeatherfarm
* Added to [Personal Portfolio webpage](https://missybarringer.github.io/)

