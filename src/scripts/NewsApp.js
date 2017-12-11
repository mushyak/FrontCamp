import NewsService from "./NewsService.js";

export default class NewsApp {
	constructor() {
		this.sevice = new NewsService();
		this.loadSources();
	}

	loadSources() {
		this.sevice.getSources().then((data) => {
			const sourceContainer = document.getElementsByClassName("sources-list")[0];

			data.forEach((item, index) => {
				sourceContainer.appendChild(this.createSourceItem(item, index));
			});

			let [{id: firstSelection}] = data;
			this.loadNews(firstSelection);
		});
	}

	selectSource(e) {
		if (e.target.attributes["data-code"]) {
			this.clearSourceSelection();
			this.clearNewsContainer();

			const sourceId = e.target.attributes["data-code"].value;
			e.currentTarget.classList.add("selected");
			this.loadNews(sourceId);
		}
	}

	clearNewsContainer() {
		const newsContainer = document.getElementsByClassName("news")[0];
		while (newsContainer.firstChild) {
			newsContainer.removeChild(newsContainer.firstChild);
		}
	}

	clearSourceSelection() {
		const selected = document.getElementsByClassName("selected")[0];
		if (selected) {
			selected.classList.remove("selected");
		}
	}

	loadNews(source = "abc-news") {
		this.sevice.getArticles(source).then((data) => {
			const newsContainer = document.getElementsByClassName("news")[0];

			data.forEach((item) => {
				if (item.title && item.url && item.publishedAt) {
					newsContainer.appendChild(this.createNewsItem(item));
				}
			});
		});
	}

	createNewsItem(item) {
		const container = document.createElement("div");
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
		const li = document.createElement("li");
		li.classList.add("source-item");
		if (index == 0) {
			li.classList.add("selected");
		}

		li.innerHTML = `<a data-code="${item.id}">${item.name}</a>`;
		li.addEventListener("click", this.selectSource.bind(this));
		return li;
	}
}