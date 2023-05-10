const mongoose = require('mongoose');

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
        type: Date,
        required: true,
    },
    userId:{  //each educational diploma is related to only one user
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
    
})

const Education = mongoose.model('Education', educationSchema);
module.exports = Education