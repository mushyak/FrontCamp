export const NewsItemTemplate = {
	createBasicTemplate: function (item) {
		return `<p>
					<a href="${item.url}" class="news-item_link">${item.title}</a>
				</p>
				<p>
					<span class="news-item_date">${new Date(item.publishedAt).toLocaleDateString()}</span>
				</p>`;
	},

	addImage: function (item, template) {
		return `<img class="news-item_pic" src="${item.urlToImage}">${template}`;
	},

	addDescription: function (item, template) {
		const index = template.lastIndexOf("</");
		return `${template.slice(0, index)}<span class="news-item_description"> - ${item.description}</span>${template.slice(index)}`;
	}
};