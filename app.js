// This is a JavaScript file

 ons.bootstrap()
      .controller('AppController', function($scope) {
        this.load = function(page) {
          $scope.splitter.content.load(page);
          $scope.splitter.left.close();
        };
        this.login = function(){
             $scope.username = document.getElementById('username').value;
             $scope.password = document.getElementById('password').value;
             $scope.message = 'Aap aaiyash ho! Welcome to AaiyashHQ';

          if ($scope.username === 'pushpak' && $scope.password === 'secret') {
            ons.notification.alert('You have met '+$scope.username+'😎 before!');
          }
         else if($scope.username === 'bhavik' && $scope.password === 'secret'){
             ons.notification.alert('You have met '+$scope.username+'🤡 before');
         }
         else if($scope.username === 'aaiyash' && $scope.password === 'aaiyashi'){
             ons.notification.alert($scope.message);
         }
         else if($scope.username != null && $scope.password != null){
             ons.notification.alert('Hello noobie ' +$scope.username+'. Please register.');
         }
          else {
            ons.notification.alert('We havnt met yet !!🤖');
          }
        };
        
        this.toggle = function() {
          $scope.splitter.left.toggle();
        };
      });
      

    ons.ready(function() {
        console.log("Onsen UI is ready!");
    });
