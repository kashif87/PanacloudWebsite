define( ["backbone"], function(Backbone) {

    _.templateSettings = {
        interpolate : /\{\{=(.+?)\}\}/g,
        //evaluate : /\{\{(.+?)\}\}/g,
        evaluate : /\{\{([.\s\S]+?)\}\}/g,
        escape: /\{\{-(.+?)\}\}/g
    };
    var questionTemplate = $('#template-question-single').html();
    var resultTemplate = $('#template-result').html();
    var UserView = Backbone.View.extend({
        tagName: "div",
        events: {
            "click button[id = btn1]": 'nextPage'
            //"click input[type = radio]":'setAnswer'
        },

        render: function(){
            var model= this.model;
            this.$el.html( _.template( questionTemplate, {question: this.model} ));
            return this;
        },
        nextPage: function(event,sender){
            event.preventDefault();
            var optionSelected = this.$el.find('input:checked');//.val();//.attr('checked');
            this.model.optionSelected(optionSelected.attr('id'));

            var quesId = this.model.get('quesID');
            //to solve circular dependency
            require(['routes'],function(routes){
                var router = routes.pageRouter;
                quesId ++;
                var navigationString ='Q'+ quesId;
                router.navigate(navigationString, {trigger: true});
            });
        },

        setAnswer:function(event,sender){
          this.model.optionSelected(event.currentTarget.id);
        }
    });

    var ResultView = Backbone.View.extend({
        tagName : "div",
        render : function()
        {
            //to solve circular dependency
                require(['models'],function(models){
                var questions = models.questions;
                var counter = 0;
                questions.forEach(function(e){
                    var answer = e.get('isCorrect');
                    console.log(answer);
                    if(answer == "true")
                    {
                        counter = counter+1;
                        console.log(counter);
                    }
                })

                    alert("Total Correct Questions :"+counter);
                    alert(resultTemplate);
                    this.$el.html( _.template(resultTemplate),{});
                    return this;
            });
        }
    })   ;

    var NextPageView = Backbone.View.extend({
        events: {
            'click': 'nextPage'
        },

        render: function(){
            //alert("AAAa");

            return this;
        },

        nextPage: function(){
            //to solve circular dependency
            require(['routes'],function(routes){
                var router = routes.pageRouter;
                router.navigate('Q1', {trigger: true});
            });
        }
    });

    return {
        UserView: UserView,
        NextPageView: NextPageView,
        ResultView : ResultView
    };
});
