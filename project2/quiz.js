//Challenge 7 - Quiz Game Project

/* Let's build a fun quiz game in the console! 

1. Build a function constructor called Question to describe a question. 
A question should include: 
    a) question itself
    b) the answers the player can choose from (choose a good data structure like array, object, or etc.) 
    c) correct answeer (i would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the 
possible answers (each question should have a number) (Hint: write a method for the question objects for this task).

5. Use the prompt function to ask the user for the correct answer. The user should input 
the number of the correct answer, like you displayed it in task 4.

6. Check if the answer is correct and print to the console whether the answer 
is correct or not (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that 
all your code is private and doesn't interfere with the other programmers code (Hint: we 
    learned a special technique to do exactly that).)
*/

var gameRunning = true;
var points = 0;
var lastQuestion = 0;

var Question = function(question, answers, correct_answer) {
    this.question = question;
    this.answers = answers;
    this.correct_answer = correct_answer;
    this.ask = () => {
        console.log(this.question);
        for(var i = 0; i < answers.length; i++){
            console.log(i + ": " + answers[i]);
        }
        promptAnswer(this.answers, this.correct_answer);
    }
}

var promptAnswer = function(answers, correct_answer){
    var userPick = prompt('Choose the number for the correct answer: ');
    if(userPick == answers.indexOf(correct_answer)){
        console.log('CORRECT');
        points += 1;
    } else if(userPick === 'quit' || userPick === 'exit') {
        console.log('YOU QUIT THE GAME.');
        gameRunning = false;
    } else {
        console.log('WRONG');
    }
    console.log('Total Points: ' + points + '\n\n ')
}

//test
// Question('demo question?', ['it worked', 'failed'], 'it worked');

var questionList = [
    new Question('Are closures something we need to manually implement?', ['yes', 'sometimes', 'no'], 'no'),
    new Question('Is JavaScript a fun programming language?', ['yes', 'no', 'sure if being kicked in the pants is considered fun', 'hardest language ever'], 'yes'),
    new Question('was JQuery used to write this app? ', ['yes', 'no'], 'no'),
];

var selectQuestion = function(questionList){
    var randomID = Math.floor(Math.random() * questionList.length);
    if(lastQuestion === randomID){
        if(randomID+1 !== questionList.length){
            randomID += 1;
        }
    }
    lastQuestion = randomID;
    questionList[randomID].ask();
}

while(gameRunning){
    selectQuestion(questionList);
}

/* Want more of a challenge? Heres the expert level.

8. After you display the result, display the next random question, so that the game 
never ends (Hint: write a function for this and call it right after displaying the result).

9. Be careful: after number 8, the game literally never ends. So include the option to quit the 
game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from 
number 8.

10. Track the user's score to make the game more fun. So each time an answer is correct, 
add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't 
have to, just d this with the tools your comfortable with). 

11. Display the score in the console. (Use another method for this).
*/