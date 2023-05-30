const Faq = require('../models/faq');

const addFaq = async (req,res)=>{
        try {
            const faq = await new Faq(req.body);
            const instanceSave = await faq.save();
            res.json(instanceSave).status(200);
            
        }catch(err){
            res.json(err).status(500);
        }
        
}

const getFaq = async (req,res)=>{
            try {
                const faq = await Faq.findById(req.params.id);
                res.json(faq).status(200);
            }catch(err){
                res.json(err).status(500);
            }        
}

const updateFaq = async (req,res)=>{
    try{
        const faq = await Faq.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(faq).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}


module.exports = {
    addFaq,
    getFaq,
    updateFaq
}