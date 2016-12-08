var moduleCtrl = angular.module('otherModule', ['ngCookies']);
moduleCtrl.controller('otherController', function($scope, $cookies) {
    $scope.token = $cookies.get('token');
    $scope.removeCookies = function() {
        $cookies.remove('token');
    };
});
