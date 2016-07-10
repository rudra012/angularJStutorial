/**
 * Created by shailesh on 10/7/16.
 */
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var country = {
            name: "India",
            capital: "Delhi",
            flag: "images/india-flag.jpg"
        };
        $scope.country = country
    });

