define(function (require) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');

    var ViewManager = function () {
        return {
            show: showView
        };
    };

    function showView(view) {
        if (this.currentView) {
            disposeView(this.currentView);
        }

        this.currentView = view;

        $("#app").html(this.currentView.el);
        this.currentView.render();
    }

    function disposeView(view) {
        _.each(view.subviews, function(subview) {
            disposeView(subview);
        });

        view.remove();
    }

    return ViewManager;

});
