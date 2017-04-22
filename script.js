

var article = document.querySelector('article'),
	windowHeight = window.innerHeight,
	articleHeight = article.clientHeight,
	maxScroll = article.clientHeight - winndow.innerHeight;
	progress = document.createElement('progress');

progress.classList.add('articleProgress');
progress.value = 0;
progress.max = maxScroll;

article.appendChild(progress);

var calculateProgress = function(){
	progress.value = window.scrolly;
};

var throttle = function(callback, limit){
	var wait = false;
	return function(){
		if(!wait){
			callback;
			wait = true;
			setTimeout(function(){
				wait = false;
				}, limit);
			};
		};	
	};
		
window.addEventListener('scroll', throttle(calculateProgress, 200));
consol