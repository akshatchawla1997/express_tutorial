const friends = require('../models/friends.models')
const getFriends = ((req,res)=>{
    res.json(friends);
})
const getFriendsById = (req,res)=>{
    const friendId = +req.params.id;
    const friend = friends.friendId;
    (friend)?res.status(200).json(friend):res.status(404).json({
        error:"friend does not exist"
    });
}
const postFriends = (req,res)=>{
    if(!req.body.name){
            res.status(400).json({
            error:"missing the values please check"
    })
}
else{
    const newFriends = {
            name:req.body.name,
            id:friends.length+1
        }
        friends.push(newFriends);
        res.json(newFriends)
}
}

module.exports ={
    getFriends,
    getFriendsById,
    postFriends
}