/**
 * Created with JetBrains WebStorm.
 * User: zia2
 * Date: 11/2/12
 * Time: 4:40 PM
 * To change this template use File | Settings | File Templates.
 */

define( ["backbone"], function(Backbone) {

    var UserView = require("views").UserView;
    var ResultView = require("views").ResultView;
    var models = require("models");
    //var users =   models.users;
    var questions =  models.questions;

    var PageRouter = Backbone.Router.extend({
        routes: {
            "Q:tag":"Question",
            "Result":"Result",
            //'Q1': "Question1",
            //'Q2': "Question2",
            //'Q3': "Question3",
            //'Q4': "Question4",
            "*actions": "defaultRoute" // Backbone will try match the route above first
        },

        Question:function(id)
        {

          if(id <= questions.length){
          var selectedQuestion = questions[id-1];
            var templateHtml = new UserView({model:selectedQuestion}).render().el;
            //alert(templateHtml);
          $('body').empty().append(templateHtml);
          }
           else
          {
            var resultViewHtml = new ResultView().render().el;
              $('body').empty().append(resultViewHtml);
          }
        },

        /*Question1: function(userID){
            var selectedUser = _(questions).find(function(user){
                return user.get('quesID') === 1;

            });
            $('body').empty().append(new UserView({model: selectedUser}).render().el);
        },

        Question2: function(userID){
            var selectedUser = _(questions).find(function(user){
                return user.get('quesID') === 2;

            });
            $('body').empty().append(new UserView({model: selectedUser}).render().el);
        },

        Question3: function(userID){
            var selectedUser = _(questions).find(function(user){
                return user.get('quesID') === 3;

            });
            $('body').empty().append(new UserView({model: selectedUser}).render().el);
        },

        Question4: function(userID){
            var selectedUser = _(questions).find(function(user){
                return user.get('quesID') === 4;

            });
            $('body').empty().append(new UserView({model: selectedUser}).render().el);
        },

*/
        defaultRoute: function(actions){
            //alert("ZZZ: " + actions);
        }
    });

    var router = new PageRouter();

     /*
     router.on('route:view', function (userID) {
     // Note the variable in the route definition being passed in here
     alert( "Get View " + userID );
     });
     router.on('route:defaultRoute', function (actions) {
     alert("Default: " +  actions );
     });*/

    return {pageRouter: router};
});
