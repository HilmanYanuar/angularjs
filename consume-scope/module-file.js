var app = angular.module('appModule', []);

app.controller('ctrlDirective', function($scope){
    $scope.player = {
        displayName: 'Butterfly',
        level: '27',
    }
});

app.directive('getplayer', function(){
    return {
        template: 'Name Player : <span ng-bind="player.displayName"></span> <br/> Level : <span ng-bind="player.level"</span>'
    };
});
