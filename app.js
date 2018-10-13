(
  function () {
    // Defining App & controller lunchCheckerApp & lunchCheckerController
    angular.module('lunchCheckerApp',[]).controller('lunchCheckerController',lunchCheckerController);
    //  inject scope & filter
    lunchCheckerController.$inject = ["$scope","$filter"]

    function lunchCheckerController($scope , $filter) {
         $scope.check = function () {

           // Recover data input
           if($scope.dishes != undefined){
             var number = ($scope.dishes).split(',').length
             if(number <= 3){
               $scope.respond ="Enjoy !!"
             }else{
               $scope.respond ="Too much!"
             }
           }else{
             $scope.respond = " Please enter data first "
           }
        }
    }
  }
)();
