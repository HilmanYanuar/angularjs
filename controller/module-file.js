var app = angular.module('appModule', []);

app.controller('appCtrlUser', function($scope){
    $scope.name = "Hilman Yanuar";
    $scope.job = "Web Programmer";
    $scope.skills = ["Ruby on Rails", "Laravel 5", "Android"];
});
