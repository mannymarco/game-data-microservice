const express = require('express');
const Game = require('../models/game');
const router = new express.Router();

router.post('/games', async (req, res) => {
    const game = new Game(req.body);
    try {
        await game.save();
        res.status(201).send(game);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/games/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const game = await Game.findById(_id);
        if (!game) {
            return res.status(404).send();
        }
        return res.send(game);
    } catch (e) {
        res.status(500).send();
    }
})

module.exports = router;