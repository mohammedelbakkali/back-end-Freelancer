const mongoose = require('mongoose');
const User = require('../models/user');


const roomSchema = mongoose.Schema({

    userRecepteur:{  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },

      userEmetteur:      {  
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      
    messages:[
        {  
            type: mongoose.Schema.Types.ObjectId,
            ref: 'message',   
        }
    ]

},{timestamps: true });

roomSchema.post('save',async function(){

    const userRecepteur = String(this.userRecepteur);
    const userEmetteur = String(this.userEmetteur);
    await User.findByIdAndUpdate({_id : userRecepteur } , { $push : { rooms : this._id }})
    await User.findByIdAndUpdate({_id : userEmetteur } , { $push :  { rooms : this._id }})

})

const Room = mongoose.model('room',roomSchema)
module.exports = Room;

