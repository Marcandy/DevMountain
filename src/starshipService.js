angular.module('Starship')
.service('starshipService', function ($http, $q) {
  var baseUrl = 'http://swapi.co/api/';
  var nexPage = '';

  this.getStarships = function (starshipUrlList) {
    var deferred = $q.defer();
    var starships = [];
    //for loop
    starshipUrlList.forEach(function (url) {
      $http.get(url).then(function (starship) {
        starships.push(starship.data);

        if(starships.length === starshipUrlList.length) {
          deferred.resolve(starships);
        }
      })
    })
    return deferred.promise;
  }

  this.getCharacters = function () {
    if (nexPage) {
      return $http.get(nexPage)
      .then(saveNextPage);
    }
    return $http.get(baseUrl + 'people').then(saveNextPage);
  }

  function saveNextPage(result) {
    nexPage = result.data.next;
    return result;
  }
});
