export default class NewsService {
	constructor() {
		const apiKey = "355304c455aa4e2c937207c833db0e4f";
		this.apiKey = apiKey;
	}

	getSources() {
		const url = `https://newsapi.org/v2/sources?language=en&apiKey=${this.apiKey}`;
		return this.request(url).then((data) => data.sources);
	};

	getArticles(source) {
		const url = `https://newsapi.org/v2/everything?q=${source}&language=en&apiKey=${this.apiKey}`;
		return this.request(url).then((data) => data.articles);
	};

	request(url) {
		return fetch(url)
			.then((response) => response.json())
			.catch((error) => {
				alert("Opps! Something went wrong! Sorry :)");
			});
	};

}