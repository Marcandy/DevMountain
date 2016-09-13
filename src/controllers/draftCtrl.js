angular.module('AngularMail').controller('inboxCtrl', function ($scope, mailService) {
  $scope.newMessage = {
    to: $stateParams.email
  };

  $scope.sendMessage = function () {
    $scope.newMessage();
  }
})
