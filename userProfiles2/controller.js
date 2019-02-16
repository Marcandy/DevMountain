angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
   mainService.getUsers()
   .then(function (result) {
     console.log(result);
     $scope.users = result;
   })
  }


  $scope.getUsers();

});
