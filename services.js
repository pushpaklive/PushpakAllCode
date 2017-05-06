'use strict';
//author: Pushpak
//service(extracts data) is defined by this keyword "this"
angular.module('myApp')
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) { //resource instead of http
            
        

                 
                this.getPromotions = function(){
									     return $resource(baseURL+"promotions/:id",null,  {'update':{method:'PUT' }});
									};
             // this.getDishes = function(){
                                        // return $http.get(baseURL+"dishes");
                                    // };
                    // this.getDish = function (index) {
                                        // return $http.get(baseURL+"dishes/"+index);

                // };
				
			this.getDishes = function(){
							return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT'}});
						    };	
            //no getDish required

        }])

//from services we make request to server for files ... in this case file is array(json) ... using get method

.service('corporateFactory',['$resource', 'baseURL', function($resource,baseURL) { //$resource and baseurl required as dependencies in every individual service || took 2 hrs
           
    this.getLeaders = function(){
		return $resource(baseURL+"leadership/:id", null, {'update':{method:'PUT'}});
			};
            
                
           // this.getLeaders = function(){
					// return leadership;
					// }
            // this.getLeader = function(index){
					// return leadership[index];
					// }
        }])// earlier |----- .service('corporateFactory', function() { -----| was only used so missed bracket ] in this line. Common mistake.  
		//  bracket [  Needed as added two dependencies above '$resource' and 'baseURL'

;