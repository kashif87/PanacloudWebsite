require(["jquery", "backbone"], function($) {

    $(function() {
        //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
        $('body').alpha().beta();

        var views = require("views");
        var np = new views.NextPageView({el: $("#btn1")});
        Backbone.history.start({pushState: true});
    });
});
