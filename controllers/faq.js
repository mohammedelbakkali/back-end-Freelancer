const Faq = require('../models/faq');

const addFaq = async (req,res)=>{
        try {
            const faq = await new Faq(req.body);
            const instanceSave = await post.save();
            res.json(instanceSave).status(200);
            
        }catch(err){
            res.json(err).status(500);
        }
        
}

const getFaq = async (req,res)=>{
            try {
                const post = await Post.findById(req.params.id);
                res.json(post).status(200);
            }catch(err){
                res.json(err).status(500);
            }        
}

const updateFaq = async (req,res)=>{
    try{
        const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(post).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}


module.exports = {
    addFaq,
    getOneById,
    update,
    deleteOne
}