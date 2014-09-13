define(function (require) {
    'use strict';

    var MainView = Backbone.View.extend({
        render: function () {
            this.$el.html('<h1>Caffees View</h1>');
        }
    });

    return MainView;
});
