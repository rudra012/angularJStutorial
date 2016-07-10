/**
 * Created by shailesh on 10/7/16.
 */
var myApp = angular.module("myModule", []);

var myController = function ($scope) {
    $scope.message = "My module comtroller Tutorial";
};

myApp.controller("myController", myController);
