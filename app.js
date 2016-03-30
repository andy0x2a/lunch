'use strict';

// Declare app level module which depends on views, and components
angular.module('lunchApp', [
  'ngRoute',
  'lunchApp.welcome',
  

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/welcome'});
}]);
