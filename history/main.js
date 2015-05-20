'use strict';
angular.module('awesomeApp', ['ui.router'])
.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.when('', '/');
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'home.html',
    controller: 'homeController'
  });
  $stateProvider.state('one', {
    url: '/one',
    templateUrl: 'one.html',
    controller: 'oneController'
  });
  $stateProvider.state('two', {
    url: '/two',
    templateUrl: 'two.html',
    controller: 'twoController'
  });
}])
.controller('oneController', [
  '$scope', '$location', '$rootScope',
  function($scope, $location, $rootScope){
    if(!$rootScope.areWeOn){
        $location.replace().path('two');
    }
}])
.controller('twoController', function($scope, $rootScope, $location){
  $scope.yes = function(){
    $rootScope.areWeOn = true;
    $location.replace().path('one');
  };
})
.controller('homeController', function(){
});

/*
login       home
dashboard   one
terms       two
dashboard   one
*/
