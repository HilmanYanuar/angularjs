var app = angular.module('appModule', []);

app.directive('hellodirective', function(){
    return {
        template: "<p>River flow slowly</p>"
    }
});
