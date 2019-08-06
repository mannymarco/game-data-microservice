const express = require('express');
const Game = require('../models/game');
const router = new express.Router();

function getNextSequence(name) {
    var ret = db.counters.findAndModify(
        {
            query: { _id: name },
            update: { $inc: { seq: 1 } },
            new: true
        }
    );

    return ret.seq;
}

router.post('/games', async (req, res) => {
    const game = new Game(req.body);
    try {
        await game.save();
        res.status(201).send(game);
    } catch (e) {
        res.status(400).send(e);
    }
});



// router.get('/games/:id', async (req, res) => {
//     const _id = req.params.id;
//     try {
//         const game = await Game.findById(_id);
//         if (!game) {
//             return res.status(404).send();
//         }
//         return res.send(game);
//     } catch (e) {
//         res.status(500).send();
//     }
// })

router.get('/games', async (req, res) => {
    try {
        const games = await Game.find({});
        res.send(games);
    } catch (e) {
        res.status(500).send(e);
    }
})


router.get('/games/report', async (req, res) => {
    try {
        // The game with the highest sum of likes

        const report = await Game.aggregate([
            { $project: { "comments.user": 1, _id: 0 }},
            { $unwind: "$comments"}, { $sortByCount: "$comments.user" }
        ])

       


        res.send([report]);
    } catch (e) {
        console.log('fuck sake', e)
        res.status(500).send(e);

    }
})


module.exports = router;