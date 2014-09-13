define(function (require) {
    'use strict';

    var MainView = require('./views/mainView');
    var CaffeesCollection = require('./collections/caffeesCollection');

    var CaffeeApp = {
        run: function (viewManager) {
            var caffees = new CaffeesCollection();

            caffees.fetch({
                success: function (collection) {
                    var mainView = new MainView({collection: collection});
                    viewManager.show(mainView);
                }
            });
        }
    };

    return CaffeeApp;
});
