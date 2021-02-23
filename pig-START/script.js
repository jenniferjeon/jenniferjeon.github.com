(function(){
    'use strict'

    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    const gameData = {
        dice: ['1die.jpg', '2die.jpg', 
        '3die.jpg', '4die.jpg', '5die.jpg', '6die.jpg'],
        players: ['player 1', 'player 2'],
        score:[0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29

    };

    startGame.addEventListener("click", function(){
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2> The Game Has Started </h2>'
        gameControl.innerHTML += '<button id="quit"> Wanna Quit?</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });
        setUpTurn();
    });

    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll"> Roll the Dice </button>';

        document.getElementById('roll').addEventListener('click', function() {
            throwDice();

        });
    }
    
    function throwDice() {
        
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innterHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;

        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}"> <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        
    
    // if two 1's are rolled
        if (gameData.rollSum === 2) {
            game.innerHTML += '<p> Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);

            setTimeout(setUpTurn,2000);
            checkWinningCondition();
            console.log("snake eyes were rolled");
        }
    // if either die is a 1
        else if(gameData.roll1 === 1 || gameData.roll2 === 1) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p> sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
            console.log("one of the two dice was a 1");

        }
        else { 

            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain"> Roll again </button> or <button id="pass"> Pass </button>';
            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn();
            });
            document.getElementById('pass').addEventListener('click', function() {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });
            console.log("the game proceeds");
            checkWinningCondition();
        }
}

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML =`<h2>${gameData.players[gameData.index]}
            wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML ='';
            document.getElementById('quit').innerHTML = "start a new game?";
        }

        else {
            showCurrentScore();
        }
    
    }
    function showCurrentScore() {
        score.innerHTML = `<p> the score is currently <strong> ${gameData.players[0]}
          ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} 
        ${gameData.score[1]}</strong></p>`;
    } 

})();