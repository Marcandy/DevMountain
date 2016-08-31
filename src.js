//javascript is synchronus and asynchronus
//single threaded
//
function closure(param) {
  return function () {
    console.log(param);
  }
}

var inner = closure('first');
inner();

var innerTwo = closure('second');
// innerTwo();

for (var i = 0; i < 5; i++) {
   var currentI = closure(i);
  setTimeout(currentI, i * 1000);
}

function closure(savedReference) {
  return function () {
    console.log(savedReference)
  }
}

function createGreeter(name, mood) {
  var greeting = 'Hello' + name + 'you look' + mood + 'today';
  return function () {
    return greeting;
  }
}

var greetDontavious = createGreeter('Dontavious', 'indecisive');
console.console.log(greetDontavious());

var greetJoe = createGreeter('Joe', 'smug');

greetJoe();
greetDontavious();

//similar to bind

// function greeting(name, mood) {
//   }
// var greetDontavious = gree

function greetPerson( name ) {debugger
  return function (mood) {
    return 'Hello' + name + 'you look' + mood + 'today';
  }
}

var greetDontavious = greetPerson('Dontavious');
console.log(greetDontavious('glooom'));
---------------------------------------------------

function sum(numOne, numTwo ) {debugger
  if (numTwo !== undefined) {
    return numOne + numTwo
  }
  return function (innerNum) {
    return numOne + numTwo;
  }
}

sum(5, 0);
var firstNum = sum(2);
//-------------------------------------------

var personModule = (function () {
  var person = {
    name: 'Dontavious'
    , mood: 'gloom'
    , falconsFan: false
    , password: 'peanuts1'
  };
  return {
    getName: function() {
      return person.name;
    }
    ,getMood: function () {
      return person.mood;
    }
    , setMood: function (newMood) {
      person.mood = newMood;
    }
    , setPassword: function (newPassword) {
      if (newPassword.length < 6) {
        return 'Password must be longer';
      }
      person.password = newPassword;
    }
  }
})();

personModule.setPassword('hunter2');
