'use strict';

//Create a service and inject it into the controller

myApp.controller('FirstCtrl', function ($scope, myService) {

    // step 1 set a variable called reallyLike on $scope. This variable will be bound to the reallyLike variable in the service
    $scope.reallyLike = myService.reallyLike;
    // step 2 set a variable called kindOfLike on $scope. This variable will be bound to the kindOfLike variable in the service
    $scope.kindOfLike = myService.kindOfLike;

    // step 3 create a function called addArtist the will call the addNewArtist function in the service. You will need to send
    $scope.addArtist = function(newArtist) {

        // var myNewArtist = {
        //     name: newArtist.name,
        //     genre: newArtist.genre,
        //     score: newArtist.score
        // }

        myService.addNewArtist(newArtist);

        $scope.name = '';
        $scope.genre = '';
        $scope.score = '';
        }

    // an artists object as the argument. How you choose to do this is up to you. Once you have added the artist clear the form


});
