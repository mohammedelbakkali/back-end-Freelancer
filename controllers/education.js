const Education = require('../models/education');



const addData =async (req,res)=>{
     try{
        const data = req.body;
        console.log(data);
        const instance =await new Education(data);
        const  dataSave =await instance.save();
        res.send(dataSave).status(200);

     }catch(err){
        res.send(err).status(500);
     }

}

const getAll = async (req,res)=>{
    try{
        const educations= await Education.find({});
        res.json(educations).status(200);
        
    }catch(err){
        res.json(err).status(500);

    }
}

const update = async (req,res)=>{
    try{
        const education = await Education.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(education).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}

const deleteOne = async (req,res)=>{
    try{
        const education = await Education.findByIdAndDelete(req.params.id ,{new:true});
        res.json(education).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}


module.exports = {
    addData,getAll,update,deleteOne
}