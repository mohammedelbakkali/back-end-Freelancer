const mongoose = require('mongoose');

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
    user:{  //each skill is related to only one user
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    } //this property is optional to add in the schema
      
})

const Skill = mongoose.model('Skill', skillSchema);
module.exports = Skill