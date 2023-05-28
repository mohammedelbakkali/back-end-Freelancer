const Stars = require('../models/stars')

const addData =async (req,res)=>{
    try{
       const data = req.body;
       console.log(data);
       const instance =await new Stars(data);
       const  dataSave =await instance.save();
       res.send(dataSave).status(200);

    }catch(err){
       res.send(err).status(500);
    }
}

const getAll = async (req,res)=>{
    try{
        const skills= await Skill.find({});
        res.json(skills).status(200);
        
    }catch(err){
        res.json(err).status(500);

    }
}

module.exports = {
    addData,getAll
}