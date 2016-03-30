'use strict';

angular.module('lunchApp.feature1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/feature1', {
    templateUrl: 'feature1/feature.html',
    controller: 'feature1Controller'
  });
}])

.controller('feature1Controller', [function() {


      window.scrollTo(0,0);

    }]);