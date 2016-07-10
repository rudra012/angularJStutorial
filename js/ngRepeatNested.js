/**
 * Created by shailesh on 10/7/16.
 */
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var countries = [
            {
                name: "India",
                cities: [
                    {name: "Ahmedabad"},
                    {name: "Mumbai"},
                    {name: "Hyderabad"}
                ]
            },
            {
                name: "USA",
                cities: [
                    {name: "London"},
                    {name: "Manchester"},
                    {name: "Birmingham"}
                ]
            },
            {
                name: "UK",
                cities: [
                    {name: "Los Angeles"},
                    {name: "Chicago"},
                    {name: "Huuston"}
                ]
            }
        ];

        $scope.countries = countries;
    });

