define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var LoginModel = Backbone.Model.extend({
        url: 'http://localhost:7000/api/auth'
    });

    return LoginModel;
});
