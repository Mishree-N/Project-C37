class Question {

    constructor(){

        //Create all the input, heading elements you need 
        this.title=createElement("h1");
        this.input1=createInput("Your Name");
        this.input2=createInput("Your Answer");
        this.question=createElement("h2");
        this.option1=createElement("h3");
        this.option2=createElement("h3");
        this.button=createButton("Submit");

    }

    display(){

        // assign the position, text, heading names to all the HTML elements you create in the constructor.
        this.title.html("MyQuiz Game");
        this.title.position(350,0);

        this.question.html("What starts and ends with the letter 'E', but has only one letter?");
        this.question.position(150,80);

        this.option1.html("1) Everyone");
        this.option1.position(150,120);

        this.option2.html("2) Envelope");
        this.option2.position(150,140);

        this.input1.position(250,230);

        this.input2.position(450,230);

        this.button.position(400,300);

        //when submit button is pressed,
        this.button.mousePressed ( ()=> {

            //hide/stop displaying
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();

            //collect name
            contestant.name=this.input1.value();

            //increment count
            contestantCount+=1;

            //collect answer
            contestant.answer=this.input2.value();

            contestant.index=contestantCount;

            //update name and answers
            contestant.updateContestantName();

            //update count
            contestant.updateContestantCount(contestantCount);

            console.log(contestantCount);
            console.log(contestant.name);
            console.log(contestant.answer);

        });


    }

    //hide all elements
    hide(){

        //hide everything
        this.title.hide();
        this.question.hide();
        this.option1.hide();
        this.option2.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();

    }


}