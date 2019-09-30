
//Game State
var gameRunning;

//Player Stats
var playerWins, playerLoses, playerLetter;

//Computer stats
var computerWins, computerLoses, computerLetter;


//call main game loop
init();

function init(){
    gameRunning = true;
    //init player
    playerWins = 0;
    playerLoses = 0;
    playerLetter = 'x';
    //init computer
    computerWins = 0;
    computerLoses = 0;
    computerLetter = 'o';
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            board.rows[i].cells[j].textContent = "-";
        }
    }
}

// document.getElementById('board').rows[0].cells[1].textContent = "o";


//main game functionality
for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
        var data = document.querySelector('#board').rows[i].cells[j];
        data.addEventListener('click', function(){
            // console.log('dd')
            if(data.textContent == "-"){
                console.log('was empty')
                data.textContent = 'x';
            } else {
                console.log('was not empty')
            }
        });
    } 
}
