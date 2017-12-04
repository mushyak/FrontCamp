"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onload = function () {
	var app = new NewsApp();
};

var NewsApp = function () {
	function NewsApp() {
		_classCallCheck(this, NewsApp);

		this.sevice = new NewsService();
		this.loadSources();
	}

	_createClass(NewsApp, [{
		key: "loadSources",
		value: function loadSources() {
			var _this = this;

			this.sevice.getSources().then(function (data) {
				var sourceContainer = document.getElementsByClassName("sources-list")[0];

				data.forEach(function (item, index) {
					sourceContainer.appendChild(_this.createSourceItem(item, index));
				});

				var _data = _slicedToArray(data, 1),
				    firstSelection = _data[0].id;

				_this.loadNews(firstSelection);
			});
		}
	}, {
		key: "selectSource",
		value: function selectSource(e) {
			if (e.target.attributes["data-code"]) {
				this.clearSourceSelection();
				this.clearNewsContainer();

				var sourceId = e.target.attributes["data-code"].value;
				e.currentTarget.classList.add("selected");
				this.loadNews(sourceId);
			}
		}
	}, {
		key: "clearNewsContainer",
		value: function clearNewsContainer() {
			var newsContainer = document.getElementsByClassName("news")[0];
			while (newsContainer.firstChild) {
				newsContainer.removeChild(newsContainer.firstChild);
			}
		}
	}, {
		key: "clearSourceSelection",
		value: function clearSourceSelection() {
			var selected = document.getElementsByClassName("selected")[0];
			if (selected) {
				selected.classList.remove("selected");
			}
		}
	}, {
		key: "loadNews",
		value: function loadNews() {
			var _this2 = this;

			var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "abc-news";

			this.sevice.getArticles(source).then(function (data) {
				var newsContainer = document.getElementsByClassName("news")[0];

				data.forEach(function (item) {
					if (item.title && item.url && item.publishedAt) {
						newsContainer.appendChild(_this2.createNewsItem(item));
					}
				});
			});
		}
	}, {
		key: "createNewsItem",
		value: function createNewsItem(item) {
			var container = document.createElement("div");
			container.classList.add("news-item");
			var content = "";
			if (item.urlToImage) {
				content = "<img class=\"news-item_pic\" src=\"" + item.urlToImage + "\">";
			}
			content += "<p>\n\t\t\t\t\t\t<a href=\"" + item.url + "\" class=\"news-item_link\">" + item.title + "</a>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t<span class=\"news-item_date\">" + new Date(item.publishedAt).toLocaleDateString() + "</span>";
			if (item.description) {
				content += "<span class=\"news-item_description\"> - " + item.description + "</span>";
			}
			content += "</p>";
			container.innerHTML = content;
			return container;
		}
	}, {
		key: "createSourceItem",
		value: function createSourceItem(item, index) {
			var li = document.createElement("li");
			li.classList.add("source-item");
			if (index == 0) {
				li.classList.add("selected");
			}

			li.innerHTML = "<a data-code=\"" + item.id + "\">" + item.name + "</a>";
			li.addEventListener("click", this.selectSource.bind(this));
			return li;
		}
	}]);

	return NewsApp;
}();

;

var NewsService = function () {
	function NewsService() {
		_classCallCheck(this, NewsService);

		var apiKey = "355304c455aa4e2c937207c833db0e4f";
		this.apiKey = apiKey;
	}

	_createClass(NewsService, [{
		key: "getSources",
		value: function getSources() {
			var url = "https://newsapi.org/v2/sources?language=en&apiKey=" + this.apiKey;
			return this.request(url).then(function (data) {
				return data.sources;
			});
		}
	}, {
		key: "getArticles",
		value: function getArticles(source) {
			var url = "https://newsapi.org/v2/everything?q=" + source + "&language=en&apiKey=" + this.apiKey;
			return this.request(url).then(function (data) {
				return data.articles;
			});
		}
	}, {
		key: "request",
		value: function request(url) {
			return fetch(url).then(function (response) {
				return response.json();
			}).catch(function (error) {
				alert("Opps! Something went wrong! Sorry :)");
			});
		}
	}]);

	return NewsService;
}();

;