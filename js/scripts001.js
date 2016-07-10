/**
 * Created by shailesh on 10/7/16.
 */
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employee = {
            firstName: "SHAILESH",
            lastName: "RUDRA",
            gender: "MALE"
        };
        $scope.employee = employee
    });
