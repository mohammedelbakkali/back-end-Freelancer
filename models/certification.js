const mongoose = require('mongoose');
const User = require('../models/user')

const certificationSchema = mongoose.Schema({
    
    certificate:{
        type: String,
        required: true,
    },
    from:{
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    userId:{  //each certificate is related to only one user
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
    
})

certificationSchema.post('save',async function(){
    let userId=String(this.userId) ;
    await  User.findByIdAndUpdate({_id : userId},{$push :{certifications:this._id}})
    
})

const Certification = mongoose.model('Certification', certificationSchema);
module.exports = Certification