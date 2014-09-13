define(function (require) {
    'use strict';

    var MainView = Backbone.View.extend({
        render: function () {
            this.$.html('<h1>Caffees View</h1>');
        }
    });

    return MainView;
});
