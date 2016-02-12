angular.module('streamingapp.controllers', [])


.controller('HomeCtrl', function() {

})


.controller('StreamingCtrl', function($scope, $sce, $timeout) {
  $scope.videos = [
    {'name': 'Video 1', sources: [{src: $sce.trustAsResourceUrl("http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8"), type: 'application/x-mpegURL'}]},
    {'name': 'Video 2', sources: [{src: $sce.trustAsResourceUrl("http://vevoplaylist-live.hls.adaptive.level3.net/vevo/ch1/appleman.m3u8"), type: 'application/x-mpegURL'}]},
    {'name': 'Video 3', sources: [{src: $sce.trustAsResourceUrl("http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8"), type: 'application/x-mpegURL'}]},
  ]

  
  $scope.config = {
    sources: $scope.videos[0].sources,
    theme: {
      url: "lib/videogular-themes-default/videogular.min.css"
    },
  };


  $scope.onPlayerReady = function (API) {
    $scope.API = API
  }

  $scope.showVideo = function(index){
    $scope.config.sources = $scope.videos[index].sources
    $timeout($scope.API.play.bind($scope.API), 100)
  }
})