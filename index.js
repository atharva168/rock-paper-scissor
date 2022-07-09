var randomNumber1 = Math.floor(Math.random()*3 + 1);
var randomNumber2 = Math.floor(Math.random()*3 + 1);


$(".img1").click(function(){
    
    checkAnswer();
    changeImage();
    setTimeout(function () {
        location.reload();
      }, 2000);
});
       
    

function checkAnswer(){
    if(randomNumber1 === randomNumber2)
    {
        $("h2").text("DRAW");
    }
    else if((randomNumber1 === 1 && randomNumber2 === 2) || (randomNumber1 === 2 && randomNumber2 === 3)||(randomNumber1 === 3 && randomNumber2 === 1)){
        $("h2").text("YOU LOOSE !!");
    }
    else if((randomNumber1 === 1 && randomNumber2 === 3) || (randomNumber1 === 2 && randomNumber2 === 1)||(randomNumber1 === 3 && randomNumber2 === 2)){
        $("h2").text("YOU WIN !!");
    }
}

function changeImage(){
    if(randomNumber1 === 1){
        $(".img1").attr("src","images/rock.png");
    }
    if(randomNumber1 === 2){
        $(".img1").attr("src","images/paper.png");
    }
    if(randomNumber1 === 3){
        $(".img1").attr("src","images/scissor.png");
    }
    if(randomNumber2 === 1){
        $(".img2").attr("src","images/rock.png");
    }
    if(randomNumber2 === 2){
        $(".img2").attr("src","images/paper.png");
    }
    if(randomNumber2 === 3){
        $(".img2").attr("src","images/scissor.png");
    }
}