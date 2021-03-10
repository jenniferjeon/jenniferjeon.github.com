(function(){
    alert("hello! please do the following tasks:\n 1. look at instructions \n2. play from instructions page \n or 3. press play and do the game");
    'use strict'
    const playbtn = document.querySelectorAll('.play-btn');
    const instruct = document.querySelectorAll('.instructions-btn');
    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    /*sounds */
    const cardSound = new Audio("media/card.mp3");

    const gameData = {
        cards: ['images/bright1.svg', 'images/bright2.svg', 
        'images/animal1.svg', 'images/junk1.svg', 'images/junk2.svg', 'images/junk3.svg',
        'images/junk4.svg', 'images/junk5.svg', 'images/junk6.svg'],
        players: ['Player 1', 'Player 2'],
        score:[0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29

    };
    /* set up */

    /* when user presses, play, overlay is hidden and game commences */
    playbtn.forEach(function(btn) {

        btn.addEventListener("click", function() {
            event.preventDefault();
            document.getElementById("intro").className = "overlay hidden";
            document.getElementById("instructions").className = "overlay hidden";
            document.getElementById("dark").className = "hidden";

        });
    });
    instruct.forEach(function(btn) {


        btn.addEventListener("click", function() {
            event.preventDefault();
            console.log("instructions button is clicked");
            document.getElementById("intro").className = "overlay hidden";
            document.getElementById("instructions").className = "overlay showing";
    
        });
    });
    /*playbtn.addEventListener('click', function(){
        event.preventDefault();

        console.log("do you get here lol");
        cardSound.play();

        document.getElementById("intro").className = "overlay hidden";
        
        //document.getElementById("instructions").className = "overlay hidden";
        document.getElementById("dark").className = "hidden";

    }); */
    /* user opens instructions */
    /* instruct.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("instructions opened");
        document.getElementById("instructions").className = "overlay showing";
    }); */
    

    /** when instructions button is clicked */


    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
    }




    startGame.addEventListener("click", function(){
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2></h2>'
        gameControl.innerHTML += '<button id="quit"> Wanna Quit?</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });
        setUpTurn();
    });

    function setUpTurn() {
        game.innerHTML = `<p>Draw a card for <strong> ${gameData.players[gameData.index]}</strong></p>`;
        actionArea.innerHTML = '<button id="roll"> Draw a card </button>';
        

        document.getElementById('roll').addEventListener('click', function() {
            throwDice();
            cardSound.play();

        });
    }
    
    function throwDice() {
        
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innterHTML = `<p>Draw a card for the ${gameData.players[gameData.index]}</p>`;

        game.innerHTML += `<img src="${gameData.cards[gameData.roll1-1]}"> <img src="${gameData.cards[gameData.roll2-1]}">`;
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
            game.innerHTML += `<p> sorry, one of your cards was a one, switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
            console.log("one of the two cards was a 1");

        }
        else { 

            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain"> Go </button> or <button id="pass"> Stop! </button>';
            document.getElementById('rollagain').addEventListener('click', function(){
                cardSound.play();
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
// check winning condition
    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML =`<h2>${gameData.players[gameData.index]}
            wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML ='';
            document.getElementById('quit').innerHTML = "Another game?";
        }

        else {
            showCurrentScore();
        }
    
    }
    function showCurrentScore() {
        score.innerHTML = `<p>  <strong> ${gameData.players[0]}:
          ${gameData.score[0]}</strong> <strong>${gameData.players[1]}: 
        ${gameData.score[1]}</strong></p>`;
    } 

})(); 