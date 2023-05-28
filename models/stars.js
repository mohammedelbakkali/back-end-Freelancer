const mongoose = require('mongoose');
const User = require('../models/user')
const Post =require('../models/post')
const starSchema = mongoose.Schema({
    rating: {
        type: Number,
        required: true,
    },
    userId:{  //each skill is related to only one user
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }, //this property is optional to add in the schema
    gigId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
    }
})

starSchema.post('save',async function(){
    let userId=String(this.userId);
    let gigId=String(this.gigId);
    console.log(userId,gigId);
    const  a = await  Post.findByIdAndUpdate({_id : gigId},{$push :{reviews:this._id}})
    const b =  await  User.findByIdAndUpdate({_id : userId},{$push :{reviews:this._id}})
})


const Stars = mongoose.model('Stars', starSchema);
module.exports = Stars