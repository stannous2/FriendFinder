// ===============================================================================
// DATA
// Below data will hold all of friends.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================


let friends = [{
        "name": 'John',
        'photo': 'https://i.eurosport.com/2015/10/10/1708800-36174403-2560-1440.jpg?w=700',
        'scores': [5, 1, 2, 3, 4, 5, 3, 5, 4, 5]
    },
    {
        "name": 'Mike',
        'photo': 'https://s.yimg.com/ny/api/res/1.2/XSdBjdHwgmdLuG1UYClivQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAwO2lsPXBsYW5l/https://media.zenfs.com/creatr-images/GLB/2018-07-20/f3b4e1c0-8c20-11e8-bc15-d97653969cae_mbappe-4.jpg',
        'scores': [5, 4, 4, 3, 4, 5, 3, 5, 4, 5]
    },
    {
        "name": 'Solo',
        'photo': 'http://www.trbimg.com/img-56cc93a4/turbine/redeye-the-7-highest-paid-womens-soccer-players-20160223',
        'scores': [5, 2, 1, 3, 4, 2, 4, 5, 5, 5]
    },
    {
        "name": 'Shasa',
        'photo': 'https://imgc.allpostersimages.com/img/posters/liverpool-salah-17-18_u-L-F959V60.jpg?src=gp&w=300&h=375',
        'scores': [5, 3, 2, 3, 4, 5, 3, 5, 4, 5]
    },
    {
        "name": 'Zane',
        'photo': 'https://assets.vogue.com/photos/5b212987f90cc35fe4d59610/master/pass/01-story-world-cup-soccer-players-to-watch.jpg',
        'scores': [5, 1, 5, 5, 1, 2, 4, 1, 2, 4]
    },
    {
        "name": "brandon",
        "photo": "https://www.denverpost.com/wp-content/uploads/2017/04/sebastian-giovinco.jpg?w=563",
        "scores": [5, 3, 1, 1, 2, 5, 2, 4, 3, 5 ]
    }
]

module.exports = friends;

// console.log ('friends.lenth', friends.length)

// function findMatch() {
//     //set up an array for variables
//     let diffTotal = [];
//     let newFriendIndex = friends.length - 1;
//     console.log('new friend index ' + newFriendIndex)
//     for (i = 0; i < friends.length - 1; i++) {
//         let scoreDiff = 0;
//         for (j = 0; j < friends[i].scores.length; j++) {
//             scoreDiff += Math.abs(friends[i].scores[j] - friends[newFriendIndex].scores[j]);
//         }

//         diffTotal.push(parseInt(scoreDiff));
//     }
//     console.log("least difference", Math.min(...diffTotal))
//     let index = diffTotal.indexOf(Math.min(...diffTotal))
//     console.log('closest matched: ' + JSON.stringify(friends[index]))
//     return friends[index]
// }