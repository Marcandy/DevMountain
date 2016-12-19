Ajax(asynchronous javascript ): browser stay loaded while javascript get data in the backgroud to manipulate DOM

HTTP request body content:
    * Headers
      --URL
      --Meta
      --Method
    * body
      -JSON
synchronous: fires one at a time and exexute each request subsequently //when the previous finish exuting
asynchronous: fires all request at the first time on the first go, and exucute each as soon it get the result
<!-- --" Synchronous way: It waits for each operation to complete, after that only it executes the next operation. For your query: The console.log() command will not be executed until & unless the query has finished executing to get all the result from Database.

Asynchronous way: It never waits for each operation to complete, rather it executes all operations in the first GO only. The result of each operation will be handled once the result is available. For your query: The console.log() command will be executed soon after the Database.Query() method. While the Database query runs in the background and loads the result once it is finished retrieving the data." -->

questions mark ? go at the of the real url for inorder to start taking parameter for the request--know as query parameter, the % mean space
* promise is asynchronous helper when make a http call, it's like ordering a food then(similar to .then) getting a receipt to get the food
  -- http.cat useful for status in promise data
  -- search rest api about ideas that you --search api https://market.mashape.com


* the process clone or prevous project correctly is
    -clone the old dev repo -- alsoe reset the orign url
    -checkout a new branch
    -back to master and fetch and reset all the work you handled
    -then start working on the newest branch and progressesibly merge that into the master


* <p ng-repeat="message in messages | orderBy : 'createdAt':true ">
  <!-- created order by Date intead of having to do ng-revers in the res.data -->
  {{message.message + "|" + message.cookie + ":" + message.createdAt}} </p>
  // can access the order by the ng.repaet of each properties

  human readable time in angular  with " | date"
