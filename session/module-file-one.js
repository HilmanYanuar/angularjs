var moduleCtrl = angular.module('moduleTryCookies', ['ngCookies']);
    moduleCtrl.controller('crtlTryCookies', function($scope, $cookies) {
    $cookies.put('token', '234lkj2l3498sfkj345hkjhfwr');
});
