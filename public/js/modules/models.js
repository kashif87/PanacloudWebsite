define( ["backbone"], function(Backbone) {


    var questionModel = Backbone.Model.extend({
        defaults: {
           answerID : 0,
           isCorrect : "False"
        },
        optionSelected : function(option){
           var id = this.get("answerID");
           var correct = id == option;
           this.set("isCorrect", correct.toLocaleString());
           //alert("AnswerID : "+this.get("isCorrect"));
        }
    });

    var optionList = Backbone.Collection.extend({model:option});

    var option = Backbone.Model.extend({});



    var questions = [
         new questionModel({quesID : 1, desc:"In Which Year Pakistan Got Independence" ,answerID:3, opt : new optionList([
             new option({id:1,desc:"1944"}), new option({id:2,desc:"1945"}),new option({id:3,desc:"1947"})
         ])}),
        new questionModel({quesID : 2, desc:"In Which Year Pakistan Won Cricket WorldCup" ,answerID:3, opt : new optionList([
            new option({id:1, desc:"1944"}), new option({id:2, desc:"1945"}),new option({id:3, desc:"1992"})
        ])}),
        new questionModel({quesID : 3, desc:"How Many WorldCups Pakistan Have won in Hockey" ,answerID:3, opt : new optionList([
            new option({id:1, desc:"1"}), new option({id:2, desc:"2"}),new option({id:3, desc:"4"})
        ])}),
        new questionModel({quesID : 4, desc:"In Which Year India Got Independence" ,answerID:3, opt : new optionList([
            new option({id:1, desc:"1944"}), new option({id:2, desc:"1945"}),new option({id:3, desc:"1947"})
        ])})
    ];

    /* var users = [
     new Backbone.Model({ quesID : "zia", desc: "Zia is window 8 app store owner"}) ,
     new Backbone.Model({ quesID : "zeeshan", desc: "Zeeshan is a businessman"})
     ];*/
    return {questions : questions};
});
