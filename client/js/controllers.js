app.controller('HomeController', function ($scope) {
  $scope.title = "Parler - The Translate App"
  $scope.tagline = "You can type, talk, and tranlate into a language to read or speak. You can also chat and translate."
})

var response = "";
app.controller('SearchController', function ($scope, $http) {
  $scope.title = "Search";
  $scope.tagline = "You can type, talk, and tranlate into a language to read or speak. You can also chat and translate."
  $scope.search = {};
  $scope.searchText = function () {
    var searchText = $('#searchText').val();
    $http.get('https://cors-anywhere.herokuapp.com/http://frengly.com?src='+$scope.search.from+'&dest='+$scope.search.to+'&text=' + searchText + '&email=isaac.c.lessard@gmail.com&password=parlerapp&outformat=json').then(function(data) {
    response = data.data.translation;
})
}
})

app.controller('ChatController', function ($scope, $http) {
  $scope.title = "Chat"
  $scope.tagline = "You can type, talk, and tranlate into a language to read or speak. You can also chat and translate."
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
