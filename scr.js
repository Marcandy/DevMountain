//
//
//
// function logger(array) {
//   if (Array.isArray(array)) {
//     array.forEach(function(item) {
//       console.log(item);
//   });
//   }
// }
//
// logger(myArray);
// //push is mutating
// myArray.push(9, 10);
//
// myArray.pop();
//
// var one = myArray.shift();
//
// myArray.unshift(0, 1);
//
// var testString = 'This is a string';
// var splitTestString = testString.split('');
// console.log(testString);
//
// var newTestString = splitTestString.join('');
//
//
// var myStringArray = myArray.toString();
//
// myArray.splice(myArray.indexOf(myName), 1, 'joe')
// //splice is mutating
//
// var myArrayCopy = myArray.slice();
// //slice is non-mutating
// var someStuffIwanted = myArray.slice(3, 6);
//
// var lastIndexOfMyName = myArray.lastIndexOf(myName);
//
// var myReversedArray = myArray.reverse();
//non mutating
//------------------------------------------------

var mentors = ['Joe', 'Dontavious', 'Taryn'];


function functionName() {
  // for (var i = 0; mentors.length; i++) {
  //   if (mentors [i] === 'Joe') {
  //     return i;
  //   }
  // }
  mentors.forEach(function (mentor, index, collection) {
    if (mentor === 'Joe') {
      joesIndex = index;
    }
  });

  return joesIndex;
}

var numbers = [10, 14, 99, 36];
function sum(array) {
    var sum = array.reduce( function (previous, current, index, collection) {
      return previous + current;
    }, 0);
    return sum;
}

function doubledArray( array) {
  return array.map(function(number, index, collection){
    return number * 2;
  });
}
console.log
