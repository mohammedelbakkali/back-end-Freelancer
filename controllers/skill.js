const Skill = require('../models/skill');



const addData =async (req,res)=>{
     try{
        const data = req.body;
        console.log(data);
        const instance =await new Skill(data);
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

const update = async (req,res)=>{
    try{
        const skill = await Skill.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(skill).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}

const deleteOne = async (req,res)=>{
    try{
        const skill = await Skill.findByIdAndDelete(req.params.id ,{new:true});
        res.json(skill).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}


module.exports = {
    addData,getAll,update,deleteOne
}