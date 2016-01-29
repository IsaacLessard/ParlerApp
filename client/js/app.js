var app = angular.module('parlerApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'../partials/home.html',
      controller: 'HomeController'
    })
    .when('/search', {
      templateUrl: '../partials/search.html',
      controller: 'SearchController'
    })
    .when('/chat', {
      templateUrl: '../partials/chat.html',
      controller: 'ChatController'
    })
    .otherwise({
        redirectTo: '/'
      });
});
