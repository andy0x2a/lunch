'use strict';

angular.module('lunchApp.welcome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {
    templateUrl: 'welcome/welcome.html',
    controller: 'welcomeController'
  });
}])

.controller('welcomeController', [function() {


      window.scrollTo(0,0);

    }]);