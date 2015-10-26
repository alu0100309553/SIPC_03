var app = angular.module('info', []);
            app.controller('lecturadatos', function($scope, $http) {
              $http.get("http://www.opendatalapalma.es/datasets/dea013a1b69e41bc83afd417e352c7ff_0.geojson")
              .success(function (response) {$scope.eess = response.features;});
            });
