angular.module('Starship')
.controller('homeCtrl', function ($scope, starshipService) {

  $scope.characters = [];

  $scope.getCharacters = function() {
    starshipService
      .getCharacters()
      .then(function (characters) {
        console.log(characters)
        $scope.characters = characters.data.results;
      })
      .catch(function (error) {
        console.error('something broke' + error);
      });
  }
  $scope.getCharacters();

});
