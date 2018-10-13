(
  function () {

    angular.module('lunchCheckerApp',[]).controller('lunchCheckerController',lunchCheckerController);
    lunchCheckerController.$inject = ["$scope","$filter"]
    function lunchCheckerController($scope , $filter) {
         $scope.check = function (){
           var split = $filter('split')
           var dishes = split(",",$scope.dishes)
           $scope.respond = dishes
           console.log(dishes)
         }
      }
    }
)();
