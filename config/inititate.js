const express = require("express");
const routes = require("../src/routes");
const config = require("./index");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all("/*", (request, response, next) => {
	response.header("Access-Control-Allow-Origin", "*");
	response.header(
		"Access-Control-Allow-Headers",
		"Content-Type, api_key, Authorization, x-requested-with, Total-Count, Total-Pages, Error-Message",
	);
	response.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS");
	response.header("Access-Control-Max-Age", 1800);
	next();
});

app.use(routes);

module.exports = () => {
	app.listen(config.port, () => {
		console.log(`**************Server is running on ${config.port} **************`);
	});
};
