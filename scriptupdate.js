$(document).ready(function() {
    var deck = new Array();
    var currcard = null;
    var scorecard = document.getElementById("scorecount").innerHTML;
    // console.log(scorecard);
    // document.getElementById("hiddenChallenge").style.visibility = "hidden";
    
    
    Init();
    Draw();
    startTimer();
    visibilityFunction();
    // startTimer2();
    
    // EVENT HANDLER
  
    $("#clickme").click(function() {
      var useranswer = $("#answer").val();
      $("#status").html(useranswer);
      
      if (currcard.answertext == useranswer) {
        // alert("correct");
        swal("Nice Job!", "Move onto the next word.", "success")
        document.getElementById("scorecount").innerHTML= parseInt(document.getElementById("scorecount").innerHTML) +10;
        ClearText();
        Draw(); // GET the next card
      }
      else {
        swal("Incorrect", "Try Again!", "error")
        ClearText();
      }
    });
  
    function ClearText() {
      $("#answer").val("");
      $("#status").html("X");
    }

    function Init() {
      var card1 = {
        card: 1,
        text : "אבא",
        answertext : "father"
      };
      
      var card2 = {
        card: 2,
        text: "אמא",
        answertext : "mother"
      };

      var card3 = {
        card: 3,
        text: "בן",
        answertext : "son"
      };

      var card4 = {
        card: 4,
        text : "בת",
        answertext : "daughter"
      };

      var card5 = {
        card: 5,
        text : "חבר",
        answertext : "friend",
      };

      var card6 = {
        card: 6,
        text : "חתול",
        answertext : "cat"
      };

      var card7 = {
        card: 7,
        text : "כלב",
        answertext : "dog"
      };

    // this code populates the deck with each object/card

      deck.push(card1);
      deck.push(card2);
      deck.push(card3);
      deck.push(card4);
      deck.push(card5);
      deck.push(card6);
      deck.push(card7);
    }
  
    function Draw() {
        currcard = deck[Math.floor(deck.length * Math.random())];
        $("p").html( currcard.text);  
        console.log(currcard.text);
        
        for (i = 0; i < deck.length; i++) {

            if (deck[i] === currcard) {
                deck.splice(i, 1);
            }  
        }    
    }
    function visibilityFunction() {
      if (scorecard = 70){
        document.getElementById("hiddenChallenge").style.visibility = "visible";
      } else {
        document.getElementById("hiddenChallenge").style.visibility = "hidden";

      }
    } 
           
    
    
  });
  

  
  function startTimer() {
    var timeset = setInterval(timer, 1000);
  }
  var secondsRemaining = 60;
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
      
      clearInterval(timer);
      document.getElementById("clickme").disabled = true;
      document.getElementById("a").innerHTML = "TIMEOUT: GAMEOVER! <br> SCORE: " + document.getElementById("scorecount").innerHTML + " POINTS";
      document.getElementById("a").style.fontSize = "30px";
      document.getElementById("a").style.color = 'red';
      // alert("TIMEOUT: GAMEOVER! SCORE: " + document.getElementById("scorecount").innerHTML + " POINTS");
      
      }
      secondsRemaining = newSecondsRemaining;
      if (minutes < 1) {
          document.getElementById('timeremaining').style.color = 'red';
      }
      // if (seconds = 0) {
      //     document.getElementById('timeremaining').innerHTML = "YOUR TIME HAS RUN OUT!";
      // }
  } 
function startTimer2() {
    var timeset2 = setInterval(timer2, 1000);
  }
  var secondsRemaining2 = 10;
  // function timer2() {
  //     var newSecondsRemaining2 = secondsRemaining2 - 1;
  //     var minutes2 = Math.floor(newSecondsRemaining2/60);
  //     var seconds2 = Math.floor(newSecondsRemaining2%60); 
  //     if (seconds2 < 10 && seconds2 >= 0){
  //     document.getElementById('timeremaining2').innerHTML = minutes2 + ":0" + seconds2;
  //     } 
  //     else if (minutes2 >= 0 && seconds2 >= 0) {
  //     document.getElementById('timeremaining2').innerHTML = minutes2 + ":" + seconds2;
  //     }
  //     else {
      
  //     document.getElementById('clickme').click();
  //     newSecondsRemaining2 = 10;

      
  //     }
  //     secondsRemaining2 = newSecondsRemaining2;
  //     if (seconds2 < 5) {
  //         document.getElementById('timeremaining2').style.color = 'red';
  //     }
  //     // if (seconds = 0) {
  //     //     document.getElementById('timeremaining').innerHTML = "YOUR TIME HAS RUN OUT!";
  //     // }
  // } 

