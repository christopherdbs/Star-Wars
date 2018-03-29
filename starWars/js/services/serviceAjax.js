angular.module('exoStarWars')
	.factory('serviceAjax',['$http','$q', function ($http, $q) {

	//	var apikey="ccb45c824d585e2e549f34d1096877d3"; // votre clé MOVIE DB
		var urlBase = "https://swapi.co/api/";

		var service = {
			getData:getData
		};


		function getData (type,id){
			switch(type){
				case 'people' : 
					console.log(id);
					url = urlBase+"people/"+id+"/";
					break;
				case 'planets':
					url = urlBase+"planets/"+id+"/";
					break;
				case 'starships' : 
					url = urlBase+"starships"+id+"/";
					break;
				case 'films':
					url = urlBase+"films/"+id+"/";
					break;
				case 'species' : 
					url = urlBase+"species/"+id+"/";
					break;
				case 'vehicles':
					url = urlBase+"vehicles/"+id+"/";
					break;
				default:
					url = urlBase+"people/"+id+"/";
			}
			return $http(
				{
					method : "GET",
					url : url				
				}
			).then(function(data){return data.data;});

		}

		return service;
	}])

