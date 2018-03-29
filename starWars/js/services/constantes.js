angular
	.module('exoStarWars')
	.constant('MOVIE_GENRES',[
		{
			"id": 28,
			"name": "Action"
		},
		
	]).constant('DATA_TYPES', [
		{                                                                                                                                                                                                                 
			name : 'people',
			label	: 'Personnages'
		},
		{
			name : 'planets',
			label	: 'Planètes'
		},
		{
			name : 'starships' ,
			label 	: 'Vaisseaux'
		},
		{
			name : 'films' ,	
			label : "Films"
		},
		{
			name : 'vehicles' ,
			label 	: 'Vehicules'
		},
	  {
			name : 'species' ,
			label 	: 'Espèces'
		}]
	)
	.constant('DEFAULT_DATA_TYPE', {
		name : 'people',
		label : 'Personnages'});


