* Declarative programming let you describe what you want - the outcome

* Declarative programming hides unnecessary task, not needed to be rewitten-mainly dont repeat yourself
  --Angular let you extend you html-- you should have talk to your html through javascript--concerned mostly with modifying the state
  -- angular does a digest loop with $scope to achieve two way data biding

* common element in ui should be resusable and codified in as little as possible
  --http://paislee.io/a-conceptual-introduction-to-angularjs/

* filter in angular let you manipulate data with just the symbol |

* Angular runtime as :  Module -> config -> routes ->
                                            view = $scope = controller ->
                                                            (factory, service, controller)


* Check input type html, there are a bunch of them


* Needs to apply filter | first when using track by index inorder to solve duplicates in ng-repeat

* if we wanted just part of our app to be only about angular we do not stick 'ng-app' in html but in the divs or particular element that we want.
  -- can have filter to have two argument like: | filter: arg1:arg2  --- or make two filter for two different input box like |filter: arg1 | filter: arg2
  -- empty quote is falsy in: orderBy filter with ng-model

* ng-options filter an array or object in the controller, by name and value in conjuction with a ng-model --and filter which takes that model name
  'ng-options='option.value as option.name for option in options' ---just saying
  options value as the actual value that we want to search in given array or object compare to option.name which is displaying
