* when you create a $q-deferred, it is pending until you resolve or reject

* we need asynchronus because javascript can do only one thing at time, if that thing is waiting then website is also waiting, meaning the user is not getting any feedback

* promise process: we make deferred object with q.defer() --then we return promise on the deferred obj --then at later time we resolve the deferred object with the value that we want

* if you are not a making a web request dont use $http
    -$q allow to edit out data before we send it to the controller

* use JSONP for itunes

* you can add  if statement before your http request in order to check if you previously got the data--- with $q.defer resolve what you already head
    --you can do a bunch of .then() to manipulate the data before resolving it
    //useful patter login user data--inorder to save data in variable--you wont have to do an http requestt each user fo to another page

* keep doing defer with, $q.defe() in order to get practice, then later on you can do it the shorter version with returning http right away
