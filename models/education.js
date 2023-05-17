const mongoose = require('mongoose');
const User = require('../models/user')

const educationSchema = mongoose.Schema({

    country:{
        type: String,
        required: true,
    },
    college:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        enum: ["baccalaureate","deust","licence","master","doctorat"],
        required: true,
    },
    major: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    userId:{  //each educational diploma is related to only one user
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
    
})

educationSchema.post('save',async function(){
    let userId=String(this.userId) ;
    await  User.findByIdAndUpdate({_id : userId},{$push :{education:this._id}})
    
})

const Education = mongoose.model('Education', educationSchema);
module.exports = Education

