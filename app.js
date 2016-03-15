var username = prompt("Hi! What's your name?");
var gameStart = prompt("Hello "+username+" , would you like to play a game?");
while (gameStart.toLowerCase() !="yes" && gameStart.toLowerCase() !="no") {
  gameStart = prompt("Sorry, I didn't catch that. Did you want to play with me?");
  }
  if (gameStart.toLowerCase() == "yes") {
    alert("OK, great! Here we go....");
    var score=0;
    console.log(username+" has chosen to play the game");
      var hometown = prompt("OK "+username+", let's start with an easy  one. Was I born in Ohio?");
      while (hometown.toLowerCase() != "yes" && hometown.toLowerCase() != "no") {
        hometown = prompt("Can't understand you, "+username+". Am I a buckeye?");
      }
      if (hometown.toLowerCase() == "no") {
        alert("Yay! You got that one right!");
        score++;
        console.log(username+" answered question correctly");
      } else {
        alert("No, sorry, wrong flyover state.");
        console.log(username+" answered question incorrectly");
      }
      var masters = prompt("Did I study public affairs?");
      while (masters.toLowerCase() != "yes" && masters.toLowerCase() != "no") {
        masters = prompt("Come on, "+username+", you can type better than that! Did I study public affairs?");
      }
      if (masters.toLowerCase() == "yes") {
        alert("Yes! Because nothing says great prospects like boring work with terrible pay!");
        score++;
        console.log(username+" answered question correctly");
      } else {
        alert("Wrong. I did, though even I don't know what I'm supposed to do with the thing.");
      }
      var powerRangers = prompt("Did I work for the creater of the Teenage Mutant Ninja Turtles?");
      while (powerRangers.toLowerCase() != "yes" && powerRangers.toLowerCase() != "no") {
        powerRangers = prompt("I didn't understand a single thing you typed. Let's try again - did I work for the man who invented the foot clan?");
      }
      if (powerRangers.toLowerCase() == "no") {
        alert("Correct! You know me so well, It's scary...");
        score++;
        console.log(username+" answered question correctly");
      } else {
        alert("No, but close; it was the Mighty Morphing Power Rangers.");
        console.log(username+" answered question incorrectly");
      }
      var numGuess = prompt("Ok, "+username+", one more: I'm thinking of a number between 1 and 10. What is it?");
      if (numGuess == 5) {
        alert("Well how about that - you guessed it! You're good.");
        score++;
        console.log(username+" answered question correctly");
      } else if (numGuess > 5) {
        alert("Sorry, too high.");
        console.log(username+" guessed too high.");
      } else {
        alert("Sorry, too low.");
        console.log(username+"guessed too low.");
      }
      alert("Well, I hope that was as fun for you as it was for me. Your score was "+score+"! That's right - count it with me:");
      for (var count = 1; count <= score; count++) {
        alert(count);
        console.log("user score reported");
      }
  } else {
      alert("Fine, be that way, I don't want to play with you anyway. Just go away. You're ugly. And a jerk. Call me.");
      console.log(username+" has chosen not to play the game");
  }
