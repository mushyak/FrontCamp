import NewsService from "./NewsService.js";
import { NewsItemTemplate } from "./NewsItemTemplate.js";

export default class NewsApp {
	constructor() {
		this.sevice = new NewsService();
		this.newsItemTemplate = Object.assign({}, NewsItemTemplate); // Creational Pattern: Prototype

		this.loadSources();
		this.selectedSource = "";
	}

	// Behavioral Pattern: Command - public methods
	loadSources() {
		this.sevice.getSources().then((data) => {
			const sourceContainer = document.getElementsByClassName("sources-list")[0];

			data.forEach((item, index) => {
				sourceContainer.appendChild(this._createSourceItem(item, index));
			});

			let [{id: firstSelection}] = data;
			this.selectedSource = firstSelection;
		});
	}

	loadNewsByClick() {
		this.loadNews(this.selectedSource);
	}

	loadNews(source = "abc-news") {
		this.sevice.getArticles(source).then((data) => {
			const newsContainer = document.getElementsByClassName("news")[0];

			data.forEach((item) => {
				if (item.title && item.url && item.publishedAt) {
					newsContainer.appendChild(this._createNewsItem(item));
				}
			});
		});
	}

	// pseudo private methods

	_selectSource(e) {
		if (e.target.attributes["data-code"]) {
			this._clearSourceSelection();
			this._clearNewsContainer();

			const sourceId = e.target.attributes["data-code"].value;
			e.currentTarget.classList.add("selected");
			this.selectedSource = sourceId;
		}
	}

	_clearNewsContainer() {
		const newsContainer = document.getElementsByClassName("news")[0];
		while (newsContainer.firstChild) {
			newsContainer.removeChild(newsContainer.firstChild);
		}
	}

	_clearSourceSelection() {
		const selected = document.getElementsByClassName("selected")[0];
		if (selected) {
			selected.classList.remove("selected");
		}
	}

	_createNewsItem(item) {
		const container = document.createElement("div");
		container.classList.add("news-item");
		let content = this.newsItemTemplate.createBasicTemplate(item);

		if (item.urlToImage) {
			content = this.newsItemTemplate.addImage(item, content);	// Structural Pattern: Decorator
		}
		if (item.description) {
			content = this.newsItemTemplate.addDescription(item, content);
		}

		container.innerHTML = content;
		return container;
	}

	_createSourceItem(item, index) {
		const li = document.createElement("li");
		li.classList.add("source-item");
		if (index == 0) {
			li.classList.add("selected");
		}

		li.innerHTML = `<a data-code="${item.id}">${item.name}</a>`;
		li.addEventListener("click", this._selectSource.bind(this));
		return li;
	}
}