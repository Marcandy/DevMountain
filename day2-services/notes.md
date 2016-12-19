* dependencies injection: when passing third party libraies, controller, services to the anglular--the process of registering constructor functions

* eventhough two variavles of the same name might be in two different services--if they are created by this -- they will refer to the service being called

* the  hollywood principle for dependencies injection-- dont call me, I'll call you
    -service

* singleTon = an actual thing which is being shared -- has only on copy
    --a factory is not a singleton rather its similar to a constructor

* the controller should be as light as possible in code : it simply needs to get and set organize data on the view
    -g getting data from api, doing calculation, manipulation

    this.toggleFavorite = function (userId) {
* creating a toggle is similar to making equal to a not equal to itself -- like a truthy or falsey


-----------------------------------------
* Cool quotes from angular project
  -Amelia Earhart: The most difficult thing is the decision to act, the rest is merely tenacity.

* Rest uses http to CRUD: create, read, update, delete

* q.defer is basically setting something to happen in the future / you make that happen by calling resolve on the promise
