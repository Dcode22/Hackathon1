const cards = document.querySelectorAll('.memory-card');


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
startTimer()

function flipCard() {
  document.getElementById("scorecount").innerHTML = document.getElementById("scorecount").innerHTML - 1;
  if (lockBoard) return;
  if (this === firstCard) return;
  
  this.classList.add('flip');


  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  
  checkForMatch();
  
  
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));


function startTimer() {
  var timeset = setInterval(timer, 1000);
}
var secondsRemaining = 90;
function timer() {
    var newSecondsRemaining = secondsRemaining - 1;
    var minutes = Math.floor(newSecondsRemaining/60);
    var seconds = Math.floor(newSecondsRemaining%60); 
    if (seconds < 10 && seconds >= 0){
    document.getElementById('timeremaining').innerHTML = minutes + ":0" + seconds;
    } 
    else if (minutes >= 0 && seconds >= 0) {
    document.getElementById('timeremaining').innerHTML = minutes + ":" + seconds;
    }
    else {
    
    // clearInterval(timer);
    // document.getElementById("clickme").disabled = true;
    // document.getElementById("a").innerHTML = "TIMEOUT: GAMEOVER! <br> SCORE: " + document.getElementById("scorecount").innerHTML + " POINTS";
    // document.getElementById("a").style.fontSize = "30px";
    // document.getElementById("a").style.color = 'red';
    // alert("TIMEOUT: GAMEOVER! SCORE: " + document.getElementById("scorecount").innerHTML + " POINTS");
    
    }
    secondsRemaining = newSecondsRemaining;
    // if (minutes < 1) {
    //     document.getElementById('timeremaining').style.color = 'red';
    // }
    // if (seconds = 0) {
    //     document.getElementById('timeremaining').innerHTML = "YOUR TIME HAS RUN OUT!";
    // }
} 