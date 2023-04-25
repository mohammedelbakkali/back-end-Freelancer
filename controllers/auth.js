const User = require('../models/user')
const jsonWebToken = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();

const signUp = async (req,res)=>{
      try{
      
        const dataModel = await new User(req.body);
        console.log(dataModel)
        const instance  = await dataModel.save();
        res.status(200).json({"instance":instance});
      }catch(exception){
        res.json(exception).status(400);
      }
}


 const sigIn = async (req, res)=>{
       const {email , password} = req.body;
       const user = await User.findOne({email});
       if(!user){
             res.status(404).json({
             error : "email n'exite pas !"
           })
       }else {
           if(!user.authenticate(password)){
            res.status(400).json({
              error : "le mots de passe incorrect !"
           })
  
           }else {
             const token = jsonWebToken.sign({_id:user._id , role : user.role} ,process.env.JWT_SECRET );
             res.cookie('token',token,{expire:new Date +100000});
             return res.json({ token , user:{_id:user._id,email:user.email,name:user.email}})

           }
       }
 }

 const signout = (req,res)=>{
  console.log("hellooo")
  res.clearCookie('token');
  res.json({message : "user signout !"})
}

module.exports = {
    signUp,
    sigIn,
    signout

}