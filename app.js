(
  function () {

    angular.module('lunchCheckerApp',[]).controller('lunchCheckerController',lunchCheckerController);
    lunchCheckerController.$inject = ["$scope","$filter"]
    function lunchCheckerController($scope , $filter) {
         $scope.check = function () {

         }
      }
    }
)();
