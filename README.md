# game-data-microservice

## Installation

1. Ensure that MongoDB Server is installed and running
2. Run `npm install`
3. Run `node .\gameData.js` and `^c` to exit. This file is responsible for populating the database with games.
4. Start the server with `npm run start`

### Links

- http://localhost:8080/games
- http://localhost:8080/games/<_id>
- http://localhost:8080/report

### Game Id's

- http://localhost:8080/5d49d8933c9293348cd25d58
- http://localhost:8080/5d49d8933c9293348cd25d59
- http://localhost:8080/5d49d8933c9293348cd25d5a

## Changes/Assumptions

- I assumed "The game with the highest sum of likes" to mean "The game with the most likes" since each game exists only once and there is already a field named likes. 
- I interpreted "The average likes per game (rounded up to the nearest integer)" to be "The average score per game (rounded up to the nearest integer)". Calculating an average implies that there is more than one value per game in question. The only place where likes appear multiple times per game is within a comment. Interpreting these as game likes is confusing since the former 'likes' field already serves that purpose. In light of this, the latter 'likes' field is now 'rating' - a score out of 10 from which an average rating can be obtained.
- The report is at localhost:8080/report - due to /games/report clashing with /games/:id
- Game Id's are MongoDB Object Id's.
 

 ## Improvements

 - I managed to extract the epochs from the MongoDB Document and convert them to dates using momentjs, but had difficulty displaying the results.
 - With more time I would have tweaked the `user_with_most_comments` part of the report. It's possible for there to be multiple users sharing the most comments. Of those users I would display the one with the most recent comment.
 - I would also have like to improve the clarity of the report as it lacks some titles.  


 