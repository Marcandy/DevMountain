* angular is mostly based on Declarative programming: which let's concise program in order to not repeat yourself

* angular does a digest loop with $scope between the view and the model in-order to achieve two way data binding

* you can filter your ng-repeat with '|' which arguments like |arg1:arg2
    --add filter before order by index to avoid errors
    -you can filter your ng -repeat properties with orderBy like:
        <p ng-repeat="message in messages | orderBy : 'createdAt':true ">
        <!-- created order by Date intead of having to do ng-revers in the res.data -->
        {{message.message + "|" + message.cookie + ":" + message.createdAt}} </p>
    -format dat by adding '| date:short'

* ng-options syntax: 'ng-options= option value as option.name for option in options'
        ---options is model in the controller as an array which has object with a 'name' property and a value property

* The main reason to most of your heavy data manipulation in the service: is to be able to share you data easily between controller---since services bundle into a an object construtor --all of their publically available methods and properties can be easily accessed lik service.something
  --just like two methods or properties of the same name in different services will spit out refer to different value  or .this

* hollywood principle is a concept for service in angular: dont call me, I'll call you
    -- another concept is singleTon-- has only one copy but is being shared to many

* When creating a toggle, remember to set in the controller as: true or false

* the main things to remember about localStorage:
    -when the app load you need to set the array or data you to save like:
      var data = JSON.parse(localStorage['data'])
    -then you need to update the (entire-overwritten) local save data each time each time you update it or manipulate it in anyway like: localStorage['data'] = JSON.stringify(data)

* Asynchronous fires all operation at once and handlle each execution when they are available

* in an http request url: ? allows you to add additional queries, & means next query, and % means space

* you can create a promise with $q-defer()-- that promise is pending until you resolve it
  -promise process: make a deferred object with $q.defer() ===> return that deferred.promise at the end of the method ===> then resolve promise at a later time with the response that you want
  -$q  allows us to edit our response.data before we sent it to the controller
  -using .then let you to keep chaining the data, manipulation-- each subsequent .then will get the previous .then response
  $q.all--allows you to take multiple promises-and do something with data

* a good way to prevent form making an http request again when you already had the data from api is to save response.data to a global variable ==> add an if statement before the htttp request ==> checking if you already have that data resolve with $q.defer ---useful for login concept



// experiences -----

* group presentation
