function scoper() {
  var scoperVar = "a";

  function inner() {
    console.log(scoperVar);
    scoperVar = 1;
    console.log(scoperVar);
  }
  inner();
  console.log(scoperVar);
}

scoper();


function returnTwo() {
  return 2;

}

var isTwo = returnTwo;
console.log(isTwo);
var atuallyTwo = isTwo();

//-------------------------------------------------------

function invokesMyArgument(fn) {
  return fn();
}

console.log(invokesMyArgument(returnTwo));
//------------------------------------------

function forEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function logDouble(number) {
  console.log(numer * 2);
}

forEach([3, 8, 4, 7], logDouble);

function filter(array, callback) {debugger;
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i]) ) {
      newArr.push(array[i]);
    }
  }
    return newArr;
}

function divisibleByThree(number) {
  return number % 3 === 0;
}

function kindaOfEqualsOne(number) {
  return number == 1;
}

var onlyThrees = filter([5, 2, 9, 963], divisibleByThree);
console.log(onlyThrees);

var ones = filter( [1, 'abc', '1', 'one'], kindaOfEqualsOne);
console.log(ones);


function checkIfFive(number) {
    if (number === 5) {
      return 'This number is five'
    }
}
