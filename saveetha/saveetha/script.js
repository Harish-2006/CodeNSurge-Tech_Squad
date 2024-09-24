const apiKey = '24917f9ad5614a689a833ae84eb360ba'; // Replace with your NewsAPI.org API key

async function fetchNews(category) {
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        displayNews(data.articles);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

// Fetch business news on initial load
fetchNews('business');

function displayNews(articles) {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = '';

    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('col-md-4', 'mb-4');
        articleElement.innerHTML = `
            <div class="card h-100">
                <img src="${article.urlToImage || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${article.title}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description || 'No description available.'}</p>
                    <div class="mt-auto">
                        <a href="${article.url}" target="_blank" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        `;
        articlesContainer.appendChild(articleElement);
    });
}
