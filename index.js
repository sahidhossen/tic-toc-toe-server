const config = require("./config");

const app = require("./app");

const dbConnect = require("./config/dbConnect");

dbConnect(config.db_url)
	.then((resolve) => {
		console.log(`*********DB is connected successfully*********`);
		app.listen(config.port, () => {
			console.log(`**************Server is running on ${config.port} **************`);
		});
	})
	.catch((err) => {
		console.log(`*********err*********  ${err}`);
	});
