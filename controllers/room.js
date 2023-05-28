const Room = require('../models/room');

const addRoom =async (req,res)=>{
    try {
        console.log(req.body)
        const data = req.body;
        const newInstance =await new Room(data);
        const dataSave =await newInstance.save();
        res.json(dataSave).status(200)
    }catch(err){
        res.json(err).status(500)
    }
}

const getOneRoom = async (req, res)=>{
     try{
        const data = await Room.findById(req.params.id);
        res.send(data).status(200)

     }catch(err){
        res.send(err).status(500)
     }
}

const getAllRoom = async (req, res)=>{
    try{
       const data = await Room.find({});
       res.send(data).status(200)

    }catch(err){
       res.send(err).status(500)
    }
}

module.exports = {
    addRoom,getOneRoom,getAllRoom
}