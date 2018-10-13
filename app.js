(
  function () {
    // Defining App & controller lunchCheckerApp & lunchCheckerController
    angular.module('lunchCheckerApp',[]).controller('lunchCheckerController',lunchCheckerController);
    //  inject scope & filter
    lunchCheckerController.$inject = ["$scope","$filter"]

    function lunchCheckerController($scope , $filter) {
         $scope.check = function () {
           // Recover data input
             var dishes = ($scope.dishes).split(',')
             console.log(dishes);

         }
      }
    }
)();
