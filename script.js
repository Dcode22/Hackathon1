$(document).ready(function() {
    var deck = new Array();
    var currcard = null;
  
    Init();
    Draw();
    
    // EVENT HANDLER
  
    $("#clickme").click(function() {
      var useranswer = $("#answer").val();
      $("#status").html(useranswer);
      
      if (currcard.answertext == useranswer) {
        alert("correct");
        ClearText();
        Draw(); // GET the next card
      }
      else {
        alert("try again");
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
        picture : "father.jpg",
        answertext : "father"
      };
      
      var card2 = {
        card: 2,
        picture : "mother.jpeg",
        answertext : "mother"
      };

      var card3 = {
        card: 3,
        picture : "בן",
        answertext : "son"
      };

      var card4 = {
        card: 4,
        picture : "בת",
        answertext : "daughter"
      };

      deck.push(card1);
      deck.push(card2);
      deck.push(card3);
      deck.push(card4);
    }
  
    function Draw() {
      currcard  =  deck.shift();
      $("#a").attr("src", currcard.picture);
    }
  });