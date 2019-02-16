// Step 1 create a service
myApp.service('myService', function() {
  this.reallyLike = [];
  this.kindOfLike = [];

  this.addNewArtist = function addNewArtist(artist) {
    if (artist.score > 50) {
      this.reallyLike.push(artist);
    } else {
      this.kindOfLike.push(artist)
    }
  }


})
// step 2 create 2 arrays one called reallLike and the other called kingOfLike
// step 3 create a function called addNewArtist that will accept an artist object as the argument
// step 4 you will need to add a conditional that will check if the value of the score property on the artist object in greater or less than
// 50. If greater than 50 then push to the reallyLike array, if less than or equal to 50 then push to the kindOfLike array

// step 5 once everything is setup make sure you are binding the values of the arrays to $scope in your controller
