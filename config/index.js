const dotenv = require("dotenv");

dotenv.config();

const config = {
	port: process.env.PORT,
	db_url: process.env.MONGODB_URI,
	token: process.env.SESSION_TOKEN,
	game: { ticks: Array.from(Array(9).fill(0)), logs: [], player_state: "x" },
};

module.exports = config;
