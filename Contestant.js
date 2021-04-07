class Contestant {

    constructor(){

        this.index=null;
        this.answer=0;
        this.name=null;
        
    }


    getContestantCount(){

        //refer to Contestant count location in DB
        var contestantCountRef = database.ref ('/contestantCount');

        // listen to Contestant count changes in DB
        contestantCountRef.on ("value", 
                        function(data){

                            contestantCount = data.val ();
                            
                        }
        );        
    }


    updateContestantCount(count){

        //refer to Contestantcount in DB
        var contestantCountRef=database.ref("/");

        //updte Contestant count in DB
        contestantCountRef.update({"contestantCount" : count});

    }


    updateContestantName(){

        var contestantIndex = "contestants/contestant"+this.index;
        
        database.ref (contestantIndex).set ({name : this.name, answer : this.answer});

    }

    static getContestantInfo(){

        var contestantInfoRef= database.ref("contestants");
        contestantInfoRef.on("value", (data)=>{
            allContestants = data.val ();
        }  );

    }


}