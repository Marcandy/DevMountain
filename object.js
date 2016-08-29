var table = {
  color: 'white'
  , height: 4
  , legs: 4
  ,':hover': underline
};

table.color = 'blue';
table.legs = undefined; //dont delete object prop, you want your obj to stay consitent

table.width = 3;

for ( var prop in table) {
  console.log( tableProp);
  //tableProp == 'color'
  //table['color'];
  console.log(table[tableProp]);
  }

//methods
var marc = {
  firstName: 'Ryan'
  ,lastName: 'Walsh'
  ,getFullNmae: function() {
    return this.firstName + ' ' + marc.lastName;
  }
};

var fullName = marc.getFullName();
ryan.fullName = ryan.getFullName();

var table = new Object();

var customers = [
    {
        name: "John Doe"
        , creditCardNumber: 1
        , recentPurchases: [ "Clothes", "Food", "Other things" ]
    }
    , {
        name: "Jane Doe"
        , creditCardNumber: 2
        , recentPurchases: [ "Clothes", "Food", "Other things" ]
    }
    , {
        name: "Jim Doe"
        , creditCardNumber: 3
        , recentPurchases: [ "Clothes", "Food", "Other things" ]
    }
    , {
        name: "Johnny Doe"
        , creditCardNumber: 4
        , recentPurchases: [ "Clothes", "Food", "Other things" ]
    }
];

//
// function getPruvsarr) {
//   for (var prop in object) {
//     if (arr[prop] == recentPurchases) {
//       return arr[prop];
//     }
//   }
// }

function getPurchases( custormers) {
  var purchases = [];
  for (var i = 0; i < customers.length; i++) {
    var current = custormers[i];
    for (var j = 0; j < current.recentPurchases.length; j++) {
      purchases.push(current.recentPurchases[j]);
    }
  }
  return purchases;
}

// {
//   Clothes: 4
//   ,food: 4
//   , 'other thisngs': 4
// }

function countPurchases( purchases) {
  return purchases.reduce(function (previous, current) {
    if (previous[current]) {
      previous[current]++;
    }else {
      previous[current] = 1;
    }
    return previous;
  }, {});
}

console.log(countPurchases(getPurchases(customers)));


//common mistake
