/* global Store, $, Api */
'use strict';
const VideoList = (function(){

	const generateVideoItemHtml = function(video) {
			return `<li data-id = ${video.id}>
				<div class = "search-result">
    		<h3> ${video.title} </h3>
				<a href=${video.url} target = 'blank'><img src=${video.thumbnail}></a>
				</div>
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
					thumbnail: item.snippet.thumbnails.default.url,
					url: `https://www.youtube.com/watch?v=${item.id.videoId}`
    		}; 
  		});
	};

	const handleFormSubmit = function() {
  		$('#text-submit-form').submit(function(event){
    	event.preventDefault();
			const searchText = $('#search-term').val();
    	$('#text-submit-form')[0].reset();
    	Api.fetchVideos(searchText, (response) => {
					$('.results').attr('aria-hidden', false);
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