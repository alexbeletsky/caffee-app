define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    var Caffe = require('../models/caffe');

    var CaffeesCollection = Backbone.Collection.extend({
        url: 'http://localhost:7000/api/caffees',

        model: Caffe
    });

    return CaffeesCollection;
});
