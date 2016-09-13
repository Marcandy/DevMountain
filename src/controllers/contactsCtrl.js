angular.module('AngularMail')
.controller('contactsCtrl', function ($scope, contactsService, $state) {

  $scope.messageClicked = function(contact){
    $state.go('draft', {emil: contact.email})
  }
})
