const Feedback = require('../models/feedback');

const addFeedback = async (req,res)=>{
        try {
            const fb = await new Feedback(req.body);
            const instanceSave = await fb.save();
            res.json(instanceSave).status(200);
            
         }catch(err){
            res.json(err).status(500);
         }
        
}

const getFeedbacks = async (req,res)=>{
            try {
                const fb = await Feedback.find();
                res.json(fb).status(200);
            }catch(err){
                res.json(err).status(500);
            }        
}
const deleteFeedback = async (req,res)=>{
    try{
        const fb = await Feedback.findByIdAndDelete(req.params.id ,{new:true});
        res.json(fb).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}

module.exports ={
    addFeedback,
    getFeedbacks,
    deleteFeedback
}