
var buttonColours=["green","red","blue","yellow"];

var gamePattern=[];
var userClickedPattern=[];

var started=false;
var level=0;

$(document).keypress(function(){
    if(!started){
        $("h1").text("Level "+level);
        nextSequence();
        started=true;
    }
});

$(".box").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(gamePattern.length===userClickedPattern.length){
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    }else{
        $("h1").text("Game Over, Start Again!!");
        startOver();
    }
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}

function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+level);
    const randomNumber=Math.floor(Math.random()*4);
    gamePattern.push(buttonColours[randomNumber]);

    $("#"+buttonColours[randomNumber]).fadeIn(100).fadeOut(100).fadeIn(100);
}

function animatePress(currentColor) {
    $("#"+currentColor).addClass("box-grey");
    setTimeout(() => {
        $("#"+currentColor).removeClass("box-grey");
    }, 100);
}