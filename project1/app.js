/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

//Global Variables
var scores, roundScore, activePlayer, dice, dice2, gamePlaying, dicePrevious, winScore;
init();
/*instead of creating a variable for each players score, we will 
instead use an array to hold both their values in one variable. */
//scores = [0,0];

//score for the particular round;
//since players take turns, we can use 1 variable for both players. 
//roundScore = 0;

//a variable to determine whic player is taking their turn currently 
//activePlayer = 0; // 0 = player one , 1 = player two

//Lets calculate the dice roll, so we only get values from 1 to 6. 
//dice = Math.floor(Math.random() * 6) + 1;

/* We can do DOM manipulation by accessing the document object. 
In this particular case we will use the method querySelector. This 
method lets us treat the data as CSS, so to grab a id we can use 
the hashtag id-name as usual. 

textContent() allows us to change the value within the data. But 
textcontent has its limitations. It can only input plain text, not 
HTML so we cant use tags */
//document.querySelector('#current-' + activePlayer).textContent = dice; 

//a better version allows us to use HTML elements as well
//document.querySelector('#current-' + activePlayer).innerHTML = "<en>" + dice + "</em>";

//Also notice: The above is similar to using a setter, because we set a value.
//Below we will demonstrate how to use querySelector as a getter.
//var x = document.querySelector(#current-1).textContent;
//console.log(x); // useful for reading values

//We can also use querySelector to manipulte CSS, by using style. 
// document.querySelector('.dice').style.display = 'none';

// document.getElementById('score-0').textContent = '0';
// document.getElementById('score-1').textContent = '0';
// document.getElementById('current-0').textContent = '0';
// document.getElementById('current-1').textContent = '0';

//lets add an event listener, we will use the built in click event. 
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        //1. Random number when clicked, so we move from outside this method to inside.
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Disply the result
        var diceDOM = document.querySelector('.dice')
        diceDOM.src = 'dice-' + dice + ".png";
        diceDOM.style.display = 'block';

        //dice 2
        var dice2DOM = document.querySelector('.dice2');
        dice2DOM.src = 'dice-' + dice2 + ".png";
        dice2DOM.style.display = 'block';
        
        //3. Update the round score, if the round number is not 1. 
        if(dice !== 1 && dice2 !== 1){
            //add score
            roundScore += (dice + dice2);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            
            if(dicePrevious === 6 && dice === 6){
                document.querySelector('#score-' + activePlayer).textContent = '0';
                scores[activePlayer] = 0;
                nextPlayer();
            } else {
                //hold previous dice value
                dicePrevious = dice;
            }
        } else {
            alert('One of the dice rolled a 1 and lost the round score!')
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //1. add current score to player global score
        scores[activePlayer] += roundScore;

        //2. update UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //3. Check if player won the game
        if(scores[activePlayer] >= winScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer(){
        //next player (reset round)
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        dicePrevious = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        //lets remove/add the active class,
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');

        //we can use the toggle to automatically remove/add a class
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //remove dice when player hits a 1
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);//use a call-back

function init(){
    winScore = document.querySelector('#winScore').value;

    gamePlaying = true;
    scores = [0, 0];
    dicePrevious = 0;
    activePlayer = 0;
    roundScore = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player-1';
    document.getElementById('name-1').textContent = 'Player-2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


/*
   // More about function usage in the DOM

    Here are examples of different functions we can use:
    1) Callback Function
    function btn(){
        //do something here
    }
    document.querySelector('.btn-roll').addEventListener('click', btn);
    //Note: this is a callback function, because we dont call it immediately, we let the function call.
    //So essentially, a callback is a function passed in as an argument of another function, so 
    //that it will call this function for us. Thus, not calling it immediately but calling it back later. 
    

    2) Anaymous Function
    document.querySelector('.btn-roll').addEventListener('click', function() {
        //do something here
    })
    //Note: this is an anaymous function because it has no name, thus is not reuseable outside this context.
    //Most common approach for one off functions, similar ot this.
*/

/*

Challenge 6 - implement these features

1. A player loses his ENTIRE score when he rolls two 6 in a row. 
After that, it's the next player's turn. (Hint: Always save the 
previous dice roll in a separate variable)

2. Add an input field to the HTML where players can set 
the winning score, so that they can change the predefined score 
of 100. (Hint: you can read that value with the .value property 
in javascript. This is a good opportunity to use google to figure 
this out.)

3. Add another dice to the game, so that there are two dices now. 
The player looses his current score when one of them is a 1. 
(Hint: you will need CSS to position the second dice, so take a 
look at the CSS code for the first one.)
*/
