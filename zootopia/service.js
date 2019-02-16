angular.module('zooApp').service('myService', function ($http) {

//make a get panel function
this.getAnimals =  function () {
  //call the api
  var promise = $http.get('http://practiceapi.devmounta.in/api/animals')
  .then(function (response) {
    //status and data
      //data- actual data you asked for
      if (response.status === 200) {
        return response.data;
      }
      //return actual data
      return 'Error:' + response.status;
  })
  return promise;
}


})
