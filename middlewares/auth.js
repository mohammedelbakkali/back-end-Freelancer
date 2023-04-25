var { expressjwt: jwt } = require("express-jwt");  
require('dotenv').config();

const requireSignIn = jwt({ secret :process.env.JWT_SECRET, algorithms:["HS256"] , userProperty:'auth'});

const isAuth = (req ,res , next)=>{
       if(req.auth.role == 1){
           next();
       }else {
          let user = req.profile && req.auth && (req.profile._id == req.auth._id);
          if(!user){
            return res.status(400).json({error : "Access Denied"})
          }
          next();
       }
}

module.exports = {requireSignIn , isAuth }