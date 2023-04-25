const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // crée la chaine unique 
const crypto = require('node:crypto'); // crypté la chaine 


const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
      },
      email: {
        type: String,
        required: true,
        unique: true ,
        trim:true
      },
      hashed_password :{
          type:String,
      },
      salt : {
        type:String
      },
      role:{
        type:Number,
        enum:[ 0 , 1 , 2 ],
        default:0
      }
    
})

UserSchema.virtual('password')
        .set(function(password){
             this._password=password;
             this.salt = uuidv4(); // crée la chaine unique d'utilisateur 
            this.hashed_password=this.cryptPassword(password);
          })

UserSchema.methods ={ 

  authenticate : function(plainText) {
    
    return this.cryptPassword(plainText) == this.hashed_password;
    
  },

    cryptPassword : function(password){
                if(!password){
                     return ""
                }
                try{
                    return  crypto.createHmac('sha256',this.salt).update(password).digest('hex');
                }catch(exception){
                   res.send(exception);
                }
        
            }
        
        }
        
module.exports = mongoose.model('user', UserSchema);