define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    var _ = require('underscore');

    var MainView = Backbone.View.extend({
        template: '\
            <ul class="caffes">\
              <% _.forEach(caffes, function(caffe) { %>\
                <li>\
                    <img src="<%- caffe.image %>" />\
                    <span class="name"><%- caffe.name %></span>\
                    <span class="address"><%- caffe.address %></span>\
                    <span class="city"><%- caffe.city %></span>\
                </li><% }); %>\
            </ul>\
        ',

        render: function () {
            var contents = _.template(this.template, {caffes: this.collection.toJSON()});
            this.$el.html(contents);
        }
    });

    return MainView;
});
