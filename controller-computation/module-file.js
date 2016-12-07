var app = angular.module('appModule', []);

app.controller('appCtrlUser', function($scope){
    $scope.name = "Hilman Yanuar";
    $scope.rename = function(newName) {
        $scope.name = newName;
    }
});
