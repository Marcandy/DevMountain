angular.module('AngularMail', ['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('inbox', {
      url: '/'
      , templateUrl: './src/templates/inbox.html'
      , controller: 'inboxCtrl'
    });
    .state('draft' , {
      url: '/draft/:email'
      ,template: '/s'
      ,controller: 'inboxCtrl'
    }
    .state('contacts', {
      url: '/contacts'
      , templateUrl: './src/templates/contacts.html'
      , controller: 'contactCtrl'
    })
    .state.go {

    }
})
