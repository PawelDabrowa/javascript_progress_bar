var article = document.querySelector('article'),
	windowHeight = window.innerHeight,
	articleHeight = article.clientHeight,
	maxScroll = article.clientHeight - winndow.innerHeight;
	progress = document.createElement('progress');

progress.classList.add('articleProgress');
progress.value = 0;
progress.max = maxScroll;

article.appendChild(progress);