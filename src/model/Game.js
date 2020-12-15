const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const game_Schema = new Schema({
	ticks: {
		type: Array,
		required: true,
		default: [0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	player_state: {
		type: String,
		default: "x",
	},
	players: {
		type: Schema.Types.Mixed,
		default: { x: { name: "X", wins: 0 }, o: { name: "O", wins: 0 } },
	},
	logs: {
		type: Array,
		default: [],
	},
	status: {
		type: Number,
		default: 0,
	},
});

module.exports = mongoose.model("Game", game_Schema);
