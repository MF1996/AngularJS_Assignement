(
  function () {
    // Defining App & controller lunchCheckerApp & lunchCheckerController
    angular.module('lunchCheckerApp',[]).controller('lunchCheckerController',lunchCheckerController);
    //  inject scope & filter
    lunchCheckerController.$inject = ["$scope","$filter"]

    function lunchCheckerController($scope , $filter) {
         $scope.check = function () {
           // Recover data input
             var number = ($scope.dishes).split(',').length

             if(number > 3){
                 $scope.reponse = "Enjoy !!"
             } else {
                 $scope.reponse = "Too match"
             }

         }
      }
    }
)();
