// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends.
// ===============================================================================

let friendData = require('../app/data/friends')

module.exports = function (app) {

    //display all friends in the DB
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post('/api/friends', function (req, res) {
        var newFriend = req.body;
        friendData.push(newFriend);
        console.log("Added new Friend to list: " + JSON.stringify(newFriend));

        //set up an array for variables
        let diffTotal = [];
        let newFriendIndex = friendData.length - 1;
        console.log('new friend index ' + newFriendIndex)
        for (i = 0; i < friendData.length - 1; i++) {
            let scoreDiff = 0;
            for (j = 0; j < friendData[i].scores.length; j++) {
                scoreDiff += Math.abs(friendData[i].scores[j] - friendData[newFriendIndex].scores[j]);
            }

            diffTotal.push(parseInt(scoreDiff));
        }
        console.log("least difference", Math.min(...diffTotal))
        let index = diffTotal.indexOf(Math.min(...diffTotal))
        console.log('closest matched: ' + JSON.stringify(friendData[index]))
        res.json(friendData[index]);
    });

}