app.controller('HomeController', function ($scope) {
  $scope.title = "Hiekka Chat - The Translate App"
})

var response = "";
app.controller('SearchController', function ($scope, $http) {
  $scope.title = "Searchmode";
  $scope.search = {};
  $scope.searchText = function () {
    var searchText = $('#searchText').val();
    $http.get('https://cors-anywhere.herokuapp.com/http://frengly.com?src='+$scope.search.from+'&dest='+$scope.search.to+'&text=' + searchText + '&email=isaac.c.lessard@gmail.com&password=parlerapp&outformat=json').then(function(data) {
    $scope.translation = data.data.translation;
})
}
})

app.controller('ChatController', function ($scope, $http) {
  $scope.title = "Welcome to Hiekka Chat"
  $scope.search = {};
  var socket = io();
  $scope.messages = [];
  $scope.message = {};
  $scope.sendMessage = function () {
    $http.get('https://cors-anywhere.herokuapp.com/http://frengly.com?src='+$scope.search.from+'&dest='+$scope.search.to+'&text=' + $scope.message.text + '&email=isaac.c.lessard@gmail.com&password=parlerapp&outformat=json').then(function(data) {
      socket.emit('message', {
        text: data.data.translation,
        user: $scope.message.username
      })
    })
  }
  socket.on('message', function(message) {
    $scope.messages.push(message);
    $scope.$apply();
  })

})

window.setInterval(function() {
  var elem = document.getElementById('messagebox');
  elem.scrollTop = elem.scrollHeight;
}, 5000);


function HeaderController($scope, $location)
{
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}
