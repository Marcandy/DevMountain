//sethomeCtrl
//connect to index.html
//test that its working
angular.module('angularContacts').controller('homeCtrl', function($scope) {
  $scope.test = "I'm alive";
  $scope.contacts = contacts;
  $scope.showNewContactForm = false;
  
  $scope.addContact= function (contact) {
    contact.picture = 'http://placehold.it/32x32';
    $scope.contacts.push(contact);

    $scope.newContact = {};
    $scope.showNewContactForm = false;
  }

});

var contacts = [
  {
    "_id": "57caeff3a4df71209304615a",
    "picture": "http://placehold.it/32x32",
    "name": "Melanie Gordon",
    "email": "melaniegordon@amtap.com",
    "phone": "+1 (987) 496-2927"
  },
  {
    "_id": "57caeff3530faa6c15d9e9a4",
    "picture": "http://placehold.it/32x32",
    "name": "Amber Foreman",
    "email": "amberforeman@amtap.com",
    "phone": "+1 (955) 414-2764"
  },
  {
    "_id": "57caeff378d0c6e2a0156fa5",
    "picture": "http://placehold.it/32x32",
    "name": "Lola Cox",
    "email": "lolacox@amtap.com",
    "phone": "+1 (828) 581-2692"
  },
  {
    "_id": "57caeff319ef1eabaad8e16a",
    "picture": "http://placehold.it/32x32",
    "name": "Rochelle George",
    "email": "rochellegeorge@amtap.com",
    "phone": "+1 (999) 562-2575"
  },
  {
    "_id": "57caeff38e91067d36f571ea",
    "picture": "http://placehold.it/32x32",
    "name": "Letitia Cameron",
    "email": "letitiacameron@amtap.com",
    "phone": "+1 (875) 480-2293"
  },
  {
    "_id": "57caeff3413e7b27cc0c1ae3",
    "picture": "http://placehold.it/32x32",
    "name": "Whitney Adkins",
    "email": "whitneyadkins@amtap.com",
    "phone": "+1 (897) 453-3066"
  },
  {
    "_id": "57caeff35e81285febe28794",
    "picture": "http://placehold.it/32x32",
    "name": "Hamilton Curtis",
    "email": "hamiltoncurtis@amtap.com",
    "phone": "+1 (990) 505-2927"
  },
  {
    "_id": "57caeff3ebf3047854bd8909",
    "picture": "http://placehold.it/32x32",
    "name": "Nona Ortega",
    "email": "nonaortega@amtap.com",
    "phone": "+1 (864) 425-2266"
  },
  {
    "_id": "57caeff3505fefcad0f03dd6",
    "picture": "http://placehold.it/32x32",
    "name": "Lea Hahn",
    "email": "leahahn@amtap.com",
    "phone": "+1 (993) 501-3734"
  },
  {
    "_id": "57caeff3eb4897d9cac8f118",
    "picture": "http://placehold.it/32x32",
    "name": "Edith Dickerson",
    "email": "edithdickerson@amtap.com",
    "phone": "+1 (985) 409-2255"
  },
  {
    "_id": "57caeff31eeb8ef8192aedab",
    "picture": "http://placehold.it/32x32",
    "name": "Marla Sawyer",
    "email": "marlasawyer@amtap.com",
    "phone": "+1 (911) 457-3382"
  },
  {
    "_id": "57caeff3d47bd2609ef5f16b",
    "picture": "http://placehold.it/32x32",
    "name": "Josefa Mcmillan",
    "email": "josefamcmillan@amtap.com",
    "phone": "+1 (895) 409-2972"
  },
  {
    "_id": "57caeff3578b2d12ea931980",
    "picture": "http://placehold.it/32x32",
    "name": "Tracey Harvey",
    "email": "traceyharvey@amtap.com",
    "phone": "+1 (953) 437-3646"
  },
  {
    "_id": "57caeff3835adeb49776ade6",
    "picture": "http://placehold.it/32x32",
    "name": "Marisol Barr",
    "email": "marisolbarr@amtap.com",
    "phone": "+1 (810) 455-3572"
  },
  {
    "_id": "57caeff3a25a209d169023ac",
    "picture": "http://placehold.it/32x32",
    "name": "Olivia Levy",
    "email": "olivialevy@amtap.com",
    "phone": "+1 (981) 584-3451"
  },
  {
    "_id": "57caeff3dc05e9610b06a633",
    "picture": "http://placehold.it/32x32",
    "name": "Johanna Baldwin",
    "email": "johannabaldwin@amtap.com",
    "phone": "+1 (800) 547-3377"
  },
  {
    "_id": "57caeff331d7e1d53eec6522",
    "picture": "http://placehold.it/32x32",
    "name": "Baxter Gillespie",
    "email": "baxtergillespie@amtap.com",
    "phone": "+1 (822) 512-3231"
  },
  {
    "_id": "57caeff3e5dab706e977c2b1",
    "picture": "http://placehold.it/32x32",
    "name": "Karen Stanley",
    "email": "karenstanley@amtap.com",
    "phone": "+1 (811) 540-3397"
  },
  {
    "_id": "57caeff33cfc34181874431b",
    "picture": "http://placehold.it/32x32",
    "name": "Carver Britt",
    "email": "carverbritt@amtap.com",
    "phone": "+1 (860) 467-2625"
  },
  {
    "_id": "57caeff3a1e92f91b8b8370b",
    "picture": "http://placehold.it/32x32",
    "name": "Dudley Davenport",
    "email": "dudleydavenport@amtap.com",
    "phone": "+1 (989) 540-2141"
  }
];
