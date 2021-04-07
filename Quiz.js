class Quiz {

    constructor (){


    }

    

    //fetch gameState value from database
    getState(){

        //refer to game state in DB
        var gameStateRef=database.ref('/gameState');
        //listen to game state changes in DB 
        gameStateRef.on("value", function (data){gameState=data.val();} );

    }

    //update gameState in database
    update(state){

        //refer to game state in DB
        var gameStateRef=database.ref('/');
        //update game state in DB
        gameStateRef.update({"gameState" : state});

    }

    //start the game
    async start (){

        //when gamestate is o (start)
        if (gameState==0){

            //create contestant
            contestant=new Contestant();
            var contestantCount=contestant.getContestantCount();
            

            //create question
            question=new Question();
            question.display();

        }


    }

    play(){

        //hide the form
        question.hide();
        //display quiz result message
        textSize(50);
        fill("black");
        text("Quiz Result", 300,50);
        //underline message
        text("  _________________", 170,65);

        //get contestants information
        Contestant.getContestantInfo();

        //if all the contestants is not equal to undefined,
        if (allContestants != undefined) {

            var displayAnswers=120;
            fill("Black");
            textSize(15);
            text("NOTE: Contestant who answered correct are highlighted in green color!",197,85);
            
            //loop through all the players to display them
            for (var plr in allContestants){

                //make correct answer equal to 2nd option
                var correctAnswer="2";

                //if answer is matching correct answer,
                if (correctAnswer===allContestants[plr].answer){

                    //highlight name in green
                    fill("green");


                  //otherwise, if answer is wrong,
                } else {

                    //highlight name in red
                    fill("red");

                }

                //increment position
                displayAnswers=displayAnswers+50;

                //display all contestants names and answers
                textSize(30);
                text(allContestants[plr].name + ": " + allContestants[plr].answer, 360, displayAnswers);

                
            }
        
            
        }

    }    


}