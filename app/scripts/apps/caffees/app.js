define(function (require) {
    'use strict';

    var MainView = require('./views/mainView');

    var CaffeeApp = {
        run: function (viewManager) {
            var mainView = new MainView();
            viewManager.show(mainView);
        }
    };

    return CaffeeApp;
});
