var app = angular.module('appModule', []);

app.controller('ctrlForm', function($scope){
    $scope.saved = {};
    $scope.save_data = function(player) {
        $scope.saved = angular.copy(player);
    };
});
