//// Setup routes for handle redirect and reload page
var moduleRoutes = angular.module('modroutes', ['ngRoute']);

moduleRoutes.controller('ctrlMain', function($scope, $route, $routeParams, $location){
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});

moduleRoutes.controller('ctrlSvcsTwo', function($scope, $routeParams) {
    $scope.name = "Me from controller ctrlSvcsTwo";
    $scope.params = $routeParams;
});

moduleRoutes.controller('ctrlSvcsThree', function($scope, $routeParams) {
    $scope.name = "Me from controller ctrlSvcsThree";
    $scope.params = $routeParams;
});

moduleRoutes.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'index.html'
        })
        .when('/angularjs/routes/svcs-two', {
            templateUrl: '/angularjs/routes/svcs-two.html',
            controller: 'ctrlSvcsTwo'
        })
        .when('/angularjs/routes/svcs-three/:id', {
            templateUrl: '/angularjs/routes/svcs-three.html',
            controller: 'ctrlSvcsThree'
        });
        // .otherwise({redirectTo: '/'});

    //// configure html5 to get links working on jsfiddle
    //// if only use below code route will cause error require base tag
    //// $locationProvider.html5Mode(true);
    //// this code is working
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
