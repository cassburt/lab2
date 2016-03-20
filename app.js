//Welcome: Say hello to the user and ask their name
var username = prompt("Hi! What's your name?");

//Invite: Ask the user if they would like to play
var gameStart = prompt("Hello "+username+" , would you like to play a game?");
while (gameStart.toLowerCase() != "yes" && gameStart.toLowerCase() != "no") {
  gameStart = prompt("I'm sorry, I didn't catch that. Would you like to play?");
}

//Rules: Give the user the rules of the game
if (gameStart.toLowerCase() == "yes") {
  gameStart = alert("let's play a game. Fill in my bio by answering the questions that follow.");
  gameStart = alert("Correct answers will appear in GREEN, incorrect ones will appear in RED. Good luck!");

  //Game: Have the user fill in the blanks
  var homeTown = prompt("Let's begin with an easy one. Where was I born?");
  if (homeTown.toLowerCase() == "in", "indiana") {
  //  ("origin" = documcolor: GREEN);
    alert("great job!");
  } else {
   //"origin" = RED;
   alert("suck it!");
  }
  var study = prompt("Where did I teach abroad?");
  var job = prompt("What was my first job in CA?");

  document.getElementById("school").innerHTML = study;
  document.getElementById("work").innerHTML = job;
  document.getElementById("origin").innerHTML = homeTown;
//Rejection: If the user decides not to play
} else {
      alert("Fine, be that way, I don't want to play with you anyway. Just go away. You're ugly. And a jerk. Call me.");
      console.log(username+" has chosen not to play the game");
}
