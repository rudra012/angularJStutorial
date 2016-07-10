/**
 * Created by shailesh on 10/7/16.
 */
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var technologies = [
            {name:'Python', likes:0, dislikes:0},
            {name:'C', likes:0, dislikes:0},
            {name:'Java', likes:0, dislikes:0},
            {name:'Android', likes:0, dislikes:0},
        ];
        $scope.technologies = technologies;

        $scope.incrementLike = function (technology) {
            technology.likes++;
        }

        $scope.incrementDisLike = function (technology) {
            technology.dislikes++;
        }
    });

