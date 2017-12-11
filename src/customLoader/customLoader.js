module.exports = function customLoader (source) {
	source = JSON.parse(source);

	for (let key in source) {
		if (!Number.isNaN(Number(key))) {
			delete source[key];
		}
	}

	return JSON.stringify(source);
};