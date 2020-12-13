const express = require("express");
const router = express.Router();
const gameController = require("../controller/gameController");

router.get("/api/game", gameController.game);
router.get("/api/game/reset", gameController.reset);
router.post("/api/game/update", gameController.update);

module.exports = router;
