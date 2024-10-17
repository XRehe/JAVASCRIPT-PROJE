let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickPattern = [];
var started = false;
var level = 0;
//Başlangıç
$(document).keypress(function () {
  if (!started) {
    $("h1").text("level " + level);
    nextSequence();
    started = true;
  }
});
//oyun mekanik
function nextSequence() {
  userClickPattern = [];
  level++;
  $("h1").text("level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

//button tıklama ses ve dizi ekleme
$(".btn").click(function (event) {
  let userChosenColour = event.target.id;
  userClickPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickPattern.length - 1);
});

//ses
function playSound(name) {
  var audio1 = new Audio("sounds/" + name + ".mp3");
  audio1.play();
}

//animasyon
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//kontrol
function checkAnswer(currenLevel) {
  if (userClickPattern[currenLevel] === gamePattern[currenLevel]) {
    console.log("Succses");
    if (userClickPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    var audio3 = new Audio("sounds/wrong.mp3");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    audio3.play();
    startOver();
  }
}

//reset
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
