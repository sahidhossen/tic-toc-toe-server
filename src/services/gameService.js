const config = require("../../config");
const Model = require("../model");

const gameService = {};

gameService.getGame = async () => {
	const game = await Model.Game.findOne({ status: 1 });
	return game;
};

gameService.createGame = async () => {
	const game = await Model.Game.create({ status: 1, logs: ["Game Started"] });
	return game;
};

gameService.updateGame = async (body) => {
	const game = await gameService.getGame();
	if (!game) throw "Game not found";
	Object.assign(game, body);
	(await game).save();
	return game;
};

gameService.reset = async (body = {}) => {
	const game = await gameService.getGame();
	if (game) {
		Object.assign(game, config.game, body);
		await game.save();
	}
	return game;
};

module.exports = gameService;
