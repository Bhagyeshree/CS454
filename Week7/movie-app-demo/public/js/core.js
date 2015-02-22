var app = angular.module('app', ['ngResource']);

app.factory('resources', function($resource) {
  var factory = {};

  factory.routes = {
    movieAPI: $resource('/movies/:action', {}, {
      fetch: {method: 'GET', params: {title: '@title', action: 'search'}, isArray: false }
    })
  };

  return factory;
});

app.controller('movieController', function($scope, resources) {

  $scope.searchMovies = function() {
    resources.routes.movieAPI.fetch({title: $scope.title}, function done(response) {
      console.log(response);
      $scope.movie = response;
    });
  };

});