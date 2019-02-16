angular.module('app').service('myService', function ($http) {
var baseUrl = 'http://swapi.co/api/people/';

this.getMyData = function () {
  var deferred = q.defer();
	// return $http.get(baseUrl)
	 $http.get(baseUrl)
   .then(function (response) {
    
      deferred.resolve(response.data.results);
    }).catch(function (response) {
      console.log(response);
  })
  return deferred.promise;
}

});
