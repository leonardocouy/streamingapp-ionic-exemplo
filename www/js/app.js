angular.module('streamingapp', ['ionic', 'streamingapp.controllers', 'com.2fdevs.videogular', 'ngSanitize'])
 
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
 
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
 
.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider

 
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
 
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
 

  .state('tab.videos', {
    url: '/videos',
    views: {
      'tab-videos': {
        templateUrl: 'templates/tab-videos.html',
        controller: 'StreamingCtrl'
      }
    }
  })
 
  $urlRouterProvider.otherwise('/tab/home');
 
});