const mongoose = require('mongoose');

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
        type: Date,
        required: true,
    },
    userId:{  //each certificate is related to only one user
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
    
})

const Certification = mongoose.model('Certification', certificationSchema);
module.exports = Certification