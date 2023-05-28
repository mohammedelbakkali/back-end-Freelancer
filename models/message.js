const mongoose = require('mongoose');
const User = require('../models/user');
const Room = require('../models/room')
const messageSchema = mongoose.Schema({

      userRecepteur:{  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },

      userEmetteur:      {  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },

      text:{type:String},

 room:  
      {  
          type: mongoose.Schema.Types.ObjectId,
          ref: 'message',
      }


},{timestamps: true })

messageSchema.post('save',async function(){

    const userRecepteur = String(this.userRecepteur);
    const userEmetteur = String(this.userEmetteur);
    const room = String(this.room);
    await User.findByIdAndUpdate({_id : userRecepteur } , { $push : { messages : this._id }})
    await User.findByIdAndUpdate({_id : userEmetteur } , { $push :  { messages : this._id }})
    await Room.findByIdAndUpdate({_id : userEmetteur } , { $push :  { messages : this._id }})

})



const Message = mongoose.model('message',messageSchema)
module.exports = Message;