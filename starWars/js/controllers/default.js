angular.module('exoStarWars')
	.controller('defaultCtrl', function ( DEFAULT_DATA_TYPE,DATA_TYPES,$routeParams,serviceAjax) {

		this.data=[]
	
		this.currentPage=1;
		//this.totalPages=null;
		//this.loading=false;
		this.id=0;
		this.tri = 'title';
		this.order = true;
		this.querySearch=null;
		this.type = DEFAULT_DATA_TYPE.name; 
		this.types = DATA_TYPES; 

				this.getData = function(){
				this.loading=true;
					var self = this;
					for(var i=1;i<21;i++){
						this.id++;
						console.log(this.id);
			serviceAjax
				.getData(this.type,this.id)
				.then(function(data){
				if(data!=null){
					console.log(self.id);
				console.log(data);
					console.log(self.currentPage);
						self.data[self.data.length]=data;
				}
				})
					}
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
			}else{
								console.log(order);

			}
		}

		this.decPage=function(){
			if(this.currentPage>1)
				this.currentPage--;
			
			this.id-=40;
			this.getData()
		}

		this.incPage=function(){
			this.currentPage++;
			this.getData()

		}

		/*		this.$watch("page",function(){
		this
			.getMovies(this.page,this.type);
		})*/
		this.changeType = function(type){
			this.type=type;
						this.getData()

		}

		this
			.getData();
	})
