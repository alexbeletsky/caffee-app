'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('CaffesCtrl', function ($scope, caffes) {
    $scope.caffes = caffes.fetch();
  });
