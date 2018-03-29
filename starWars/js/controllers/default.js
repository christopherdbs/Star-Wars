angular.module('exoStarWars')
	.controller('defaultCtrl', function ( DEFAULT_DATA_TYPE,DATA_TYPES,$routeParams,serviceAjax) {

		this.data=[]
	
		this.currentPage=1;
		//this.totalPages=null;
		//this.loading=false;
		this.tri = 'title';
		this.order = true;
		this.querySearch=null;
		this.type = DEFAULT_DATA_TYPE.name; 
		this.types = DATA_TYPES; 
		this.size=3;

				this.getData = function(){
				this.loading=true;
					var self = this;
					this.data.length=0;

						console.log(this.id);
			serviceAjax
				.getData(this.type,this.currentPage)
				.then(function(data){
				if(data!=null){
					console.log(self.id);
					console.log(data);
					console.log(self.currentPage);
					self.data=data.results;
				}
				})
					
					
		}
	
		/* fonctions à copmléter à utiliser
		* dans la vue */

		this.search=function(id){
			this.querySearch=id;
		}

		this.sortRate=function(order){
			if(order===true){
								console.log(order);

			}else{
								console.log(order);

			}
		}

		this.sortTitle=function(order){
			if(order===true){
				this.data.sort(function(a,b){
					return a.name < b.name;
				});
			}else{
				this.data.sort(function(a,b){
					return b.name < a.name;
				});
			}
		}

		this.decPage=function(){
			if(this.currentPage>1)
				this.currentPage--;
			
			
			this.getData();
		}

		this.incPage=function(){
			this.currentPage++;
			this.getData();

		}

		/*		this.$watch("page",function(){
		this
			.getMovies(this.page,this.type);
		})*/
		this.changeType = function(type){
				var category = document.getElementById("category");
			var buttons= category.getElementsByTagName("button");
		
			for(var i=0;i<buttons.length;i++){
				console.log(buttons[i].id+" "+type);
				if(buttons[i].id!==type)
					buttons[i].style.backgroundColor="#c65146";
				else
					buttons[i].style.backgroundColor="#4651c6";

			}
			this.currentPage=1;
			this.type=type;
			this.getData();

		}

		this
			.getData();
	})
