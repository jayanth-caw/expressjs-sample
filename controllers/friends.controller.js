const model=require('../models/friends.model')

function postFriend(req,res){
    if(!req.body.name){
       return res.status(400).json({error:'missing name'})
    }
    const newF={
        name:req.body.name,
        id:model.length
    }
    
    model.push(newF)
    res.json(newF)
}
function getFriends(req,res){
    res.json(model)
}
function getFriend(req,res){
    const numm=Number(req.params.numm);
    const friend=model[numm];
    if(friend){
        res.status(200).json(friend);
    }
    else{
        res.status(404).json({
            error:"not found"

        })
    }
}


module.exports={
    postFriend,getFriend,getFriends
}