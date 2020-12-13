let mongoose = require("mongoose");

module.exports = (URL) => {
	return new Promise((resolve, reject) => {
		mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true }, (err, response) => {
			if (err) reject(err);
			else resolve(null);
		});
	});
};
