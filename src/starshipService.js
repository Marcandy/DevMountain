angular.module('Starship')
.service('starshipService', function ($http) {
  var baseUrl = 'http://swapi.co/api/';
  var nexPage = '';

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
