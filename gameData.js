const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'game-data-microservice';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    };

    const db = client.db(databaseName);

    db.collection('games').insertOne({
        _id: new ObjectID('5d49d8933c9293348cd25d58'),
        title: 'Uncharted 4',
        description: 'For the first time ever in Uncharted history, drive vehicles during gameplay',
        by: 'Sony',
        platform: ['PS4'],
        ageRating: '16',
        likes: 100,
        comments: [
            {
                user: 'bob',
                message: 'Cracking game far too much cinematic',
                dateCreated: 1565096191,
                rating: 6
            },
            {
                user: 'testingPriest',
                message: 'Not enough shooting for me,far too easy ',
                dateCreated: 1565096191,
                rating: 5
            }
        ]
    });



    db.collection('games').insertOne({
        _id: new ObjectID('5d49d8933c9293348cd25d59'),
        title: 'Minecraft',
        description: 'Mine, and craft!',
        by: 'Mojang',
        platform: ['PC'],
        ageRating: '3',
        likes: 245,
        comments: [
            {
                user: 'bob',
                message: 'The graphics are terrible',
                dateCreated: 1565096753,
                rating: 1
            },
            {
                user: 'hugh',
                message: 'Superb',
                dateCreated: 1565096346,
                rating: 10
            }
        ]
    });

    db.collection('games').insertOne({
        _id: new ObjectID('5d49d8933c9293348cd25d5a'),
        title: 'Call of Duty, Infinite Warfare',
        description: 'All new Battle Royale mode!',
        by: 'Infinity Ward',
        platform: ['PS4, Xbox 1, PC'],
        ageRating: '18',
        likes: 46,
        comments: [
            {
                user: 'hugh',
                message: 'Single player campaign lacking in depth',
                dateCreated: 1565096123,
                rating: 3
            },
            {
                user: 'testingPriest',
                message: 'Really enjoyed',
                dateCreated: 1565096675,
                rating: 6
            }
        ]
    });

    console.log('Inserted game data');
    
});

