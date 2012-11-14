define( ["backbone"], function(Backbone) {

    var UserView = Backbone.View.extend({
        tagName: "div",
        events: {
            "click button[id=btn1]": 'nextPage'
        },

        render: function(){
            var model= this.model;
            var option = model.get('opt');
            var options = option.models;
            var optionList = "";
            var counter = 0;
            while(true)
            {
              var opt = options[counter];
                if(opt == null)break;
                optionList = optionList + "<li>"+(opt.get('desc'))+"</li>"+"<br>";
                counter++;
            }
            this.$el.html(model.get("desc") +"<br>"+"<ul>"+optionList+"</ul>");
            this.$el.addClass("span4");
            this.$el.append('<div class="span4"><button id="btn1" class="btn btn-primary ">Next Page</button></div>');
            return this;
        },
        nextPage: function(event,sender){
            var quesId = this.model.get('quesID');
            //to solve circular dependency
            require(['routes'],function(routes){
                var router = routes.pageRouter;
                quesId ++;
                var navigationString ='Q'+ quesId;
                router.navigate(navigationString, {trigger: true});
            });
        }
    });

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
        NextPageView: NextPageView
    };
});
