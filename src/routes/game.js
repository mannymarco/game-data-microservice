const express = require('express');
const moment = require('moment');
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

router.get('/games', async (req, res) => {
    try {
        const games = await Game.find({});
        res.send(games);
    } catch (e) {
        res.status(500).send(e);
    }
})


router.get('/report', async (req, res) => {
    try {

        // The user with the most comments
        const topCommentsReport = await Game.aggregate([
            
            { $unwind: "$comments" }, 
            { $sortByCount: "$comments.user" },
            { $limit: 1},
            { $project: { "_id": 0, "user_with_most_comments": "$_id" }}
            
        ])

        // The game with the most likes
        const mostLikesReport = await Game.find({}, { _id: 0, title: "highest_rated_game"}).sort({ "likes": -1 }).limit(1);
        // The average rating of each game
        const averageRatingReport = await Game.aggregate([
            { $project: { _id : 0, "title": 1, avgRating: { $avg: "$comments.rating" }}},
            { $project: { _id: 0, "title": 1, roundedAvg: { $ceil: '$avgRating' }}}
        ]);

        res.send([topCommentsReport, mostLikesReport, averageRatingReport]);

    } catch (e) {
        res.status(500).send(e);
    }
})


module.exports = router;