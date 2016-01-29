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
    console.log($scope.search)
    $http.get('https://cors-anywhere.herokuapp.com/http://frengly.com?src='+$scope.search.from+'&dest='+$scope.search.to+'&text=' + searchText + '&email=isaac.c.lessard@gmail.com&password=parlerapp&outformat=json').then(function(data) {
    response = data.data.translation;
  console.log(response);
})
}
})

app.controller('ChatController', function ($scope, $http) {
  $scope.title = "Chat"
  $scope.tagline = "You can type, talk, and tranlate into a language to read or speak. You can also chat and translate."
  $scope.search = {};
  $scope.searchText = function () {
    var searchText = $('#searchText').val();
    var user = $('#userName').val();
    console.log($scope.search)
    $http.get('https://cors-anywhere.herokuapp.com/http://frengly.com?src='+$scope.search.from+'&dest='+$scope.search.to+'&text=' + searchText + '&email=isaac.c.lessard@gmail.com&password=parlerapp&outformat=json').then(function(data) {
    response = data.data.translation;
    $('#messages').append($('<li>').text(user + ": " + response));
  console.log(response);
})
}
  //
  // // change to ng-click
  //  $('form').submit(function(){
  //    socket.emit('chat message', $('#searchText').val());
  //    $('#m').val('');
  //    return false;
  //  });
  //  // create var for socket
  //  socket.on('chat message', function(response){
  //      $('#messages').append($('<li>').text(response));
  //    });

})
