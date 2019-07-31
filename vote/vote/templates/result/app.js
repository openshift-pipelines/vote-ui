var app = angular.module('catsvsdogs', []);

var bg1 = document.getElementById('background-stats-1');
var bg2 = document.getElementById('background-stats-2');

app.controller('statsCtrl', function($scope, $http, $interval){
  $interval(function() {
    $http.get('/votes').
    then(function(response) {
      d = response.data
      r = getPercentages(d.a, d.b)
      $scope.aPercent = r.a;
      $scope.bPercent = r.b;
      // this callback will be called asynchronously
      // when the response is available
    }, function(response) {
      console.log("error ", response)
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }, 3000)
});

app.config(function($interpolateProvider) {
  console.log("changed interpolating")
  $interpolateProvider.startSymbol('[[').endSymbol(']]');
});

function getPercentages(a, b) {
  var result = {};

  if (a + b > 0) {
    result.a = Math.round(a / (a + b) * 100);
    result.b = 100 - result.a;
  } else {
    result.a = result.b = 50;
  }

  return result;
}