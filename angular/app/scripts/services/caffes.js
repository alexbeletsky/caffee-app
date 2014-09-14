'use strict';

angular.module('angularApp')
  .service('caffes', function ($resource) {
    var caffes = $resource('http://localhost:7000/api/caffees');

    return {
      fetch: function () {
        return caffes.query();
      }
    };
  });
