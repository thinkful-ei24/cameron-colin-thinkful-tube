const VideoList = (function(){

	const generateVideoItemHtml = function(video) {
  		return `<li data-id = ${video.id}>
    		<h3> ${video.title} </h3>
    		<img src=${video.thumbnail}>
    		</li>`;
	};

	const render = function() {
 		const htmlArray = Store.videos.map(generateVideoItemHtml);
  		$('.results').html(htmlArray);
	};

	const decorateResponse = function(response) {
  		return response.items.map(item => {
    		return {id: item.id.videoId,
      		title: item.snippet.title,
      		thumbnail: item.snippet.thumbnails.default.url
    		}; 
  		});
	};

	const handleFormSubmit = function() {
  		$('#text-submit-form').submit(function(event){
    	event.preventDefault();
    	console.log('working');
    	const searchText = $('#search-term').val();
    	$('#text-submit-form')[0].reset();
    	Api.fetchVideos(searchText, (response) => {
      		Store.addVideosToStore(decorateResponse(response));
      		render();
    });
  });
};

	const bindEventListeners = function () {
		handleFormSubmit();
		console.log('event listers');
	};

	return {
		render,
		bindEventListeners
	}

}());