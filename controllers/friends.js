const friends = require('../models/friends');

const addfriends =async (req,res)=>{
    try {
        const data = req.body;
        const newInstance =await new friends(data);
        const dataSave =await newInstance.save();
        res.json(dataSave).status(200)
    }catch(err){
        res.json(err).status(500)
    }
}


const getAllfriends = async (req, res)=>{
    try{
       const data = await friends.find({});
       res.send(data).status(200)

    }catch(err){
       res.send(err).status(500)
    }
}



module.exports = {
    addfriends,getAllfriends
}