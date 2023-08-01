 var userClickedPattern=[];
 var buttonColours =["red", "blue", "green", "yellow"];
 var gamePattern=[];
 //


 $(".btn").click(function(){
    var userChosenColour= $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
     });


//

     function playSound( name){
        var audio=new Audio("./sounds/"+name+".mp3");
 audio.play();
     }
//

  function   animatePress(currentColour){
$("#"+currentColour).addClass("pressed");
setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
},  100);
     }

//
var start=false;
var level=0;
 
$(document).keypress(function(){
 if ( !start) {
    
 
    $("h1").text("Level  "+level);
    nextSequence();
    start=true;
 }
    
     
});
//
function checkAnswer( currentLevel){
   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

   
      //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

   playSound("wrong");
   $("body").addClass("game-over");
   setTimeout(function(){
    $("body").removeClass("game-over");
   },200);

   $("h1").text("Game Over, Press Any Key to Restart");

startOver();
    }
}
function startOver(){
level=0;
gamePattern=[]; 
start=false;

}
 //
 function nextSequence(){
  userClickedPattern=[];
    level++;
    $("h1").text("Level  "+level);
    var n=Math.random();
    n*=4;
    n=Math.floor(n);
    var randomChosenColour=buttonColours[n];
 gamePattern.push(randomChosenColour);
 $('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
   

  
 }
 
  