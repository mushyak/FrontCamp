"use strict";

window.onload = function () {
	let app = new NewsApp();
};

class NewsApp {
	constructor() {
		this.sevice = new NewsService();
		this.loadSources();
	}

	loadSources() {
		this.sevice.getSources().then((data) => {
			let sourceContainer = document.getElementsByClassName("sources-list")[0];

			data.forEach((item, index) => {
				sourceContainer.append(this.createSourceItem(item, index));
			});

			let [{id: firstSelection}] = data;
			this.loadNews(firstSelection);
		});
	}

	selectSource(e) {
		if (e.target.attributes["data-code"]) {
			this.clearSourceSelection();
			this.clearNewsContainer();

			let sourceId = e.target.attributes["data-code"].value;
			e.currentTarget.classList.add("selected");
			this.loadNews(sourceId);
		}
	}

	clearNewsContainer() {
		let newsContainer = document.getElementsByClassName("news")[0];
		while (newsContainer.firstChild) {
			newsContainer.removeChild(newsContainer.firstChild);
		}
	}

	clearSourceSelection() {
		let selected = document.getElementsByClassName("selected")[0];
		if (selected) {
			selected.classList.remove("selected");
		}
	}

	loadNews(source = "abc-news") {
		this.sevice.getArticles(source).then((data) => {
			let newsContainer = document.getElementsByClassName("news")[0];

			data.forEach((item) => {
				if (item.title && item.url && item.publishedAt) {
					newsContainer.append(this.createNewsItem(item));
				}
			});
		});
	}

	createNewsItem(item) {
		let container = document.createElement("div");
		container.classList.add("news-item");
		let content = "";
		if (item.urlToImage) {
			content = `<img class="news-item_pic" src="${item.urlToImage}">`
		}
		content += `<p>
						<a href="${item.url}" class="news-item_link">${item.title}</a>
					</p>
					<p>
					<span class="news-item_date">${new Date(item.publishedAt).toLocaleDateString()}</span>`;
		if (item.description) {
			content += `<span class="news-item_description"> - ${item.description}</span>`;
		}
		content += "</p>";
		container.innerHTML = content;
		return container;
	}

	createSourceItem(item, index) {
		let li = document.createElement("li");
		li.classList.add("source-item");
		if (index == 0) {
			li.classList.add("selected");
		}

		li.innerHTML = `<a data-code="${item.id}">${item.name}</a>`;
		li.addEventListener("click", this.selectSource.bind(this));
		return li;
	}
};


class NewsService {
	constructor() {
		const apiKey = "355304c455aa4e2c937207c833db0e4f";
		this.apiKey = apiKey;
	}

	getSources() {
		let url = `https://newsapi.org/v2/sources?language=en&apiKey=${this.apiKey}`;
		return this.request(url).then((data) => data.sources);
	};

	getArticles(source) {
		let url = `https://newsapi.org/v2/everything?q=${source}&language=en&apiKey=${this.apiKey}`;
		return this.request(url).then((data) => data.articles);
	};

	request(url) {
		return fetch(url)
			.then((response) => response.json())
			.catch((error) => {
				alert("Opps! Something went wrong! Sorry :)");
			});
	};

};