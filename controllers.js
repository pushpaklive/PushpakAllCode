'use strict';
angular.module('myApp')
.controller('MenuController', ['$scope', 'menuFactory','$stateParams' ,function($scope, menuFactory, $stateParams) {
			// $scope.showMenu = false;
            // $scope.message = "Loading ...";
                        // $scope.dishes= {};
                        // menuFactory.getDishes()
            // .then(
                // function(response) {
                    // $scope.dishes = response.data;
                    // $scope.showMenu = true;
                // },
                // function(response) {
                    // $scope.message = "Error: "+response.status + " " + response.statusText;
                // }
            // );
			
			$scope.showMenu = false;
            $scope.message = "Loading ...";
            menuFactory.getDishes().query(
                function(response) {
                    $scope.dishes = response;
                    $scope.showMenu = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                });
			
			// $scope.dish = {}; //were doing this way to add first dish element and after that menuFactory.getDish() is stored 
			                     //and displayed as response as below[only for $http but her it is replaced by $resource]
            
            // menuFactory.getDish(parseInt($stateParams.id,10))
            // .then(
                // function(response){
                    // $scope.dish = response.data;
                    // $scope.showDish=true;
                // },
                // function(response) {
                    // $scope.message = "Error: "+response.status + " " + response.statusText;
                // }
            // );
			
			
            
}])


.controller('IndexController', ['$scope', 'menuFactory','$stateParams' ,function($scope, menuFactory, $stateParams) {

            
			$scope.showDish = false;
			$scope.message="Loading ...";
			menuFactory.getDishes().get({id:0})  //to get element with id = 0
			//do not use by defining variable $scope.x = service.object() --- directly use service.object() whatever likr here menuFactory.xyz()
			.$promise.then(
				function(response){
					$scope.dish = response;
					$scope.showDish = true;
				},
				function(response) {
					$scope.message = "Error: "+response.status + " " + response.statusText;
				}
			);

			// menuFactory.getDish(0)
			// .then(
				// function(response){
					// $scope.dish = response.data;
					// $scope.showDish = true;
				// },
				// function(response) {
					// $scope.message = "Error: "+response.status + " " + response.statusText;
				// }
                        // );
						
            
			menuFactory.getPromotions().query(  //query() to retrieve all elements in an array
                function(response) {
                    $scope.promotions = response;
                    $scope.showMenu = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                });

}])


.controller('AboutController', ['$scope', 'corporateFactory', function($scope, corporateFactory) {

			$scope.message="Loading ...";
			corporateFactory.getLeaders().query(
                function(response) {
                    $scope.leadership = response; //actual array(file) name here
                    $scope.showMenu = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                });

}])


.controller('DishCommentController', ['$scope', 'menuFactory', '$stateParams', function($scope,menuFactory,$stateParams) { //once problem came because $stateParams was not added as param
             
			$scope.showDish = false;
            $scope.message="Loading ...";
            $scope.dish = menuFactory.getDishes().get({id:parseInt($stateParams.id,10)}) // retrieve the dish with respective id  which is attached using $stateParams
            .$promise.then(
						function(response){
							$scope.dish = response;
							$scope.showDish = true;
						},
						function(response) {
							$scope.message = "Error: "+response.status + " " + response.statusText;
						}
            ); 
			
			 $scope.submitComment = function () {
                $scope.mycomment.date = new Date().toISOString();
                console.log($scope.mycomment);
                $scope.dish.comments.push($scope.mycomment);
                menuFactory.getDishes().update({id:$scope.dish.id},$scope.dish);
				// not a part of standard methods supported by $resource 
				//update() method --  here, only 1 dish item is retrieved as we supplied as $scope.dish.id ,and $scope.dish.id is the id of that 1 item (the first parameter),
				//second parameter $scope.dish is the updated array object in db.json file. hence details will be updated there    
				//	id:$scope.dish.id  --- here PUT call is made as it is attached to update() method.Thus, 												
				//updated dish object $scope.dish will be pushed back to server site..... mine is http://localhost:3000

                                $scope.commentForm.$setPristine();
                                $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            }
}])

.controller('ContactController', ['$scope', 'menuFactory', function($scope, menuFactory) { //adding menuFactory service so that data can be accessed directly
            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                        var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
                        $scope.channels = channels;
            $scope.invalidChannelSelection = false;
 }])



.controller('FeedbackController', ['$scope', 'menuFactory', function($scope, menuFactory) {
                        $scope.sendFeedback = function() {
                                console.log($scope.feedback);
                                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {      
                                     $scope.invalidChannelSelection = true;
                                     console.log('incorrect');
                                      }
								else {
									$scope.invalidChannelSelection = false;
									$scope.feedback = {mychannel:"", firstName:"", lastName:"",
													   agree:false, email:"" };
									$scope.feedback.mychannel="";
                                    $scope.feedback
									$scope.feedbackForm.$setPristine();
									console.log($scope.feedback);
								}
            };
 }]);


 


;