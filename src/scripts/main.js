import NewsApp from "./NewsApp.js";
import css from "../styles/styles.css";

"use strict";

window.onload = function () {
	const app = new NewsApp();

	const button = document.getElementsByClassName("button")[0]; // Behavioral Pattern: Observer
	button.onclick = function () {
		app.loadNewsByClick();
	};

	// window.showNews = function () {
		// import(/* webpackChunkName: "print" */ './print').then(module => {
		// 	var print = module.default;
		// 	print();
		// });
		

	// }
};