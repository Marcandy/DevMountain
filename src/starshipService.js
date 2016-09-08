angular.module('Starship')
.service('starshipService', function ($http, $q) {
  var baseUrl = 'http://swapi.co/api/';
  var nexPage = '';

  this.getStarships = function (starshipUrlList) {
    var deferred = $q.defer();
    var starships = [];
    //for loop
    starshipUrlList.forEach(function (url) {
      //make request for each item to the list
      //resolve only when we have everthing
      $http.get(url).then(function (starship) {
        starships.push(starship.data);

        if(starships.length === starshipUrlList.length) {
          //.resolve(data) - all data is back
          deferred.resolve(starships);
        }
      })
      .catch(function (err) {
        deferred.reject(err);
      });
    })
    //return the PROMISE not Data
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
