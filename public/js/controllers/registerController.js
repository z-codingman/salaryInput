/**
 * Created by zihanwang on 5/31/15.
 */
define([
    './module',
    'jquery'
], function (controllers) {
    //'use strict';
    controllers.controller('RegisterCtrl', ['$scope', function ($scope) {
        console.log('register');
        $scope.user = {};

        $scope.apply = function(){
            console.log($scope.user);
        };

        $scope.reset = function(){
            $scope.user = {};
        };
    }]);
});