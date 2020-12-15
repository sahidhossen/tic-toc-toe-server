const mongoose = require("mongoose");

const dbHandler = require("./db-handler");
const gameService = require("../src/services/gameService");

const newGame = {
	ticks: Array.from(Array(9).fill(0)),
	logs: ["Start Game"],
	player_state: "x",
	players: { o: { name: "O", wins: 0 }, x: { name: "X", wins: 0 } },
};

const updateData = {
	ticks: [0, "x", 0, 0, 0, 0, 0, 0, 0],
	player_state: "o",
	logs: ["Start Game", "O Turn"],
};

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await dbHandler.connect());

/**
 * Clear all test data after every test.
 */
// afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => {
	await dbHandler.clearDatabase();
	await dbHandler.closeDatabase();
});

describe("Game Service Test", () => {
	it("Create game successfully", async () => {
		const game = await gameService.createGame();
		expect(game._id).toBeDefined();
		expect(game.ticks).toEqual(expect.arrayContaining(newGame.ticks));
		expect(game.player_state).toBe(newGame.player_state);
		expect(game.players).toMatchObject(newGame.players);
		expect(game.logs).toEqual(expect.arrayContaining(newGame.logs));
	});

	it("Update game", async () => {
		const game = await gameService.updateGame(updateData);
		expect(game.ticks).toEqual(expect.arrayContaining(updateData.ticks));
		expect(game.player_state).toBe(updateData.player_state);
		expect(game.logs).toEqual(expect.arrayContaining(updateData.logs));
	});

	it("Update reset", async () => {
		const game = await gameService.reset();
		expect(game.ticks).toEqual(expect.arrayContaining(newGame.ticks));
		expect(game.player_state).toBe(newGame.player_state);
		expect(game.logs).toEqual(expect.arrayContaining([]));
	});
});
