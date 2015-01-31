var app = angular.module("demoApp", []);

app.factory('carFactory', function() {

  var cars = [
  { make: 'Toyota', model: 'Prius', type: 'Hybrid', year: '2014', price: 24000  },
  { make: 'Chevorlet', model: 'Volt', type: 'Electric', year: '2013', price: 35300 },
  { make: 'Lexus', model: 'ct 200h', type: 'Hybrid', year: '2015', price: 40000 },
  ];

  var sold = [ { make: 'Subaru', model: 'WRX', type: 'Gas', year: '2014', price: 42000 }];

  var factory = {};

  factory.getCars = function() {
    return cars;
  }

  factory.sellCar = function(car) {
    var index = cars.indexOf(car);
    cars.splice(index, 1);
    sold.push(car);
  }


  factory.getSold = function() {
    return sold;
  }

  return factory;
});

app.controller("newcarController", function($scope, carFactory) {
  $scope.options = ['Gas', 'Hybrid', 'Electric', 'Diesel'];

  $scope.cars = carFactory.getCars();

  $scope.addCar = function() {
    console.log($scope.newcar)
    $scope.cars.push($scope.newcar);
    $scope.newcar = {};
  }

});

app.controller("carController", function($scope, carFactory) {

  $scope.cars = carFactory.getCars(); 

  $scope.sell = function(car) {
    carFactory.sellCar(car);
  }

  $scope.increase = function(car) {
    car.price += 1000;
  }

  $scope.decrease = function(car) {
    car.price -= 1000;
  }

});

app.controller("soldController", function($scope, carFactory) {

  $scope.sold = carFactory.getSold(); 

  $scope.comission = function() {
    var total = 0;
    $scope.sold.forEach(function(car) {
      total += (car.price * (10/100));
    });
    return total;
  };
  
});
