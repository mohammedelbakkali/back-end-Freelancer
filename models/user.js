const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // crée la chaine unique 
const crypto = require('node:crypto'); // crypté la chaine 

const UserSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim:true
      },
     username: {
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
      dateOfBirth :
      {
         type : Date,
         required :true
      },
      gender : {
          type : String,
          required :true,
          enum:[ "male" , "female" , "other" ]
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
      },
      description:{
          type:String
      },
      languages:[{  //each user can have 0 or more languages
          type: mongoose.Schema.Types.ObjectId,
          ref:'Language'
      }],
      skills:[{     //each user can have 0 or more skills
          type: mongoose.Schema.Types.ObjectId,
          ref:'Skill'
      }],
      education:[{  //each user can have 0 or more education diplomas
          type: mongoose.Schema.Types.ObjectId,
          ref:'Education'
      }],
      certifications:[{ //each user can have 0 or more certificates
          type: mongoose.Schema.Types.ObjectId,
          ref:'Certification'
      }],
     

    
},  {timestamps: true })

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
        
const User = mongoose.model('User', UserSchema);
module.exports = User;