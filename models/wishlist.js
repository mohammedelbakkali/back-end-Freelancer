const mongoose = require('mongoose');
const User = require('../models/user')

const wishlistSchema = mongoose.Schema({
        gig:{
            type: mongoose.Schema.Types.String, 
            ref: 'Post'
        },
        userId:{  //each language is related to only one user
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
} , { timestamps: true });


wishlistSchema.post('save',async function(){
    let userId=String(this.userId) ;
    await  User.findByIdAndUpdate({_id : userId},{$push :{wishlist:this._id}})   
})

const Wishlist = mongoose.model('Wishlist',wishlistSchema);
module.exports = Wishlist;