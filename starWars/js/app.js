'use strict';

angular
	.module('exoStarWars', [
		'ngRoute','jkAngularRatingStars'
	])
	.config(function ($routeProvider,$locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'defaultCtrl as starWars'
			})
			.otherwise({
				redirectTo: '/'
			});
		$locationProvider.hashPrefix('');
		/*	  .html5Mode(true);*/
	});

