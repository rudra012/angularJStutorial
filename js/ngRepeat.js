/**
 * Created by shailesh on 10/7/16.
 */
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            {firstName: "SHAILESH", lastName: "RUDRA", gender: "MALE", salary: 25000},
            {firstName: "NEHA", lastName: "SHARMA", gender: "FEMALE", salary: 15000},
            {firstName: "KRUNAL", lastName: "PATEL", gender: "MALE", salary: 10000},
            {firstName: "ANKIT", lastName: "PANCHAL", gender: "MALE", salary: 20000},
            {firstName: "NIDHI", lastName: "VERMA", gender: "FEMALE", salary: 29000}
        ];
        $scope.employees = employees;
    });

