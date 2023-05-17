const mongoose = require('mongoose');
const User = require('../models/user')

const skillSchema = mongoose.Schema({
   
    name: {
        type: String,
        required: true,
    },
    level:{
        type: String,
        enum :["beginner", "intermediate", "expert"],
        required: true
    },
    userId:{  //each skill is related to only one user
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    } //this property is optional to add in the schema
    
})

skillSchema.post('save',async function(){
    let userId=String(this.userId);
    await  User.findByIdAndUpdate({_id : userId},{$push :{skills:this._id}})
})

const Skill = mongoose.model('Skill', skillSchema);
module.exports = Skill