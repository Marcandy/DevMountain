angular.module('app').controller('mainCtrl', function ($scope, myService) {

 myService.getMyData()
  .then(function (result) {
    console.log(result);
    $scope.myData = result;
  });

});
