const express = require('express');
require('./db/mongoose');
const gameRouter = require('./routes/game');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(gameRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});
