// Declare variables
var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;
// document.querySelector('#current-' + activePlayer).textContent = dice;
// var x = document.querySelector("#score-0").textContent;
// console.log(x);

document.querySelector('.dice').style.display = 'none';

// display initial score

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

// function to roll dice and display dice number

document.querySelector('.btn-roll').addEventListener('click', function(){
    dice = Math.floor(Math.random() * 6 ) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src='./images/dice-' + dice + '.png';

 // update roundscore

if(dice !== 1){
    roundScore += dice;
    document.querySelector('#current-'+ activePlayer).textContent = roundScore;
}else {
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}
})