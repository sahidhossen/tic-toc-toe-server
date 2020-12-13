const Service = require("../services");

const gameController = {};

gameController.update = async (req, res) => {
	try {
		let game = await Service.Game.getGame();
		if (!game) {
			throw "Game not found!";
		}

		const body = req.body;
		if (body.winner) {
			const player = game.players[body.winner];
			body.players = { ...game.players, [body.winner]: { ...player, wins: player.wins + 1 } };
		}
		body.logs = [body.log, ...game.logs];
		game = await Service.Game.updateGame(body);
		res.json({ success: true, game });
	} catch (e) {
		res.json({ success: false, message: e });
	}
};

gameController.game = async (req, res) => {
	try {
		let game = await Service.Game.getGame();
		if (!game) {
			game = await Service.Game.createGame();
		}
		res.json({ success: true, game });
	} catch (e) {
		res.json({ success: false, message: e });
	}
};

gameController.reset = async (req, res) => {
	try {
		const game = await Service.Game.reset();
		res.json({ success: true, game });
	} catch (e) {
		res.json({ success: false, message: e });
	}
};

module.exports = gameController;
