angular.module('AngularMail').controller('inboxCtrl', function ($scope, mailService) {
  function init() {
    $scope.selectedMessage = null;
    $scope.mail = mailService.getMail();
  }

  $scope.selectedMessage = function (message) {
    $scope.selectedMessage = messsage;
  }

  init();
})
