const Pack = require('../models/packs');

const addPack = async (req,res)=>{
        try {
            const pack = await new Pack(req.body);
            const instanceSave = await pack.save();
            res.json(instanceSave).status(200);
            
         }catch(err){
            res.json(err).status(500);
         }
        
}

const getPackById = async (req,res)=>{
            try {
                const pack = await Pack.findById(req.params.id);
                res.json(pack).status(200);
            }catch(err){
                res.json(err).status(500);
            }        
}

const getAllPack= async (req,res)=>{
    try {
        const pack = await Pack.find({});
        res.json(pack).status(200);
    }catch(err){
        res.json(err).status(500);
    }        
}

const updatePack = async (req,res)=>{
    try{
        const pack = await Pack.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(pack).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}

module.exports ={
    addPack,
    getPackById,
    updatePack,
    getAllPack
}