
const User = require ('../models/user')

exports.getOneUser = (req,res)=>{
    res.json({user:req.profile})
}


const updateUser = (req,res)=>{
      
}


exports.update =async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(user).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}


