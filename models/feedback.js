const mongoose = require('mongoose');


const feedbackSchema = mongoose.Schema({
        author: {
            type: mongoose.Schema.Types.String, 
            ref: 'user'
        },
        rating: {
            type: Number, 
            min: 1.0, 
            max: 5.0
        },
        comment : {
            type : String,
            required : true,
            minlength : 5,
            maxlenght: 300
        },
        date:{
            type: Date,
            default: Date.now()
        }
},  { timestamps: true });

const Feedback = mongoose.model('Feedback',postSchema);

module.exports = Feedback;