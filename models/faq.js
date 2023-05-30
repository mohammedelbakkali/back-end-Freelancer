const mongoose = require('mongoose');
const Post = require('../models/post')

const faqSchema = mongoose.Schema({
    question : {
        type : String,
      
    },
    response : {
        type : String,

    },
    postId:{  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    },
}, { timestamps: true });

faqSchema.post("save" ,async function(){
    
    var  postId = String(this.postId);

    const a =  await  Post.findByIdAndUpdate({_id : postId } , { $push: {Faqs: this._id }} )      
 
    
});

const Faq = mongoose.model('Faq',faqSchema);

module.exports = Faq;