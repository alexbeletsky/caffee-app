define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    var ViewManager = require('viewManager');

    var loginApp = require('apps/login/app');
    var caffeesApp = require('apps/caffees/app');

    var viewManager = new ViewManager();

    var Router = Backbone.Router.extend({
        routes: {
            '': 'login',
            'caffees': 'caffees'
        },

        login: function () {
            loginApp.run(viewManager);
        },

        caffees: function () {
            caffeesApp.run(viewManager);
        }
    });

    return {
        run: function () {
            var router = window.router = new Router();
            Backbone.history.start();

            return router;
        }
    };
});
