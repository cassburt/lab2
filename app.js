var username = prompt("Hi! What's your name?");
var gameStart = prompt("Hello "+username+", would you like to play a game?");
  if (gameStart.toLowerCase() == "yes") {
    alert("OK, great! Here we go....");
    var score=0;
    console.log(username+" has chosen to play the game");
      var hometown = prompt("OK "+username+", was I born in Ohio?");
      if (hometown.toLowerCase() == "no") {
        alert("Yay! You got that one right!");
        score++;
        console.log(username+" answered question correctly");
      } else if (hometown.toLowerCase() == "yes") {
        alert("No, I'm sorry, wrong flyover state.");
        console.log(username+" answered question incorrectly");
      } else {
        alert("I'm sorry, but I didn't understand your response.");
        console.log(username+"'s input not recognized");
      }
      var masters = prompt("Did I study public affairs?");
      if (masters.toLowerCase() == "yes") {
        alert("Correct! Because nothing says great prospects like boring work and terrible pay!");
        score++;
        console.log(username+" answered question correctly");
      } else if (masters.toLowerCase() == "no") {
        alert("Wrong, though you could be forgiven for thinking otherwise. I often forget I have this degree.");
        console.log(username+" answered question incorrectly");
      } else {
        alert("Please be more careful with your responses!");
        console.log(username+"'s input not recognized");
      }
      var powerRangers = prompt("Did I work for the creater of the Teenage Mutant Ninja Turtles?");
      if (powerRangers.toLowerCase() == "no") {
        alert("Correct - You know me so well!!");
        score++;
        console.log(username+" answered question correctly");
      } else if (powerRangers.toLowerCase() == "yes") {
        alert("No, but close; it was the Mighty Morphing Power Rangers.");
        console.log(username+" answered question incorrectly");
      } else {
        alert("You really need to type better - I can barely understand you!");
        console.log(username+"'s input not recognized");
      }
      var numGuess = prompt("Ok, "+username+", one more: I'm thinking of a number between 1 and 10. What is it?");
      if (numGuess == 5) {
        alert("Well how about that - you guessed it! You're good!");
        score++;
        console.log(username+" answered question correctly");
      } else if (numGuess > 5) {
        alert("Sorry, too high.");
        console.log(username+" guessed too high.");
      } else {
        alert("Sorry, too low");
        console.log(username+"guessed too low.");
      }
      alert("Well, I hope that was as fun for you as it was for me. Your score was "+score+" That's right. Count it with me:");
      for (var count = 1; count <= score; count++) {
        alert(count);
        console.log("user score reported");
      }
  } else if (gameStart.toLowerCase() == "no") {
      alert("Fine, be that way, I don't want to play with you anyway. Just go away. You're ugly. And a jerk. Call me.");
      console.log(username+" has chosen not to play the game");
  } else {
     alert("I'm sorry, I didn't understand that. Come back later and we can maybe we can play :)");
     console.log(username+"'s input not recognized");
  }
