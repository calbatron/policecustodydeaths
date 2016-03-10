'use strict';

/**
 * @ngdoc function
 * @name policecustodydeathsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the policecustodydeathsApp
 */
angular.module('policecustodydeathsApp')
  .controller('list', ['$scope', '$state', 'nameList', function ($scope, $state, nameList) {

    $scope.list = nameList.list;

    $scope.view = function(id) {
        $state.go('list.view', {id:id});
    };

}]);



//ethnicity, circumstances of death, ipcc comment, family comment, press and whether anyone was procicuted
