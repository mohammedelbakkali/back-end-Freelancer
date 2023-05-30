const mongoose = require('mongoose');
const User = require('../models/user');


const friendsSchema = mongoose.Schema({

    userId:{  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      friend:{  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },  


},{timestamps: true });

friendsSchema.post('save',async function(){

    const userId = String(this.userId);
    await User.findByIdAndUpdate({_id : userId } , { $push : { friends : this._id }})


})

const Friends = mongoose.model('friends',friendsSchema)
module.exports = Friends;

