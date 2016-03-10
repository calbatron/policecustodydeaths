'use strict';

/**
 * @ngdoc function
 * @name policecustodydeathsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the policecustodydeathsApp
 */
angular.module('policecustodydeathsApp')
  .controller('view', ['$scope', '$stateParams', 'nameList', function ($scope, $stateParams, nameList) {

    $scope.list = {};

    for (var looper = 0 ; looper < nameList.list.length ; looper++) {
        if (nameList.list[looper].id === $stateParams.id) {
            $scope.list = nameList.list[looper];
        }
    }

}]);



// Chris Adler, Joy Gardner, Sean Rygg, Demetre Fraser, Kingsley Burrell Brown, Smiley Culture, Mark Duggan, there was a woman who died in Holloway last month too....
// Org - United Friends and Families Campaign, London Campaign Against Police State Violence
