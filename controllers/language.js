const Language = require('../models/language');



const addData =async (req,res)=>{
     try{
        const data = req.body;
        console.log(data);
        const instance =await new Language(data);
        const  dataSave =await instance.save();
        res.send(dataSave).status(200);

     }catch(err){
        res.send(err).status(500);
     }

}

const getAll = async (req,res)=>{
    try{
        const languages= await Language.find({});
        res.json(languages).status(200);
        
    }catch(err){
        res.json(err).status(500);

    }
}

const update = async (req,res)=>{
    try{
        const language = await Language.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(language).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}

const deleteOne = async (req,res)=>{
    try{
        const language = await Language.findByIdAndDelete(req.params.id ,{new:true});
        res.json(language).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}


module.exports = {
    addData,getAll,update,deleteOne
}