var app = angular.module('appModule', []);

app.controller('ctrlDirective', function($scope){
    $scope.playerOne = {
        displayName: 'Butterfly',
        level: '27',
    }

    $scope.playerTwo = {
        displayName: 'Genos',
        level: 'S'
    }
});

app.directive('getplayer', function(){
    return {
        restriction: 'E', //this restriction level element
        scope: {
            selectscope: '='
        },
        template: 'Name Player : <span ng-bind="selectscope.displayName"></span> <br/> Level : <span ng-bind="selectscope.level"</span>'
    };
});
