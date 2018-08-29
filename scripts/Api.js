/* global $ */
'use strict';

const Api = (function() {
	
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
	
  const API_KEY = 'AIzaSyA9QsK_9K1SrVueoOn01HYI5VWwPaAG-4M';
	
  const fetchVideos = function(searchTerm, callback) {
    const query = {
      part: 'snippet',
      key: API_KEY,
      q: searchTerm
    };
    $.getJSON(BASE_URL, query, callback);
  };
	
  return {
    fetchVideos,
  };
	
	
}());