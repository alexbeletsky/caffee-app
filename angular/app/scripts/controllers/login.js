'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('LoginCtrl', function ($scope, $http, $location) {
    $scope.email = 'john@doe.com';
    $scope.password = '111111';

    $scope.login = function () {
      var login = {email: this.email, password: this.password};

      var post = $http.post('http://localhost:7000/api/auth', login);

      post.success(function () {
        $location.path('/caffes');
      });

      post.error(function () {
        $scope.errorMessage = 'Sorry, wrong creditials!';
      });
    };


  });
