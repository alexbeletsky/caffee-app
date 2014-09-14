define(function (require) {
    'use strict';

    var MainView = require('./views/mainView');
    var LoginModel = require('./models/loginModel');

    var loginApp = {
        run: function (viewManager) {
            var loginModel = new LoginModel();
            var mainView = new MainView({model: loginModel});

            viewManager.show(mainView);
        }
    };

    return loginApp;
});
