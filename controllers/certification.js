const Certification = require('../models/certification');



const addData =async (req,res)=>{
     try{
        const data = req.body;
        console.log(data);
        const instance =await new Certification(data);
        const  dataSave =await instance.save();
        res.send(dataSave).status(200);

     }catch(err){
        res.send(err).status(500);
     }

}

const getAll = async (req,res)=>{
    try{
        const certifications= await Certification.find({});
        res.json(certifications).status(200);
        
    }catch(err){
        res.json(err).status(500);

    }
}

const update = async (req,res)=>{
    try{
        const certification = await Certification.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(certification).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}

const deleteOne = async (req,res)=>{
    try{
        const certification = await Certification.findByIdAndDelete(req.params.id ,{new:true});
        res.json(certification).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}


module.exports = {
    addData,getAll,update,deleteOne
}