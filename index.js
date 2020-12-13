const config = require("./config");

const init = require("./config/inititate");

const dbConnect = require("./config/dbConnect");

dbConnect(config.db_url)
	.then((resolve) => {
		console.log(`*********DB is connected successfully*********`);
		init();
	})
	.catch((err) => {
		console.log(`*********err*********  ${err}`);
	});
