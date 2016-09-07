angular.module('zooApp').controller('mainCtrl', function ($scope, myService) {
$scope.zoo = [];

  //get all animals
   var cPromise = myService.getAnimals();

      cPromise.then(function (animals) {
        $scope.animals = animals;

      })

      $scope.addAnimalToZoo = function (animal) {
         $scope.zoo.push(animal)
      }
});
