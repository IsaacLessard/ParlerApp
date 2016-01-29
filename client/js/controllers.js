app.controller('HomeController', function ($scope) {
  $scope.title = "Parler - The Translate App"
  $scope.tagline = "You can type, talk, and tranlate into a language to read or speak. You can also chat and translate."
})

app.controller('SearchController', function ($scope, $http) {
  $scope.title = "Search";
  $scope.tagline = "You can type, talk, and tranlate into a language to read or speak. You can also chat and translate."
  $scope.search = {};
  $scope.searchText = function () {
    var searchText = $('#searchText').val();
    console.log($scope.search)
    $http.get('https://cors-anywhere.herokuapp.com/http://frengly.com?src='+$scope.search.from+'&dest='+$scope.search.to+'&text=' + searchText + '&email=isaac.c.lessard@gmail.com&password=parlerapp&outformat=json').then(function(data) {
  console.log(data.data.translation);
})
}
})

app.controller('ChatController', function ($scope) {
  $scope.title = "Chat"
  $scope.tagline = "You can type, talk, and tranlate into a language to read or speak. You can also chat and translate."

  // change to ng-click
   $('form').submit(function(){
     socket.emit('chat message', $('#m').val());
     $('#m').val('');
     return false;
   });
   // create var for socket
   socket.on('chat message', function(msg){
       $('#messages').append($('<li>').text(msg));
     });

})
