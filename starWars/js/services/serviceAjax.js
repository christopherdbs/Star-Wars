angular.module('exoStarWars')
	.factory('serviceAjax',['$http','$q', function ($http, $q) {

	//	var apikey="ccb45c824d585e2e549f34d1096877d3"; // votre clé MOVIE DB
		var urlBase = "https://swapi.co/api/";

		var service = {
			getData:getData
		};


		function getData (type,page){
			switch(type){
				case 'people' : 
					url = urlBase+"people/?page="+page;
					break;
				case 'planets':
					url = urlBase+"planets/?page="+page;
					break;
				case 'starships' : 
					url = urlBase+"starships/?page="+page;
					break;
				case 'films':
					url = urlBase+"films/?page="+page;
					break;
				case 'species' : 
					url = urlBase+"species/?page="+page;
					break;
				case 'vehicles':
					url = urlBase+"vehicles/?page="+page;
					break;
				default:
					url = urlBase+"people/?page="+page;
			}
			return $http(
				{
					method : "GET",
					url : url				
				}
			).then(function(data){if(data!=null) return data.data;});

		}

		return service;
	}])

