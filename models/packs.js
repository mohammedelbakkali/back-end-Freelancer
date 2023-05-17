const mongoose = require('mongoose');
const Post = require('../models/post')

const packsSchema = mongoose.Schema({
        type : {
          type : String,
          required : true,
          enum : ['basic','standard','premium']
        },
        name : {
            type : String,
            required : true
        },
        description : {
            type  :String,
            required : true,
            minlength :10,
            maxlength : 200,  
        },
        deliveryTime : {
            type : Date,
          
            min : 1
        },
        price : {
            type : Number,
            required : true,
            min : 1
        },

        postId:  

        {  
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
           
        }
}, { timestamps: true });

packsSchema.post('save',async function(){
      const idPost = String(this.postId);
      await Post.findByIdAndUpdate({_id : idPost } , { $push : { packId : this._id }})
})

const Pack = mongoose.model('Pack',packsSchema);

module.exports = Pack;