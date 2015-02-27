var app = angular.module('app', ['ngResource', 'ngRoute']);

app.factory('resources', function($resource) {
  var factory = {};

  factory.routes = {
    github: $resource('/api/:type', {}, {
      top: { method: 'GET', params: {language: '@language'}, isArray: true },
      versus: { method: 'GET', params: {languages: '@languages'}, isArray: false },      
    })
  };

  return factory;
});

app.controller('topThreeController', function($scope, resources) {

  $scope.getTopThree = function() {
    resources.routes.github.top({type: 'top-three', language: $scope.form.language}, function done(response) {
      $scope.topThree = response;
    });
  };
});

app.controller('versusController', function($scope, resources) {

  $scope.getVersus = function() {
    var languages = [$scope.form.language1, $scope.form.language2];
    console.log(languages)

    resources.routes.github.versus({type: 'versus', languages: languages}, function done(response) {
      $scope.versus = response;
    });
  };
});

