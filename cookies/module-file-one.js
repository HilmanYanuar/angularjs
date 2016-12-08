var moduleCtrl = angular.module('moduleTryCookies', ['ngCookies']);
moduleCtrl.controller('crtlTryCookies', function($scope, $cookies) {
    var now = new Date();
    var expireDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 2, now.getMinutes());
    $cookies.put('token', '234lkj2l3498sfkj345hkjhfwr', {'expires': expireDate});
});
