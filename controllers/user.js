
const User = require ('../models/user')

exports.getOneUser = (req,res)=>{
    res.json({user:req.profile})
}


exports.getUser =async (req,res)=>{
    
        try {
            const user = await User.findById(req.params.id).select({rooms:1, _id:0})
                                               
                                               .populate({
                                                    path:'rooms',
                                                      populate:{
                                                          path:"userRecepteur",
                                                          model:"User",
                                                          select:"fullname _id"
                                                      }

                                               }).populate({
                                                path:'rooms',
                                                  populate:{
                                                      path:"userEmetteur",
                                                      model:"User",
                                                      select:"fullname _id"
                                                  }

                                           })
            // select({rooms:1, _id:0})  
            res.json(user).status(200);
        }catch(err){
            res.json(err).status(500);
        }        

}

exports.getAllUser = async (req,res)=>{
       try{
        const users =await User.find({})
        res.send(users).status(200)

       }catch(err){
        res.send(err).status(500)
       }
}


exports.update =async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.json(user).status(200);
    }catch(err){
        res.json(err).status(500);
    }
}


