
//Game State
var gameRunning, totalCorrect, totalQuestionsAttempted, previousQuestions;


function init(){
    gameRunning = true;
    totalCorrect = 0;
    totalQuestionsAttempted = 0;
    previousQuestions = [];
    startGame();
}

function getScore(){
    return totalCorrect;
}

function getQuestionsAttempted(){
    return totalQuestionsAttempted;
}

function Question(question, possibleAnswers, correctAnswer){
    this.question = question;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.processQuestion = function() {
    totalQuestionsAttempted++;
    console.log(this.question);
    for(var i = 0; i < this.possibleAnswers.length; i++){
        console.log(i + ": " + this.possibleAnswers[i]);
    }

    var userAnswer = prompt('Type the number of your answer: ');
    if(userAnswer == this.possibleAnswers.indexOf(this.correctAnswer)){
        totalCorrect++;
    }

    console.log('Current Score: ' + getScore());
    console.log();
}

var questionsList = [
    new Question('Do closures need to be manually implemented?', ['yes', 'no'], 'no'),
    new Question('What was the first modern version of JS?', ['ES2019', 'ES2017', 'ES2015'], 'ES2015'),
    new Question('Is Javascript a useful language for web development?', ['yes', 'no'], 'yes'),
    new Question('Are all web developers required to know JavaScript?', ['yes', 'no', 'dont know'], 'yes'),
    new Question('Is JavaScript a good first language?', ['yes','no, its outdated', 'no, its been replaced by ruby'], 'yes'),
    new Question('Can JavaScript be used on the backend as a server side language?', ['yes, using nodeJS', 'no, it cant be used backend'], 'yes, using nodeJS'),
]

function selectQuestion(questionsList){
    if(previousQuestions.length === questionsList.length){
        alert('All Questions have been asked already! Final Score: ' + totalCorrect + " correct out of " + totalQuestionsAttempted + " questions.")
        gameRunning = false;
        console.log('Final Score: ' + totalCorrect + " correct out of " + totalQuestionsAttempted + " questions.");
        console.log('Final Grade: ' + Math.round(((totalCorrect/totalQuestionsAttempted) * 100)) + '%');
    } else {
        var randomID = Math.floor(Math.random() * questionsList.length);
        while(previousQuestions.includes(randomID)){
            randomID = Math.floor(Math.random() * questionsList.length);
        }
        previousQuestions.push(randomID);
        questionsList[randomID].processQuestion();
    }
}

function startGame(){
    console.clear();
    console.log('\nLaunching the Quiz Game\n~~~~~~~~~~~~~~~~~~~~~~~\n');
    while(gameRunning){
        selectQuestion(questionsList);
    }
}


//Launch Game
init();
