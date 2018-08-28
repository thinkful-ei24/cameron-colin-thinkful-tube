const Store = (function (){

	const videos = [];
	const addVideosToStore = function(videos){
		this.videos = videos;
	}

	return {
		videos,
		addVideosToStore
	}
	
}());