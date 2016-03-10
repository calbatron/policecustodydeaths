'use strict';


angular.module('policecustodydeathsApp')
  .factory('nameList', ['$scope', '$state', function ($scope, $state) {

    $scope.list =   [
                        {
                            id: 'mark-duggan',
                            date: '4 August 2011',
                            name: 'Mark Duggan',
                            image: 'o-MARK-DUGGAN-facebook.jpg',
                            age: '28',
                            causeOfDeathShort: 'Sang too loud',
                            verdict: 'No',
                            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            familyComment: 'He was such a good singer',
                            ipcc: 'nothing odd found',
                            ethnicity: 'British Causcasian',
                            media:  [
                                        {title:'Something somehting', agency:'The Guardian', date: '27th Feb 2015'}
                                    ]
                        },
                        {
                            id: 'chris-adler',
                            date: '4 August 2011',
                            name: 'Chris Adler',
                            image: 'ChrisAdler.jpg',
                            age: '23',
                            causeOfDeathShort: 'Sang too loud',
                            verdict: 'No',
                            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                            familyComment: 'He was such a good singer',
                            ipcc: 'nothing odd found',
                            ethnicity: 'British Causcasian',
                            media:  [
                                        {title:'Something somehting', agency:'The Guardian', date: '27th Feb 2015'}
                                    ]
                        }
                    ];





    $scope.view = function(id) {
        $state.go('list.view', {id:id});
    };


}]);



//ethnicity, circumstances of death, ipcc comment, family comment, press and whether anyone was procicuted
