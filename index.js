const config = require("./config");

const app = require("./app");

const dbConnect = require("./config/dbConnect");

app.listen(config.port, () => {
	console.log(`**************Server is running on ${config.port} **************`);

	dbConnect(config.db_url)
		.then((resolve) => {
			console.log(`*********DB is connected successfully*********`);
		})
		.catch((err) => {
			console.log(`*********err*********  ${err} ${config.db_url}`);
		});
});
