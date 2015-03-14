var app = angular.module('app', ['ngResource']);

app.factory('resources', function($resource) {
  var factory = {};

  factory.routes = {
    github: $resource('/api/:type', {}, {
      details: { method: 'GET', params: { type: 'details', userRepo: '@userRepo'}, isArray: false }     
    })
  };

  return factory;
});

app.controller('repoController', function($scope, resources) {

  $scope.fetchRepo = function() {
    resources.routes.github.details({userRepo: $scope.name},function done(response) {
      $scope.repo = response;
    });
  };

});


