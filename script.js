// Code goes here
angular.module('app', ['ui.router'])

.run(function($rootScope, $location, $anchorScroll) {
  $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams) {
      setTimeout(function() {
        if ($location.hash()) {
          $anchorScroll();
        }
      });
    });
})

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/pageone');

  $stateProvider
    .state('pageone', {
      url: '/pageone',
      templateUrl: 'pageone.html'
    })
    .state('pagetwo', {
      url: '/pagetwo',
      controller: 'pagetwoCtrl',
      templateUrl: 'pagetwo.html'
    });

})

.controller('pagetwoCtrl', function($scope, $location) {
  $scope.goto = function() {
    $location.url('pageone#one');
  };
});