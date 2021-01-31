function getArticleGenerator(articles) {
    let next = 0;

    let div = document.getElementById('content');

    function showMore () {
        if (next < articles.length) {
            let article = document.createElement('article');
            article.textContent = articles[next];
            div.appendChild(article);
            next++;
        }
    }

    return showMore;
}
