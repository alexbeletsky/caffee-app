define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var MainView = Backbone.View.extend({
        template: '\
            <form role="form" class="form">\
                <div class="errors hide">\
                    <p>Sorry, could not authorize you</p>\
                </div>\
                <input type="text" class="email"/>\
                <input type="password" class="password"/>\
                <button type="submit" class="submit">Login</button>\
            </form>\
        ',

        events: {
            'click .submit': 'login'
        },

        render: function () {
            this.$el.html(this.template);
        },

        login: function (e) {
            e.preventDefault();

            var me = this;

            var attrs = {
                email: this.$('.email').val(),
                password: this.$('.password').val()
            };

            this.model.save(attrs, {
                success: function () {
                    me.redirectToList();
                },

                error: function () {
                    me.showError();
                }
            });
        },

        redirectToList: function () {
            window.router.navigate('/caffees', {trigger: true});
        },

        showError: function () {
            this.$('.errors').removeClass('hide');
        }
    });

    return MainView;
});
