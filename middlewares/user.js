const User = require('../models/user');

const ObjectId = require('mongodb').ObjectId;


const getUserById = async (req,res,next,_id)=>{
   try{
    const id = new ObjectId(_id);
    const user = await User.findById(id);
    
    if(!user){
        return res.status(400).json({message :"user not found !"})  
    }else{

        req.profile = user;
        next();
    }

     
   }catch(err){
     res.send(err).status(500);
   }

}

module.exports = {
    getUserById
}