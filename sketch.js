//variables
var gameState=0;
var contestantCount, allContestants;
var database;
var quiz, question, contestant;

function setup(){
  //setup firebase database and canvas
  database = firebase.database ();
  createCanvas(850,400);

  //create quiz
  quiz=new Quiz();
  //get the gameState
  quiz.getState();
  //update the gameState
  quiz.update(0);
  //start the quiz 
  quiz.start();

}


function draw(){
  background("pink");

  if(contestantCount===2){
    quiz.update(1);
  }
  
  if(gameState===1){
    clear();
    quiz.play();
  }
  
}
