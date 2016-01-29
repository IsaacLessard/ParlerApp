app.controller('HomeController', function ($scope) {
  $scope.title = "Parler - The Translate App"
  $scope.tagline = "You can type, talk, and tranlate into a language to read or speak. You can also chat and translate."
})

app.controller('SearchController', function ($scope) {
  $scope.title = "Search";
  $scope.tagline = "You can type, talk, and tranlate into a language to read or speak. You can also chat and translate."
  $scope.search = function ($http) {
    $http.get(url).then(function (data) {
      var searchQry = $scope.searchText;
      $scope.resText = data;
      console.log(data)
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
