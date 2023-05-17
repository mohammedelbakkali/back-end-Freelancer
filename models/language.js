const mongoose = require('mongoose');
const User = require('../models/user')

const languageSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    level:{
        type : String,
        enum:[ "basic" , "conversational" , "fluent" , "bilingual" ],
        required: true
    },
    userId:{  //each language is related to only one user
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        index: true 
    }

})


languageSchema.post('save',async function(){
     let userId=String(this.userId) ;
     await  User.findByIdAndUpdate({_id : userId},{$push :{languages:this._id}})  // find the user with the exact ID that we got and update the 
                                                                                 //  array 'languages' with the newest language   
})

const Language = mongoose.model('Language', languageSchema);
module.exports = Language

























// // Middleware function to populate user
// postSchema.pre('find', function() {
//     this.populate('user');
//   });


//   // Virtual property to retrieve all posts for a user
// userSchema.virtual('posts', {
//     ref: 'Post',
//     localField: '_id',
//     foreignField: 'user'
// });
  
//   // Middleware function to automatically populate posts when a user is retrieved
// userSchema.pre('findOne', function() {
//     this.populate('posts');
// });